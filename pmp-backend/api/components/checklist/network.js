'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const getAChecklist = async (req, res, next) => {
  try {
    const action = await controller.getAChecklist(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getFieldOnAChecklist = async (req, res, next) => {
  try {
    const action = await controller.getFieldOnAChecklist(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheBoardTheChecklistIsOn = async (req, res, next) => {
  try {
    const action = await controller.getTheBoardTheChecklistIsOn(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheCardAChecklistIsOn = async (req, res, next) => {
  try {
    const action = await controller.getTheCardAChecklistIsOn(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getCheckitemsOnAChecklist = async (req, res, next) => {
  try {
    const action = await controller.getCheckitemsOnAChecklist(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getACheckitemOnAChecklist = async (req, res, next) => {
  try {
    const action = await controller.getACheckitemOnAChecklist(req.user, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/:id', passport.authenticate('jwt', { session: false }), getAChecklist)
router.get('/checklist/:id&:field', passport.authenticate('jwt', { session: false }), getFieldOnAChecklist)
router.get('/boardChecklist/:id', passport.authenticate('jwt', { session: false }), getTheBoardTheChecklistIsOn)
router.get('/cardChecklist/:id', passport.authenticate('jwt', { session: false }), getTheCardAChecklistIsOn)
router.get('/itemsChecklist/:id', passport.authenticate('jwt', { session: false }), getCheckitemsOnAChecklist)
router.get('/checkitems/:id', passport.authenticate('jwt', { session: false }), getACheckitemOnAChecklist)

module.exports = router
