'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {
  const query = utils().queryFn()

  const boardsMember = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.idBoard
    const boards = JSON.parse(await trelloAuth(query).getMemberShipBoards(tokenKeyPair))
    return boards
  }

  const getABoard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.board
    const board = JSON.parse(await trelloAuth(query).getBoard(tokenKeyPair))
    return board
  }

  const getABoardField = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.board
    tokenKeyPair.field = params.field
    const board = JSON.parse(await trelloAuth(query).getBoardfield(tokenKeyPair))
    return board
  }

  const getABoardAction = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.board
    const board = JSON.parse(await trelloAuth(query).getBoardAction(tokenKeyPair))
    return board
  }

  const getACardOnABoard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.idCard = params.idCard
    const board = JSON.parse(await trelloAuth(query).getACardOnABoard(tokenKeyPair))
    return board
  }

  const getBoardsStartsOnABoard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.boardsId = params.boardsId
    const board = JSON.parse(await trelloAuth(query).getBoardsStartsOnABoard(tokenKeyPair))
    return board
  }

  const getChecklistsOnABoard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const board = JSON.parse(await trelloAuth(query).getChecklistsOnABoard(tokenKeyPair))
    return board
  }

  const getCardsOnABoard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const board = JSON.parse(await trelloAuth(query).getCardsOnABoard(tokenKeyPair))
    return board
  }

  const getFilteredCardsOnABoard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.filter = params.filter
    const board = JSON.parse(await trelloAuth(query).getFilteredCardsOnABoard(tokenKeyPair))
    return board
  }

  const getCustomFieldsForBand = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const board = JSON.parse(await trelloAuth(query).getCustomFieldsForBand(tokenKeyPair))
    return board
  }

  const getLabelsOnABoard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const board = JSON.parse(await trelloAuth(query).getLabelsOnABoard(tokenKeyPair))
    return board
  }

  const getFilteredListsOnAboard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.boardId = params.boardId
    const board = JSON.parse(await trelloAuth(query).getFilteredListsOnAboard(tokenKeyPair))
    return board
  }

  const getTheMembersOfABoard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    tokenKeyPair.filter = params.filter
    const board = JSON.parse(await trelloAuth(query).getTheMembersOfABoard(tokenKeyPair))
    return board
  }

  const getEnabledPowerupsOnBoard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const board = JSON.parse(await trelloAuth(query).getEnabledPowerupsOnBoard(tokenKeyPair))
    return board
  }

  const getPowerupsOnABoard = async (body, params) => {
    let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.id
    const board = JSON.parse(await trelloAuth(query).getPowerupsOnABoard(tokenKeyPair))
    return board
  }

  return {
    boardsMember,
    getABoard,
    getABoardField,
    getABoardAction,
    getACardOnABoard,
    getBoardsStartsOnABoard,
    getChecklistsOnABoard,
    getCardsOnABoard,
    getFilteredCardsOnABoard,
    getCustomFieldsForBand,
    getLabelsOnABoard,
    getBoardLists,
    getFilteredListsOnAboard,
    getTheMembersOfABoard,
    getEnabledPowerupsOnBoard,
    getPowerupsOnABoard
  }
}
