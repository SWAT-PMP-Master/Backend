'use strict'

const config = require('../../../../config/config')
const trelloAuth = require('../../../utils/auth/trello/index')
// const boom = require('@hapi/boom')
// const jwt = require('jsonwebtoken')

const query = {
  appKey: config(false).trelloId,
  appSecret: config(false).trelloSecret,
  callbackUrl: config(false).apiUrl
}

module.exports = (store) => {
  const boardsInfo = async (body) => {
    try {
      const tokenKeyPair = {
        accToken: body.token.trelloSecretUser,
        accTokenSecrete: config(false).trelloSecret
      }

      const data = JSON.parse(await trelloAuth(query).getUserTrelloBoards(tokenKeyPair))
      return data
    } catch (err) {
      console.error(err)
    }
  }

  const boardsList = async (body) => {
    try {
      const tokenKeyPair = {
        accToken: body.token.trelloSecretUser,
        accTokenSecrete: config(false).trelloSecret,
        boardId: body.data.idBoards
      }

      const data = JSON.parse(await trelloAuth(query).getBoardLists(tokenKeyPair))
      return data
    } catch (err) {
      console.error(err)
    }
  }

  const cardList = async (body, idCard) => {
    try {
      const tokenKeyPair = {
        accToken: body.token.trelloSecretUser,
        accTokenSecrete: config(false).trelloSecret,
        listId: idCard
      }

      const data = JSON.parse(await trelloAuth(query).getCardsOnList(tokenKeyPair))
      return data
    } catch (err) {
      console.error(err)
    }
  }

  return {
    boardsInfo,
    boardsList,
    cardList
  }
}
