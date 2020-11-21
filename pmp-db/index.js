'use strict'

const setupDatabase = require('./lib/db')

const setupApiKeyModel = require('./models/apiKey')

const defaults = require('defaults')

const setupApiKey = require('./lib/apiKey')

module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'postgres',
    pools: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })
  const sequelize = setupDatabase(config)

  const apiKeyModel = setupApiKeyModel(config)

  await sequelize.authenticate()

  await sequelize.sync()
  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const ApiKey = setupApiKey(apiKeyModel)

  return {
    ApiKey
  }
}
