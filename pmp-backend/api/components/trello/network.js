'use strict'

const express = require('express')
const passport = require('passport')

const router = express.Router()

const boom = require('@hapi/boom')

require('../../../utils/auth/oauth/oauth')

const trelloOAuth = async (req, res, next) => {
  console.log(req)
  if (!req.user) next(boom.unauthorized())

  const token = req.user.body.token
  const username = req.user.body.Nickname
  const email = req.user.body.contactId.email
  const id = req.user.body.id

  res.cookie('token', token)
  res.cookie('email', email)
  res.cookie('user', username)
  res.cookie('id', id)
  res.status(200).send({
    error: false,
    status: 200,
    body: {
      user: username,
      id: id,
      token: token,
      email: email,
      valid: true
    }
  })
}

router.get('/trello-oauth', passport.authenticate('trello-oauth', { scope: ['email', 'profile', 'openid'] }))
router.get('/trello-oaut/callback', passport.authenticate('trello-oauth', { session: false }), trelloOAuth)

module.exports = router

