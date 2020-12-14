'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const getBoardsPercen = async (req, res, next) => {
  try {
    const action = await controller.getBoardsPercen(req.user, req.params)
    const actionObj = {}
    for (const act in action) {
      actionObj[act] = action[act]
    }
    response.success(req, res, actionObj, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getMainCardPercen = async (req, res, next) => {
  try {
    const action = await controller.getMainCardPercen(req.user)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getCardsInCardsPercen = async (req, res, next) => {
  try {
    const action = await getCardsInCardsPercen(req.user)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getCheckListPercen = async (req, res, next) => {
  try {
    const action = await controller.getCheckListPercen(req.user)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTotalCheckList = async (req, res, next) => {
  try {
    const action = await controller.getTotalCheckList(req.user)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/1/:idBoard', passport.authenticate('jwt', { session: false }), getBoardsPercen)
router.get('/2/', passport.authenticate('jwt', { session: false }), getMainCardPercen)
router.get('/3/', passport.authenticate('jwt', { session: false }), getCardsInCardsPercen)
router.get('/4/', passport.authenticate('jwt', { session: false }), getCheckListPercen)
router.get('/5/', passport.authenticate('jwt', { session: false }), getTotalCheckList)

module.exports = router
