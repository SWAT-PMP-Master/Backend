'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {
  const query = utils().queryFn()

  const boardsMember = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.idBoard
    const boards = JSON.parse(await trelloAuth(query).getMemberShipBoards(tokenKeyPair))
    return boards
  }

  const getABoard = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.board
    const board = JSON.parse(await trelloAuth(query).getBoard(tokenKeyPair))
    return board
  }

  const getABoardField = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.board
    tokenKeyPair.field = params.field
    const board = JSON.parse(await trelloAuth(query).getBoardfield(tokenKeyPair))
    return board
  }

  const getABoardAction = async (body, params) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    tokenKeyPair.id = params.board
    const board = JSON.parse(await trelloAuth(query).getBoardAction(tokenKeyPair))
    return board
  }

  return {
    boardsMember,
    getABoard,
    getABoardField,
    getABoardAction
  }
}
