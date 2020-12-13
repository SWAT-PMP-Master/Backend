'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const getAnOrganization = async (req, res, next) => {
  try {
    const action = await controller.getAnOrganization(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getFieldOnOrganization = async (req, res, next) => {
  try {
    const action = await controller.getFieldOnOrganization(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getActionsForOrganization = async (req, res, next) => {
  try {
    const action = await controller.getActionsForOrganization(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getBoardsInAnOrganization = async (req, res, next) => {
  try {
    const action = await controller.getBoardsInAnOrganization(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const retrieveOrganizationsExports = async (req, res, next) => {
  try {
    const action = await controller.retrieveOrganizationsExports(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTheMembersOfAnOrganization = async (req, res, next) => {
  try {
    const action = await controller.getTheMembersOfAnOrganization(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getMembershipsOfAnOrganization = async (req, res, next) => {
  try {
    const action = await controller.getMembershipsOfAnOrganization(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getAMembershipOfAnOrganization = async (req, res, next) => {
  try {
    const action = await controller.getAMembershipOfAnOrganization(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getThePluginDataScoped = async (req, res, next) => {
  try {
    const action = await controller.getThePluginDataScoped(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getTagsOfAnOrganization = async (req, res, next) => {
  try {
    const action = await controller.getTagsOfAnOrganization(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getOrganizationsNewBillableGuests = async (req, res, next) => {
  try {
    const action = await controller.getOrganizationsNewBillableGuests(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/:id', passport.authenticate('jwt', { session: false }), getAnOrganization)
router.get('/field/:id&:field', passport.authenticate('jwt', { session: false }), getFieldOnOrganization)
router.get('/actions/:id', passport.authenticate('jwt', { session: false }), getActionsForOrganization)
router.get('/boards/:id', passport.authenticate('jwt', { session: false }), getBoardsInAnOrganization)
router.get('/retrieve/:id', passport.authenticate('jwt', { session: false }), retrieveOrganizationsExports)
router.get('/members/:id', passport.authenticate('jwt', { session: false }), getTheMembersOfAnOrganization)
router.get('/memberShips/:id', passport.authenticate('jwt', { session: false }), getMembershipsOfAnOrganization)
router.get('/organizations/:id', passport.authenticate('jwt', { session: false }), getAMembershipOfAnOrganization)
router.get('/plugins/:id', passport.authenticate('jwt', { session: false }), getThePluginDataScoped)
router.get('/tags/:id', passport.authenticate('jwt', { session: false }), getTagsOfAnOrganization)
router.get('/billables/:id', passport.authenticate('jwt', { session: false }), getOrganizationsNewBillableGuests)

module.exports = router
