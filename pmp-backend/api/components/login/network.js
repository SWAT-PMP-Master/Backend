'use strict'

const express = require('express')
// const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

// const config = require('../../../../config/config')
/* const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const store = require('../../../../pmp-db/index')
const utils = require('../../../../pmp-db/utils/index') */

// require('../../../utils/auth/strategies/basic')
// require('../../../utils/auth/strategies/jwt')

const login = async (req, res, next) => {
  controller.login(req.body)
    .then((list) => {
      response.success(req, res, list, 200)
    })
    .catch(next)
}

router.get('/', login)

module.exports = router