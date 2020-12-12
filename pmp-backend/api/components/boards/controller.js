'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

module.exports = (store) => {
  const query = utils().queryFn()

  const boardsMember = async (body, params) => {
    try {
      let tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.id = params.idBoard
      console.log(tokenKeyPair)
      const boards = JSON.parse(await trelloAuth(query).getMemberShipBoards(tokenKeyPair))
      return boards
    } catch (e) {
      throw e
    }
  }

  const getABoard = async (body, params) => {
    try {
      
    } catch (e) {
      throw e
    }
  }

  return {
    boardsMember,
    getABoard
  }
}
