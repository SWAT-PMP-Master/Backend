'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {
  const query = utils().queryFn()

  const getANotification = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getANotification(tokenKeyPair))
    return boards
  }

  const getAFieldOfANotification = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.field = params.field
    const boards = JSON.parse(await trelloAuth(query).getAFieldOfANotification(tokenKeyPair))
    return boards
  }

  const getTheBoardANotificationIsOn = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getTheBoardANotificationIsOn(tokenKeyPair))
    return boards
  }

  const getTheCardANotificationIsOn = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getTheCardANotificationIsOn(tokenKeyPair))
    return boards
  }

  const getTheListANotificationIsOn = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getTheListANotificationIsOn(tokenKeyPair))
    return boards
  }

  const getTheMemberANotificationIsAbout = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getTheMemberANotificationIsAbout(tokenKeyPair))
    return boards
  }

  const getTheMemberWhoCreatedTheNotification = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getTheMemberWhoCreatedTheNotification(tokenKeyPair))
    return boards
  }

  const getANotificationAssociatedOrganization = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getANotificationAssociatedOrganization(tokenKeyPair))
    return boards
  }

  return {
    getANotification,
    getAFieldOfANotification,
    getTheBoardANotificationIsOn,
    getTheCardANotificationIsOn,
    getTheListANotificationIsOn,
    getTheMemberANotificationIsAbout,
    getTheMemberWhoCreatedTheNotification,
    getANotificationAssociatedOrganization
  }
}
