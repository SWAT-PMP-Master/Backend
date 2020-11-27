'use strict'

exports.success = (req, res, message, status) => {
  const statusCode = status || 200
  const statusMessage = message || ''
  req.session.count = req.session.count ? req.session.count + 1 : 1
  res.status(status).send({
    error: false,
    counter: req.session.count,
    status: statusCode,
    body: statusMessage
  })
}

exports.error = (req, res, message, status) => {
  const statusCode = status || 500
  const statusMessage = message || 'Internal server error'
  res.status(statusCode).send({
    error: true,
    status: statusCode,
    body: statusMessage
  })
}
