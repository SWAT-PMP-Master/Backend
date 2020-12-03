'use strict'

const { nanoid } = require('nanoid')
const bcrypt = require('bcrypt')
const config = require('../../../../config/config')

module.exports = (store) => {
  const upsert = async (data) => {
    try {
      console.log(data)
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

  const login = (body) => {
    console.log(body)
    return body
  }

  return {
    upsert,
    login
  }
}
