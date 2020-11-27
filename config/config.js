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
    port: process.env.PORT || 3000,
    trelloId: process.env.TRELLO_ID,
    trelloSecret: process.env.TRELLO_SECRET,
    secret: process.env.SECRET,
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
