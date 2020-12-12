'use strict'

const postman = require('../api/postman')
const login = require('../api/components/login/network')
const errors = require('../network/errors')
const trello = require('../api/components/trello/network')
const users = require('../api/components/users/network')
const boards = require('../api/components/boards/network')

const routes = (app) => {
  //  const swaggerRoute = () => app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
  const postmanRoute = () => app.use('/api-doc', postman)
  const loginRoute = () => app.use('/auth', login)
  const errorsRoute = () => app.use(errors)
  const trelloRoute = () => app.use('/trello', trello)
  const usersRoute = () => app.use('/', users)
  const boardsRoute = () => app.use('/', boards)

  return {
    postmanRoute,
    loginRoute,
    trelloRoute,
    errorsRoute,
    usersRoute,
    boardsRoute
  }
}

module.exports = routes
