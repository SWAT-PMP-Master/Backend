'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {

  const query = utils().queryFn()

  const getACard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getACard(tokenKeyPair))
    return boards
  }

  const getAFieldOnACard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.field = params.field
    const boards = JSON.parse(await trelloAuth(query).getAFieldOnACard(tokenKeyPair))
    return boards
  }

  const getActionsOnACard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getActionsOnACard(tokenKeyPair))
    return boards
  }

  const getAttachementsOnACard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.idAttachment = params.idAttachment
    const boards = JSON.parse(await trelloAuth(query).getAttachementsOnACard(tokenKeyPair))
    return boards
  }

  const getAnAttachmentOnACard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getAnAttachmentOnACard(tokenKeyPair))
    return boards
  }

  const getTheBoardCardIsOn = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getTheBoardCardIsOn(tokenKeyPair))
    return boards
  }

  const getCheckitemsOnABoard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getCheckitemsOnABoard(tokenKeyPair))
    return boards
  }

  const getChecklistsOnABoard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.idCheckItem = params.idCheckItem
    const boards = JSON.parse(await trelloAuth(query).getChecklistsOnABoard(tokenKeyPair))
    return boards
  }

  const getCheckItemOnACard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getCheckItemOnACard(tokenKeyPair))
    return boards
  }

  const getTheListOfACard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getTheListOfACard(tokenKeyPair))
    return boards
  }

  const getTheMembersOfACard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getTheMembersOfACard(tokenKeyPair))
    return boards
  }

  const getMembersWhoHaveVotedOnACard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getMembersWhoHaveVotedOnACard(tokenKeyPair))
    return boards
  }

  const getPluginDataOnACard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getPluginDataOnACard(tokenKeyPair))
    return boards
  }

  const getAStickerOnACard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getAStickerOnACard(tokenKeyPair))
    return boards
  }

  const getAStickerOnACard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.idSticker = params.idSticker
    const boards = JSON.parse(await trelloAuth(query).getAStickerOnACard(tokenKeyPair))
    return boards
  }

  const getCustomFieldItemsForACard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const boards = JSON.parse(await trelloAuth(query).getCustomFieldItemsForACard(tokenKeyPair))
    return boards
  }

  return {
    getACard,
    getAFieldOnACard,
    getActionsOnACard,
    getAttachementsOnACard,
    getAnAttachmentOnACard,
    getTheBoardCardIsOn,
    getCheckitemsOnABoard,
    getChecklistsOnABoard,
    getCheckItemOnACard,
    getTheListOfACard,
    getTheMembersOfACard,
    getMembersWhoHaveVotedOnACard,
    getPluginDataOnACard,
    getStickersOnACard,
    getAStickerOnACard,
    getCustomFieldItemsForACard
  }
}
