'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {
  const idUserInfoById = async (body, params) => {
    try {
      const query = utils().queryFn()
      const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.idUserGet
      const member = JSON.parse(await trelloAuth(query).getUsers(tokenKeyPair))
      return member
    } catch (e) {
      throw new Error(e)
    }
  }

  const idUserInfo = async (body) => {
    try {
      const query = utils().queryFn()
      const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      const data = JSON.parse(await trelloAuth(query).getUserInfo(tokenKeyPair))
      tokenKeyPair.id = data.id
      const member = JSON.parse(await trelloAuth(query).getUsers(tokenKeyPair))
      return member
    } catch (e) {
      throw new Error(e)
    }
  }

  return {
    idUserInfo,
    idUserInfoById
  }
}
