'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const getANotification = async (req, res, next) => {
  try {
    const action = await controller.getANotification(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getAFieldOfANotification = async (req, res, next) => {
  try {
    const action = await controller.getAFieldOfANotification(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheBoardANotificationIsOn = async (req, res, next) => {
  try {
    const action = await controller.getTheBoardANotificationIsOn(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheCardANotificationIsOn = async (req, res, next) => {
  try {
    const action = await controller.getTheCardANotificationIsOn(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheListANotificationIsOn = async (req, res, next) => {
  try {
    const action = await controller.getTheListANotificationIsOn(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheMemberANotificationIsAbout = async (req, res, next) => {
  try {
    const action = await controller.getTheMemberANotificationIsAbout(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheMemberWhoCreatedTheNotification = async (req, res, next) => {
  try {
    const action = await controller.getTheMemberWhoCreatedTheNotification(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getANotificationAssociatedOrganization = async (req, res, next) => {
  try {
    const action = await controller.getANotificationAssociatedOrganization(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/:id', passport.authenticate('jwt', { session: false }), getANotification)
router.get('/field/:id&:field', passport.authenticate('jwt', { session: false }), getAFieldOfANotification)
router.get('/board/:id', passport.authenticate('jwt', { session: false }), getTheBoardANotificationIsOn)
router.get('/card/:id', passport.authenticate('jwt', { session: false }), getTheCardANotificationIsOn)
router.get('/list/:id', passport.authenticate('jwt', { session: false }), getTheListANotificationIsOn)
router.get('/notifications/:id', passport.authenticate('jwt', { session: false }), getTheMemberANotificationIsAbout)
router.get('/notificationCreator/:id', passport.authenticate('jwt', { session: false }), getTheMemberWhoCreatedTheNotification)
router.get('/notificationOrganization/:id', passport.authenticate('jwt', { session: false }), getANotificationAssociatedOrganization)

module.exports = router
