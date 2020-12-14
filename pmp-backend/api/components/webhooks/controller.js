'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {

  const getAWebhook = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getAWebhook(tokenKeyPair))
    return boards
  }

  const getAFieldOnAWebhook = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.field = params.field
    const boards = JSON.parse(await trelloAuth(query).getAFieldOnAWebhook(tokenKeyPair))
    return boards
  }

  return {
    getAWebhook,
    getAFieldOnAWebhook
  }
}
