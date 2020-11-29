'../../config/configuse strict'

const setupDatabase = require('./lib/db')

const setupUsersModel = require('./models/user')
const setupTableModel = require('./models/table')
const setupApiKeyModel = require('./models/apikey')

const defaults = require('defaults')

const setupUsers = require('./lib/users')
const setupTable = require('./lib/table')
const setupApiKey = require('./lib/apikey')

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

  const usersModel = setupUsersModel(config)
  const tableModel = setupTableModel(config)
  const apiKeyModel = setupApiKeyModel(config)

  tableModel.belongsTo(usersModel)

  await sequelize.authenticate()

  await sequelize.sync()
  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const users = setupUsers(usersModel)
  const table = setupTable(tableModel)
  const apiKey = setupApiKey(apiKeyModel)

  return {
    users,
    table,
    apiKey
  }
}
