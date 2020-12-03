'use strict'

const express = require('express')
const router = express.Router()

const get = (req, res, next) => {
  res.redirect('https://documenter.getpostman.com/view/10727485/TVmP9cAa')
}

// Routes
router.get('/', get)

module.exports = router
