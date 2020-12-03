'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const boardsInfo = async (req, res, next) => {
  controller.boardsInfo(req.user)
    .then((user) => {
      response.success(req, res, user, 200)
    })
    .catch(err => {
      response.error(req, res, err, 400)
    })
}

router.get('/boards', passport.authenticate('jwt', { session: false }), boardsInfo)

module.exports = router
