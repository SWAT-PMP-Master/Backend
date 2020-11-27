'use strict'

const index = () => {
  const express = require('express')
  const bodyParser = require('body-parser')
  const cors = require('cors')
  const config = require('../config/config')
  const routes = require('./routes/routes')
  const app = express()
  const helmet = require('helmet')

  const session = require('express-session')
  const cookieParser = require('cookie-parser')

  app.use(cors())
  app.use(bodyParser.json())
  app.use(helmet())
  app.use(cookieParser())
  app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: config(false).secret
    })
  )

  // ROUTER
  routes(app).loginRoute()
  routes(app).postmanRoute()
  routes(app).errorsRoute()

  app.listen(config(false).port, () => {
    console.log(`Api escuchando en el puerto ${config(false).port}`)
  })
}

module.exports = index
