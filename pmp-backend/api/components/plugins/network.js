'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const getAPlugin = async (req, res, next) => {
  try {
    const action = await controller.getAPlugin(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getPluginsMemberPrivacyCompliance = async (req, res, next) => {
  try {
    const action = await controller.getPluginsMemberPrivacyCompliance(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/:id', passport.authenticate('jwt', { session: false }), getAPlugin)
router.get('/member/:id', passport.authenticate('jwt', { session: false }), getPluginsMemberPrivacyCompliance)

module.exports = router
