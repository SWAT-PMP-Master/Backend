'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')

// const boom = require('@hapi/boom')
// const jwt = require('jsonwebtoken')

module.exports = (store) => {
  const query = utils().queryFn()

  const boardsInfo = async (body) => {
    const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
    const data = JSON.parse(await trelloAuth(query).getUserTrelloBoards(tokenKeyPair))
    return data
  }

  const boardsList = async (body) => {
    const boardsTotal = body.data
    let elements = []
    for (let i = 0; i < boardsTotal.length; i++) {
      const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.boardId = boardsTotal[i]
      const data = JSON.parse(await trelloAuth(query).getBoardLists(tokenKeyPair))
      for (let j = 0; j < data.length; j++) {
        const tokenKeyPairCard = utils().tokenKeyPairCardFn(body.token.trelloSecretUser, data[j].id)
        const dataCard = JSON.parse(await trelloAuth(query).getCardsOnList(tokenKeyPairCard))
        data[j].list = dataCard
      }
      elements = elements.concat([data])
    }
    return elements
  }

  const cardList = async (body, idCard) => {
    try {
      const tokenKeyPair = utils().tokenKeyPairFn(body.token.trelloSecretUser)
      tokenKeyPair.listId = idCard

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
