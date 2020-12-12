'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const idUserInfoById = async (req, res, next) => {
    try {
      const userInfo = await controller.idUserInfoById(req.user, req.params)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

const idUserInfo = async (req, res, next) => {
    try {
      const userInfo = await controller.idUserInfo(req.user)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/user/:idUserGet', passport.authenticate('jwt', { session: false }), idUserInfoById)
router.get('/user/', passport.authenticate('jwt', { session: false }), idUserInfo)

module.exports = router
