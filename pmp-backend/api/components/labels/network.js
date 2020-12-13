'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const getALabel = async (req, res, next) => {
  try {
    const action = await controller.getALabel(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/id/:id', passport.authenticate('jwt', { session: false }), getALabel)

module.exports = router
