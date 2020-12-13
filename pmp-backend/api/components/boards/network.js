'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const boardsMember = async (req, res, next) => {
  try {
    const boardInfo = await controller.boardsMember(req.user, req.params)
    response.success(req, res, boardInfo, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const boards = async (req, res, next) => {
  try {
    const board = await controller.getABoard(req.user, req.params)
    response.success(req, res, board, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const boardsField = async (req, res, next) => {
  try {
    const board = await controller.getABoardField(req.user, req.params)
    response.success(req, res, board, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const boardsAction = async (req, res, next) => {
  try {
    const board = await controller.getABoardAction(req.user, req.params)
    response.success(req, res, board, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/boardsMemberShip/:idBoard', passport.authenticate('jwt', { session: false }), boardsMember)
router.get('/boards/:board', passport.authenticate('jwt', { session: false }), boards)
router.get('/boardsAndField/:board&:field', passport.authenticate('jwt', { session: false }), boardsField)
router.get('/boardsAction/:board', passport.authenticate('jwt', { session: false }), boardsAction)

module.exports = router
