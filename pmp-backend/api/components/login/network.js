'use strict'

const express = require('express')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

const postSignIn = async (req, res, next) => {
  try {
    const user = await controller.login(req.params)
    response.success(req, res, user, 201)
  } catch (err) {
    console.error(err)
  }
}

router.get('/sign-in/:token', postSignIn)

module.exports = router
