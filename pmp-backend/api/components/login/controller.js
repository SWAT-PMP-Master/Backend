'use strict'

const { nanoid } = require('nanoid')
const bcrypt = require('bcrypt')
const config = require('../../../../config/config')
const trelloAuth = require('../../../utils/auth/trello/index')
const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')

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
      tableSet.trelloSecretUser = config(false).trelloSecret
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
      console.error(error)
      throw new Error(error)
    }
  }

  const infoUser = async (info) => {
    try {
      const query = {
        appKey: config(false).trelloId,
        appSecret: config(false).trelloSecret,
        callbackUrl: config(false).apiUrl
      }
      const tokenKeyPair = {
        accessToken: info,
        accessTokenSecrete: config(false).trelloSecret
      }
      const data = JSON.parse(await trelloAuth(query).getUserInfo(tokenKeyPair))
      const user = {
        nickname: data.username,
        email: data.email,
        password: data.id,
        rol: data.memberType,
        trelloIdUser: tokenKeyPair.accessTokenSecrete,
        token: tokenKeyPair.accessToken
      }
      if (user.email === null) user.email = `${data.username}@trello.com`
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
    if (!apiKeyToken) next(boom.unauthorized('apiKeyToken is required'))
    try {
      if (!userInfo) next(boom.unauthorized(error))
      const { apiKey } = await store(config(false))
      const ApiKey = await apiKey.findByToken(apiKeyToken)
      if (!ApiKey) next(boom.unauthorized())

      const Nickname = userInfo.Nickname
      const uuid = userInfo.uuid
      const email = userInfo.email
      const tokenUser = req.token
      const rol = userInfo.rol
      const payload = {
        uuid,
        Nickname,
        email,
        tokenUser,
        rol,
        scopes: ApiKey.scopes,
        data: userInfo.data
      }
      const token = jwt.sign(payload, config(false).authJwtSecret, {
        expiresIn: '12h'
      })
      delete userInfo.data.id
      const data = {
        user: userInfo,
        token: token
      }

      return data
    } catch (err) {
      throw new Error(err)
    }
  }

  return {
    login
  }
}
