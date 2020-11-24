'use strict'

const setupDatabase = require('./lib/db')

const setupUsersModel = require('./models/user')
const setupTableModel = require('./models/table')

const defaults = require('defaults')

const setupUsers = require('./lib/users')
const setupTable = require('./lib/table')

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

  tableModel.belongsTo(usersModel)

  await sequelize.authenticate()

  await sequelize.sync()
  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const users = setupUsers(usersModel)
  const table = setupTable(tableModel)

  return {
    users,
    table
  }
}
