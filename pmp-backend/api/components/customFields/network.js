'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const getACustomField = async (req, res, next) => {
  try {
    const action = await controller.getACustomField(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getOptionsOfCustomFieldDropDown = async (req, res, next) => {
  try {
    const action = await controller.getOptionsOfCustomFieldDropDown(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getOptionOfCustomFieldDropdown = async (req, res, next) => {
  try {
    const action = await controller.getOptionOfCustomFieldDropdown(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/:id', passport.authenticate('jwt', { session: false }), getACustomField)
router.get('/customfields/:id', passport.authenticate('jwt', { session: false }), getOptionsOfCustomFieldDropDown)
router.get('/dropDown/:id', passport.authenticate('jwt', { session: false }), getOptionOfCustomFieldDropdown)

module.exports = router
