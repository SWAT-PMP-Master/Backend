'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {

  const query = utils().queryFn()

  const getALabel = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getALabel(tokenKeyPair))
    return boards
  }

  return {
    getALabel
  }
}
