'use strict'

const express = require('express')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

const postSignIn = async (req, res, next) => {
  controller.login(req.params) 
    .then((user) => {
      response.success(req, res, user, 201)
    })
    .catch(next)
}

router.get('/sign-in/:token', postSignIn)

module.exports = router
