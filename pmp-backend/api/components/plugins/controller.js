'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {
  const query = utils().queryFn()

  const getAPlugin = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getAPlugin(tokenKeyPair))
    return boards
  }

  const getPluginsMemberPrivacyCompliance = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getPluginsMemberPrivacyCompliance(tokenKeyPair))
    return boards
  }

  return {
    getAPlugin,
    getPluginsMemberPrivacyCompliance
  }
}
