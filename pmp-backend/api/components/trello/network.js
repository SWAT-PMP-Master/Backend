'use strict'

const express = require('express')
const response = require('../../../network/response')

const router = express.Router()
const trelloAuth = require('../../../utils/auth/trello/index')
const config = require('../../../../config/config')
const controller = require('../login/index')

const query = {
  appKey: config(false).trelloId,
  appSecret: config(false).trelloSecret,
  callbackUrl: config(false).apiUrl
}

const infoUser = async (req, res) => {
  try {
    const tokenKeyPair = {
      accessToken: req.params.token,
      accessTokenSecrete: config(false).trelloTokenSecret
    }
    const data = JSON.parse(await trelloAuth(query).getUserInfo(tokenKeyPair))

    const user = {
      nickname: data.username,
      email: data.email,
      password: data.id,
      rol: data.memberType,
      trelloIdUser: tokenKeyPair.accessTokenSecrete,
      token: tokenKeyPair.accessToken
    }

    if (user.email === null) user.email = `${data.username}@trello.com`
    const userSaved = await controller.upsert(user)

    console.log(userSaved)
    userSaved.data = data

    response.success(req, res, userSaved, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const boardsUser = async (req, res) => {
  try {
    const tokenKeyPair = {
      accessToken: req.params.token,
      accessTokenSecrete: config(false).trelloTokenSecret
    }
    const data = JSON.parse(await trelloAuth(query).getUserTrelloBoards(tokenKeyPair))
    response.success(req, res, data, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const boardList = async (req, res) => {
  try {
    const tokenKeyPair = {
      accessToken: req.params.token,
      accessTokenSecrete: config(false).trelloTokenSecret
    }
    const data = JSON.parse(await trelloAuth(query).getBoardLists(tokenKeyPair))
    response.success(req, res, data, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const boardCardList = async (req, res) => {
  try {
    const tokenKeyPair = {
      accessToken: req.params.token,
      accessTokenSecrete: config(false).trelloTokenSecret
    }
    const data = JSON.parse(await trelloAuth(query).getCardsOnList(tokenKeyPair))
    response.success(req, res, data, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

router.get('/get-user-info/:token', infoUser)
router.get('/get-user-boards/:token', boardsUser)
router.get('/get-board-list/:token', boardList)
router.get('/get-board-cards-list/:token', boardCardList)

module.exports = router
