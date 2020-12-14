'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {
  const query = utils().queryFn()

  const getAnOrganization = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getAnOrganization(tokenKeyPair))
    return boards
  }

  const getFieldOnOrganization = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.field = params.field
    const boards = JSON.parse(await trelloAuth(query).getFieldOnOrganization(tokenKeyPair))
    return boards
  }

  const getActionsForOrganization = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getActionsForOrganization(tokenKeyPair))
    return boards
  }

  const getBoardsInAnOrganization = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getBoardsInAnOrganization(tokenKeyPair))
    return boards
  }

  const retrieveOrganizationsExports = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).retrieveOrganizationsExports(tokenKeyPair))
    return boards
  }

  const getTheMembersOfAnOrganization = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getTheMembersOfAnOrganization(tokenKeyPair))
    return boards
  }

  const getMembershipsOfAnOrganization = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getMembershipsOfAnOrganization(tokenKeyPair))
    return boards
  }

  const getAMembershipOfAnOrganization = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getAMembershipOfAnOrganization(tokenKeyPair))
    return boards
  }

  const getThePluginDataScoped = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getThePluginDataScoped(tokenKeyPair))
    return boards
  }

  const getTagsOfAnOrganization = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getTagsOfAnOrganization(tokenKeyPair))
    return boards
  }

  const getOrganizationsNewBillableGuests = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getOrganizationsNewBillableGuests(tokenKeyPair))
    return boards
  }

  return {
    getAnOrganization,
    getFieldOnOrganization,
    getActionsForOrganization,
    getBoardsInAnOrganization,
    retrieveOrganizationsExports,
    getTheMembersOfAnOrganization,
    getMembershipsOfAnOrganization,
    getAMembershipOfAnOrganization,
    getThePluginDataScoped,
    getTagsOfAnOrganization,
    getOrganizationsNewBillableGuests
  }
}
