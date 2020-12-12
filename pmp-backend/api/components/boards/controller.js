'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {
  const query = utils().queryFn()

  const boardsMember = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.idBoard
      const boards = JSON.parse(await trelloAuth(query).getMemberShipBoards(tokenKeyPair))
      return boards
    } catch (e) {
      throw e
    }
  }

  const getABoard = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.board
      const board = JSON.parse(await trelloAuth(query).getBoard(tokenKeyPair))
      return board
    } catch (e) {
      throw e
    }
  }

  const getABoardField = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.board
      tokenKeyPair.field = params.field
      const board = JSON.parse(await trelloAuth(query).getBoardfield(tokenKeyPair))
      return board
    } catch (e) {
      throw e
    }
  }

  const getABoardAction = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.board
      const board = JSON.parse(await trelloAuth(query).getBoardAction(tokenKeyPair))
      return board
    } catch (e) {
      throw e
    }
  }


  return {
    boardsMember,
    getABoard,
    getABoardField,
    getABoardAction
  }
}
