'use strict'
const config = require('../../config/config')

exports.success = (req, res, message, status) => {
  const statusCode = status || 200
  const statusMessage = message || ''
  req.session.count = req.session.count ? req.session.count + 1 : 1
  res.cookie('token', message.token, {
    httpOnly: !config(false).dev,
    secure: !config(false).dev
  })
  res.status(status).send({
    error: false,
    counter: req.session.count,
    status: statusCode,
    body: statusMessage
  })
}

exports.error = (req, res, message, status) => {
  const statusCode = status || 500
  console.log(message)
  const statusMessage = message || 'Internal server error'
  res.status(statusCode).send({
    error: true,
    status: statusCode,
    body: statusMessage
  })
}
