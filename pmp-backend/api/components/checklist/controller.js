'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {
  const query = utils().queryFn()

  const getAChecklist = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getAChecklist(tokenKeyPair))
    return boards
  }

  const getFieldOnAChecklist = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.field = params.field
    const boards = JSON.parse(await trelloAuth(query).getFieldOnAChecklist(tokenKeyPair))
    return boards
  }

  const getTheBoardTheChecklistIsOn = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getTheBoardTheChecklistIsOn(tokenKeyPair))
    return boards
  }

  const getTheCardAChecklistIsOn = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getTheCardAChecklistIsOn(tokenKeyPair))
    return boards
  }

  const getCheckitemsOnAChecklist = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getCheckitemsOnAChecklist(tokenKeyPair))
    return boards
  }

  const getACheckitemOnAChecklist = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getACheckitemOnAChecklist(tokenKeyPair))
    return boards
  }

  return {
    getAChecklist,
    getFieldOnAChecklist,
    getTheBoardTheChecklistIsOn,
    getTheCardAChecklistIsOn,
    getCheckitemsOnAChecklist,
    getACheckitemOnAChecklist
  }
}
