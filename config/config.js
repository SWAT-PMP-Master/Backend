'use strict'
require('dotenv').config()
const debug = require('debug')('PMP:db:setup')

module.exports = function config (configExtra) {
  const config = {
    dev: process.env.NODE_ENV !== 'production',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    trelloId: process.env.TRELLO_ID,
    trelloSecret: process.env.TRELLO_SECRET,
    trelloTokenSecret: process.env.TRELLO_TOKEN_SECRET,
    trelloToken: process.env.TRELLO_TOKEN,
    secret: process.env.SECRET,
    adminScopes: process.env.adminScopes,
    apiKeyToken: process.env.API_KEY_TOKEN,
    trelloUrl: process.env.TRELLO_URL,
    sessionSecret: process.env.SESSION_SECRET,
    authJwtSecret: process.env.AUTH_JWT_SECRET,
    apiUrl: process.env.API_URL,
    publicScopes: process.env.publicScopes,
    masterScopes: process.env.masterScopes,
    dialect: 'postgres',
    logging: s => debug(s)
  }

  if (configExtra) {
    Object.assign(config, {
      setup: true
    })
  }

  if (process.env.NODE_ENV === 'production') {
    Object.assign(config, {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    })
  }

  return config
}
