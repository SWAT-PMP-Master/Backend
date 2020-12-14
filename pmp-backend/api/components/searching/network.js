'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const searchTrello = async (req, res, next) => {
  try {
    const action = await controller.searchTrello(req.user)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const searchForMembers = async (req, res, next) => {
  try {
    const action = await controller.searchForMembers(req.userm)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}
// passport.authenticate('jwt', { session: false }),
router.get('/', passport.authenticate('jwt', { session: false }), searchTrello)
router.get('/', passport.authenticate('jwt', { session: false }), searchForMembers)

module.exports = router
