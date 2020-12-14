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

const getBoardsStartsOnABoard = async (req, res, next) => {
  try {
    const board = await controller.getBoardsStartsOnABoard(req.user, req.params)
    response.success(req, res, board, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getChecklistsOnABoard = async (req, res, next) => {
  try {
    const board = await controller.getChecklistsOnABoard(req.user, req.params)
    response.success(req, res, board, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getCardsOnABoard = async (req, res, next) => {
  try {
    const board = await controller.getCardsOnABoard(req.user, req.params)
    response.success(req, res, board, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getFilteredCardsOnABoard = async (req, res, next) => {
  try {
    const board = await controller.getFilteredCardsOnABoard(req.user, req.params)
    response.success(req, res, board, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getCustomFieldsForBand = async (req, res, next) => {
  try {
    const board = await controller.getCustomFieldsForBand(req.user, req.params)
    response.success(req, res, board, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getLabelsOnABoard = async (req, res, next) => {
  try {
    const board = await controller.getLabelsOnABoard(req.user, req.params)
    response.success(req, res, board, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getBoardLists = async (req, res, next) => {
  try {
    const board = await controller.getBoardLists(req.user, req.params)
    response.success(req, res, board, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getFilteredListsOnAboard = async (req, res, next) => {
  try {
    const board = await controller.getFilteredListsOnAboard(req.user, req.params)
    response.success(req, res, board, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheMembersOfABoard = async (req, res, next) => {
  try {
    const board = await controller.getTheMembersOfABoard(req.user, req.params)
    response.success(req, res, board, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getEnabledPowerupsOnBoard = async (req, res, next) => {
  try {
    const board = await controller.getEnabledPowerupsOnBoard(req.user, req.params)
    response.success(req, res, board, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getPowerupsOnABoard = async (req, res, next) => {
  try {
    const board = await controller.getPowerupsOnABoard(req.user, req.params)
    response.success(req, res, board, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/boardsMemberShip/:idBoard', passport.authenticate('jwt', { session: false }), boardsMember)
router.get('/:board', passport.authenticate('jwt', { session: false }), boards)
router.get('/boardsAndField/:board&:field', passport.authenticate('jwt', { session: false }), boardsField)
router.get('/boardsAction/:board', passport.authenticate('jwt', { session: false }), boardsAction)
router.get('/boardCards/:id&:idCard', passport.authenticate('jwt', { session: false }), getACardOnABoard)
router.get('/boardsStarts/:boardId', passport.authenticate('jwt', { session: false }), getBoardsStartsOnABoard)
router.get('/boardChecklists/:id', passport.authenticate('jwt', { session: false }), getChecklistsOnABoard)
router.get('/boardCard/:id', passport.authenticate('jwt', { session: false }), getCardsOnABoard)
router.get('/cardsFiltered/:id&:filter', passport.authenticate('jwt', { session: false }), getFilteredCardsOnABoard)
router.get('/fieldsForBand/:id', passport.authenticate('jwt', { session: false }), getCustomFieldsForBand)
router.get('/labels/:id', passport.authenticate('jwt', { session: false }), getLabelsOnABoard)
router.get('/lists/:boardId', passport.authenticate('jwt', { session: false }), getBoardLists)
router.get('/listsFiltered/:id&:filter', passport.authenticate('jwt', { session: false }), getFilteredListsOnAboard)
router.get('/members/:id', passport.authenticate('jwt', { session: false }), getTheMembersOfABoard)
router.get('/powerUpsOnBoard/:id', passport.authenticate('jwt', { session: false }), getEnabledPowerupsOnBoard)
router.get('/getPowerUps/:id', passport.authenticate('jwt', { session: false }), getPowerupsOnABoard)

module.exports = router
