'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const getListAvailableEmoji = async (req, res, next) => {
  try {
    const action = await controller.getListAvailableEmoji(req.user)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/', passport.authenticate('jwt', { session: false }), getListAvailableEmoji)

module.exports = router
