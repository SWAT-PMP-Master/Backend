'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {

  const searchTrello = async (body) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    const boards = JSON.parse(await trelloAuth(query).searchTrello(tokenKeyPair))
    return boards
  }

  const searchForMembers = async (body) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    const boards = JSON.parse(await trelloAuth(query).searchForMembers(tokenKeyPair))
    return boards
  }

  return {
    searchTrello,
    searchForMembers
  }
}
