'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const getAnAction = async (req, res, next) => {
  try {
    const action = await controller.getAnAction(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getASpecificFieldOnAnAction = async (req, res, next) => {
  try {
    const action = await controller.getASpecificFieldOnAnAction(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheBoardForAnAction = async (req, res, next) => {
  try {
    const action = await controller.getTheBoardForAnAction(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheCardForAnAction = async (req, res, next) => {
  try {
    const action = await controller.getTheCardForAnAction(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheListForAnAction = async (req, res, next) => {
  try {
    const action = await controller.getTheListForAnAction(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheMemberOfAnAction = async (req, res, next) => {
  try {
    const action = await controller.getTheMemberOfAnAction(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheMemberCreatorOfAnAction = async (req, res, next) => {
  try {
    const action = await controller.getTheMemberCreatorOfAnAction(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheOrganizationOfAnAction = async (req, res, next) => {
  try {
    const action = await controller.getTheOrganizationOfAnAction(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getActionsReactions = async (req, res, next) => {
  try {
    const action = await controller.getActionsReactions(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getActionReaction = async (req, res, next) => {
  try {
    const action = await controller.getActionReaction(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const listActionSummaryOfReactions = async (req, res, next) => {
  try {
    const action = await controller.listActionSummaryOfReactions(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/:idAction', passport.authenticate('jwt', { session: false }), getAnAction)
router.get('/specified/:idAction&:field', passport.authenticate('jwt', { session: false }), getASpecificFieldOnAnAction)
router.get('/board/:idAction', passport.authenticate('jwt', { session: false }), getTheBoardForAnAction)
router.get('/card/:idAction', passport.authenticate('jwt', { session: false }), getTheCardForAnAction)
router.get('/list/:idAction', passport.authenticate('jwt', { session: false }), getTheListForAnAction)
router.get('/member/:idAction', passport.authenticate('jwt', { session: false }), getTheMemberOfAnAction)
router.get('/memberCreator/:idAction', passport.authenticate('jwt', { session: false }), getTheMemberCreatorOfAnAction)
router.get('/organization/:idAction', passport.authenticate('jwt', { session: false }), getTheOrganizationOfAnAction)
router.get('/reactions/:idAction', passport.authenticate('jwt', { session: false }), getActionsReactions)
router.get('/reaction/:idAction', passport.authenticate('jwt', { session: false }), getActionReaction)
router.get('/summary/:idAction', passport.authenticate('jwt', { session: false }), listActionSummaryOfReactions)

module.exports = router
