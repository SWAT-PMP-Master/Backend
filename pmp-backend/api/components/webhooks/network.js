'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const getAWebhook = async (req, res, next) => {
  try {
    const action = await controller.getAWebhook(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getAFieldOnAWebhook = async (req, res, next) => {
  try {
    const action = await controller.getAFieldOnAWebhook(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}
// passport.authenticate('jwt', { session: false }),
router.get('/:id', passport.authenticate('jwt', { session: false }), getAWebhook)
router.get('/fields/:id&:field', passport.authenticate('jwt', { session: false }), getAFieldOnAWebhook)

module.exports = router
