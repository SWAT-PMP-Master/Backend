'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {
  const query = utils().queryFn()

  const getListAvailableEmoji = async (body) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    const boards = JSON.parse(await trelloAuth(query).getListAvailableEmoji(tokenKeyPair))
    return boards
  }

  return {
    getListAvailableEmoji
  }
}
