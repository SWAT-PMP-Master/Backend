'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

const config = require('../../../../config/config')
const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const store = require('../../../../pmp-db/index')
const utils = require('../../../../pmp-db/utils/index')

require('../../../utils/auth/strategies/basic')

const postSignIn = async (req, res, next) => {
  const apiKeyToken = req.params
  if (!apiKeyToken) next(boom.unauthorized('apiKeyToken is required'))
  passport.authenticate('basic', (error, user) => {
    try {
      if (error || !user) next(boom.unauthorized())
      req.login(user, { session: false }, async (error) => {
        const { apiKey } = await store(config(false)).catch(utils.handleFatalError)

        if (error) next(error)
        const ApiKey = await apiKey.findByToken(apiKeyToken.apiKeyToken).catch(utils.handleFatalError)
        if (!ApiKey) next(boom.unauthorized())
        const { Nickname } = user
        const uuid = user.uuid
        const email = user.email
        const tokenUser = user.token
        const rol = user.rol

        const payload = {
          uuid,
          Nickname,
          email,
          tokenUser,
          rol,
          scopes: ApiKey.scopes
        }
        const token = jwt.sign(payload, config(false).authJwtSecret, {
          expiresIn: '12h'
        })

        delete user.token
        const data = {
          user: user,
          token: token
        }
        return response.success(req, res, data, 200)
      })
    } catch (err) {
      next(err)
    }
  })(req, res, next)
}

const upsert = (req, res, next) => {
  controller.upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201)
    })
    .catch(next)
}

router.post('/sign-in/:apiKeyToken', postSignIn)
router.post('/', upsert)

module.exports = router
