'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {

  const query = utils().queryFn()

  const getAnAction = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.idAction
      const action = JSON.parse(await trelloAuth(query).getAnAction(tokenKeyPair)) 
      return action
    } catch (e) {
      throw new Error(e)
    }
  }

  const getASpecificFieldOnAnAction = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.idAction
      tokenKeyPair.field = params.field
      const action = JSON.parse(await trelloAuth(query).getASpecificFieldOnAnAction(tokenKeyPair)) 
      return action
    } catch (e) {
      throw new Error(e)
    }
  }

  const getTheBoardForAnAction = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.idAction
      const action = JSON.parse(await trelloAuth(query).getTheBoardForAnAction(tokenKeyPair)) 
      return action
    } catch (e) {
      throw new Error(e)
    }
  }

  const getTheCardForAnAction = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.idAction
      const action = JSON.parse(await trelloAuth(query).getTheCardForAnAction(tokenKeyPair)) 
      return action
    } catch (e) {
      throw new Error(e)
    }
  }

  const getTheListForAnAction = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.idAction
      const action = JSON.parse(await trelloAuth(query).getTheListForAnAction(tokenKeyPair)) 
      return action
    } catch (e) {
      throw new Error(e)
    }
  }

  const getTheMemberOfAnAction = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.idAction
      const action = JSON.parse(await trelloAuth(query).getTheMemberOfAnAction(tokenKeyPair)) 
      return action
    } catch (e) {
      throw new Error(e)
    }
  }

  const getTheMemberCreatorOfAnAction = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.idAction
      const action = JSON.parse(await trelloAuth(query).getTheMemberCreatorOfAnAction(tokenKeyPair)) 
      return action
    } catch (e) {
      throw new Error(e)
    }
  }

  const getTheOrganizationOfAnAction = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.idAction
      const action = JSON.parse(await trelloAuth(query).getTheOrganizationOfAnAction(tokenKeyPair)) 
      return action
    } catch (e) {
      throw new Error(e)
    }
  }

  const getActionsReactions = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.idAction
      const action = JSON.parse(await trelloAuth(query).getActionsReactions(tokenKeyPair)) 
      return action
    } catch (e) {
      throw new Error(e)
    }
  }

  const getActionReaction = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.idAction
      const action = JSON.parse(await trelloAuth(query).getActionReaction(tokenKeyPair)) 
      return action
    } catch (e) {
      throw new Error(e)
    }
  }

  const listActionSummaryOfReactions = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.idAction
      const action = JSON.parse(await trelloAuth(query).listActionSummaryOfReactions(tokenKeyPair)) 
      return action
    } catch (e) {
      throw new Error(e)
    }
  }

  return {
    getAnAction,
    getASpecificFieldOnAnAction,
    getTheBoardForAnAction,
    getTheCardForAnAction,
    getTheListForAnAction,
    getTheMemberOfAnAction,
    getTheMemberCreatorOfAnAction,
    getTheOrganizationOfAnAction,
    getActionsReactions,
    getActionReaction,
    listActionSummaryOfReactions
  }
}
