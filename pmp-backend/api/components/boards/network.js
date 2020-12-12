'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const boardsMember = async (req, res, next) => {
    try {
      const userInfo = await controller.idUserInfo(req.user)
      response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/boards', passport.authenticate('jwt', { session: false }), boardsMember)

module.exports = router
