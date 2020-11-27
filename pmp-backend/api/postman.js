'use strict'

const express = require('express')
const router = express.Router()

const get = (req, res, next) => {
  res.redirect('https://www.cargdev.com/')
}

// Routes
router.get('/', get)

module.exports = router
