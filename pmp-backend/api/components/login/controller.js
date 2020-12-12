'use strict'

const { nanoid } = require('nanoid')
const bcrypt = require('bcrypt')
const config = require('../../../../config/config')
const trelloAuth = require('../../../utils/auth/trello/index')
const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const utils = require('../../../utils/utils')

module.exports = (store) => {
  const upsert = async (data) => {
    try {
      const { users, table } = await store(config(false))
      const userExist = await users.findByNickname(data.nickname)
      const newUser = {
        uuid: nanoid(),
        Nickname: data.nickname,
        email: data.email,
        password: data.password,
        rol: data.rol
      }
      const tableSet = {
        uuid: nanoid(),
        trelloIdUser: data.trelloIdUser,
        trelloSecretUser: data.token,
        userId: ''
      }

      if (userExist !== null) {
        newUser.uuid = userExist.uuid
      }

      newUser.password = await bcrypt.hash(data.password, 5)
      newUser.rol = data.rol || 'developer'
      tableSet.trelloIdUser = config(false).trelloId
      const userSaved = await users.createOrUpdate(newUser)

      tableSet.userId = userSaved.id

      const tableExist = await table.findByUser(userSaved.id)
      if (tableExist !== null) {
        tableSet.uuid = tableExist.uuid
      }

      await table.createOrUpdate(tableSet)
      delete userSaved.createdAt
      delete userSaved.updatedAt
      delete userSaved.id
      delete userSaved.password

      // userSaved.token = tableSaved.trelloSecretUser
      return userSaved
    } catch (error) {
      throw new Error(error)
    }
  }

  const infoUser = async (info) => {
    try {
      const query = utils().queryFn()
      const tokenKeyPair = utils().tokenKeyPairFn(info)

      const data = JSON.parse(await trelloAuth(query).getUserInfo(tokenKeyPair))
      const user = {
        nickname: data.username,
        email: data.email,
        password: data.id,
        rol: data.memberType,
        trelloIdUser: info,
        token: tokenKeyPair.accessToken
      }
      if (!user.email) user.email = `${data.username}@trello.com`
      const userSaved = await upsert(user)
      userSaved.data = data

      return userSaved
    } catch (err) {
      throw new Error(err)
    }
  }

  const login = async (req) => {
    const userInfo = await infoUser(req.token)
    const apiKeyToken = config(false).apiKeyToken
    if (!apiKeyToken) throw new Error(boom.unauthorized('apiKeyToken is required'))
    try {
      if (!userInfo) throw new Error(boom.unauthorized())
      const { apiKey } = await store(config(false))
      const ApiKey = await apiKey.findByToken(apiKeyToken)
      if (!ApiKey) throw new Error(boom.unauthorized())

      const { data, ...userNewInfo } = userInfo
      const { id, idBoards } = data

      const payload = {
        id,
        uuid: userNewInfo.uuid,
        Nickname: userNewInfo.Nickname,
        email: userNewInfo.email,
        tokenUser: req.token,
        rol: userNewInfo.rol,
        scopes: ApiKey.scopes,
        boards: idBoards
      }
      const token = jwt.sign(payload, config(false).authJwtSecret, {
        expiresIn: '12h'
      })

      const userInfoReturn = {
        user: userNewInfo,
        token: token
      }

      return userInfoReturn
    } catch (err) {
      throw new Error(err)
    }
  }

  return {
    login
  }
}
