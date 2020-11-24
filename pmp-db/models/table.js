'use strict'

const Sequelize = require('sequelize')
const setupDataBase = require('../lib/db')

module.exports = function setupTableModel (config) {
  const sequelize = setupDataBase(config)

  return sequelize.define('table', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    trelloIdUser: {
      type: Sequelize.STRING,
      allowNull: false
    },
    trelloSecretUser: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
