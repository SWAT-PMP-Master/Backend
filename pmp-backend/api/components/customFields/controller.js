'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {

  const query = utils().queryFn()

  const getACustomField = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getACustomField(tokenKeyPair))
    return boards
  }

  const getOptionsOfCustomFieldDropDown = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getOptionsOfCustomFieldDropDown(tokenKeyPair))
    return boards
  }

  const getOptionOfCustomFieldDropdown = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getOptionOfCustomFieldDropdown(tokenKeyPair))
    return boards
  }

  return {
    getACustomField,
    getOptionsOfCustomFieldDropDown,
    getOptionOfCustomFieldDropdown
  }
}
