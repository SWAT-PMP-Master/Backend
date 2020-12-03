'use strict'

const postman = require('../api/postman')
const login = require('../api/components/login/network')
const errors = require('../network/errors')

const routes = (app) => {
  //  const swaggerRoute = () => app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
  const postmanRoute = () => app.use('/api-doc', postman)
  const loginRoute = () => app.use('/auth', login)
  const errorsRoute = () => app.use(errors)

  return {
    postmanRoute,
    loginRoute,
    errorsRoute
  }
}

module.exports = routes
