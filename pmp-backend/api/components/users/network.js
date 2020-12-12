'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const idUserInfo = async (req, res, next) => {
    try {
    const userInfo = controller.idUserInfo(req.idUserInfo, req.idUserGet)
    response.success(req, res, userInfo, 200)
  } catch (err) {
    console.log(err)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/user/:idUser&:idUserGet', passport.authenticate('jwt', { session: false }), idUserInfo)
module.exports = router