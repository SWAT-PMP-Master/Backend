'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {
  const query = utils().queryFn()

  const searchTrello = async (body) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    const boards = JSON.parse(await trelloAuth(query).searchTrello(tokenKeyPair))
    return boards
  }

  const searchForMembers = async (body) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    const boards = JSON.parse(await trelloAuth(query).searchForMembers(tokenKeyPair))
    return boards
  }

  return {
    searchTrello,
    searchForMembers
  }
}
