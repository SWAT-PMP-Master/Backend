'use strict'

const config = require('../../../../config/config')
const trelloAuth = require('../../../utils/auth/trello/index')
// const boom = require('@hapi/boom')
// const jwt = require('jsonwebtoken')

module.exports = (store) => {
  const boardsInfo = async (body) => {
    try {
      const query = {
        appKey: config(false).trelloId,
        appSecret: config(false).trelloSecret,
        callbackUrl: config(false).apiUrl
      }

      const tokenKeyPair = {
        accessToken: body.token.trelloSecretUser,
        accessTokenSecrete: config(false).trelloSecret,
        boardId: body.data.idBoards
      }
      console.log('hola')
      const data = JSON.parse(await trelloAuth(query).getUserTrelloBoards(tokenKeyPair))
      return data
    } catch (err) {
      throw new Error(err)
    }
  }

  return {
    boardsInfo
  }
}
