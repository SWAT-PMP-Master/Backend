'use strict'

const express = require('express')
const passport = require('passport')
const response = require('../../../network/response')

const controller = require('./index')
const router = express.Router()

require('../../../utils/auth/strategies/jwt')

const getAnEnterprise = async (req, res, next) => {
  try {
    const action = await controller.getAnEnterprise(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getAuditlogDataForAnEnterprise = async (req, res, next) => {
  try {
    const action = await controller.getAuditlogDataForAnEnterprise(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getEnterpriseAdminMembers = async (req, res, next) => {
  try {
    const action = await controller.getEnterpriseAdminMembers(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getSignupForEnterprise = async (req, res, next) => {
  try {
    const action = await controller.getSignupForEnterprise(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getMembersOfEnterprise = async (req, res, next) => {
  try {
    const action = await controller.getMembersOfEnterprise(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getAMemberOfEntreprise = async (req, res, next) => {
  try {
    const action = await controller.getAMemberOfEntreprise(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

const getWhetherAnOrganizationCanBe = async (req, res, next) => {
  try {
    const action = await controller.getWhetherAnOrganizationCanBe(req.userm, req.params)
    response.success(req, res, action, 200)
  } catch (err) {
    response.error(req, res, err.data, err.statusCode)
  }
}

// passport.authenticate('jwt', { session: false }),
router.get('/:id', passport.authenticate('jwt', { session: false }), getAnEnterprise)
router.get('/data/:id', passport.authenticate('jwt', { session: false }), getAuditlogDataForAnEnterprise)
router.get('/adminMembers/:id', passport.authenticate('jwt', { session: false }), getEnterpriseAdminMembers)
router.get('/signup/:id', passport.authenticate('jwt', { session: false }), getSignupForEnterprise)
router.get('/members/:id', passport.authenticate('jwt', { session: false }), getMembersOfEnterprise)
router.get('/member/:id&idMember', passport.authenticate('jwt', { session: false }), getAMemberOfEntreprise)
router.get('/organizations/:id&:idOrganization', passport.authenticate('jwt', { session: false }), getWhetherAnOrganizationCanBe)

module.exports = router
