'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const getACard = async (req, res, next) => {
  try {
    const action = await controller.getACard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getACard = async (req, res, next) => {
  try {
    const action = await controller.getACard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getAFieldOnACard = async (req, res, next) => {
  try {
    const action = await controller.getAFieldOnACard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getActionsOnACard = async (req, res, next) => {
  try {
    const action = await controller.getActionsOnACard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getAttachementsOnACard = async (req, res, next) => {
  try {
    const action = await controller.getAttachementsOnACard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getAnAttachmentOnACard = async (req, res, next) => {
  try {
    const action = await controller.getAnAttachmentOnACard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheBoardCardIsOn = async (req, res, next) => {
  try {
    const action = await controller.getTheBoardCardIsOn(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getCheckitemsOnABoard = async (req, res, next) => {
  try {
    const action = await controller.getCheckitemsOnABoard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getChecklistsOnABoard = async (req, res, next) => {
  try {
    const action = await controller.getChecklistsOnABoard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getCheckItemOnACard = async (req, res, next) => {
  try {
    const action = await controller.getCheckItemOnACard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheListOfACard = async (req, res, next) => {
  try {
    const action = await controller.getTheListOfACard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheMembersOfACard = async (req, res, next) => {
  try {
    const action = await controller.getTheMembersOfACard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getMembersWhoHaveVotedOnACard = async (req, res, next) => {
  try {
    const action = await controller.getMembersWhoHaveVotedOnACard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getPluginDataOnACard = async (req, res, next) => {
  try {
    const action = await controller.getPluginDataOnACard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getStickersOnACard = async (req, res, next) => {
  try {
    const action = await controller.getStickersOnACard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getAStickerOnACard = async (req, res, next) => {
  try {
    const action = await controller.getAStickerOnACard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getCustomFieldItemsForACard = async (req, res, next) => {
  try {
    const action = await controller.getCustomFieldItemsForACard(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/:id', passport.authenticate('jwt', { session: false }), getACard)
router.get('/fieldCard/:id&:field', passport.authenticate('jwt', { session: false }), getAFieldOnACard)
router.get('/actionsCard/:id', passport.authenticate('jwt', { session: false }), getActionsOnACard)
router.get('/attachements/:id', passport.authenticate('jwt', { session: false }), getAttachementsOnACard)
router.get('/attachmentOnCard/:id&idAttachment', passport.authenticate('jwt', { session: false }), getAnAttachmentOnACard)
router.get('/boardsCards/:id', passport.authenticate('jwt', { session: false }), getTheBoardCardIsOn)
router.get('/checkItems/:id', passport.authenticate('jwt', { session: false }), getCheckitemsOnABoard)
router.get('/checkLists/:id', passport.authenticate('jwt', { session: false }), getChecklistsOnABoard)
router.get('/checkItemOnACard/:id&:idCheckItem', passport.authenticate('jwt', { session: false }), getCheckItemOnACard)
router.get('/listCard/:id', passport.authenticate('jwt', { session: false }), getTheListOfACard)
router.get('/memberCard/:id', passport.authenticate('jwt', { session: false }), getTheMembersOfACard)
router.get('/membersVoted/:id', passport.authenticate('jwt', { session: false }), getMembersWhoHaveVotedOnACard)
router.get('/pluginData/:id', passport.authenticate('jwt', { session: false }), getPluginDataOnACard)
router.get('/stickers/:id', passport.authenticate('jwt', { session: false }), getStickersOnACard)
router.get('/stickersCard/:id&:idSticker', passport.authenticate('jwt', { session: false }), getAStickerOnACard)
router.get('/customField/:id', passport.authenticate('jwt', { session: false }), getCustomFieldItemsForACard)

module.exports = router
