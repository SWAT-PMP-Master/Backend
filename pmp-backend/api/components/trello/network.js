'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const boardsInfo = async (req, res, next) => {
  controller.boardsInfo(req.user)
    .then((user) => {
      response.success(req, res, user, 200)
    })
    .catch(err => {
      response.error(req, res, err, 400)
    })
}

const boardsList = async (req, res, next) => {
  controller.boardsList(req.user)
    .then((user) => {
      response.success(req, res, user, 200)
    })
    .catch(err => {
      response.error(req, res, err, 400)
    })
}

const cardList = async (req, res, next) => {
  controller.cardList(req.user, req.params.idCard)
    .then((user) => {
      response.success(req, res, user, 200)
    })
    .catch(err => {
      response.error(req, res, err, 400)
    })
}
// passport.authenticate('jwt', { session: false }),
router.get('/boards', passport.authenticate('jwt', { session: false }), boardsInfo)
router.get('/boards-list', passport.authenticate('jwt', { session: false }), boardsList)
router.get('/card-list/:idCard', passport.authenticate('jwt', { session: false }), cardList)
module.exports = router
