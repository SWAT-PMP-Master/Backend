'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const boardsInfo = async (req, res, next) => {
  try {
    const user = await controller.boardsInfo(req.user)
    response.success(req, res, user, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const boardsList = async (req, res, next) => {
  try {
    const user = await controller.boardsList(req.user)
    response.success(req, res, user, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const cardList = async (req, res, next) => {
  try {
    const user = await controller.cardList(req.user, req.params.idCard)
    response.success(req, res, user, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/boards', passport.authenticate('jwt', { session: false }), boardsInfo)
router.get('/boards-list', passport.authenticate('jwt', { session: false }), boardsList)
router.get('/card-list/:idCard', passport.authenticate('jwt', { session: false }), cardList)

module.exports = router
