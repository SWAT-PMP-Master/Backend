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

  const port = process.env.PORT || 3000

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

  const mainPage = async (req, res, next) => {
    res.send('Working')
  }

  app.get('/', mainPage)

  // ROUTER
  routes(app).loginRoute()
  routes(app).postmanRoute()
  routes(app).errorsRoute()
  routes(app).trelloRoute()
  routes(app).usersRoute()
  routes(app).boardsRoute()
  routes(app).actionsRoute()
  routes(app).checklistRoute()
  routes(app).cardsRoute()
  routes(app).customFieldsRoute()
  routes(app).emojisRoute()
  routes(app).enterpriseRoute()
  routes(app).labelsRoute()
  routes(app).listRoute()
  routes(app).notificationsRoute()
  routes(app).organizationsRoute()
  routes(app).pluginsRoute()
  routes(app).searchingRoute()
  routes(app).statisticsRoute()
  routes(app).webhooksRoute()

  app.listen(port, () => {
    console.log(`Api escuchando en el puerto ${port}`)
  })
}

module.exports = index
