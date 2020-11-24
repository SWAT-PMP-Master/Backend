'use strict'

const Sequelize = require('sequelize')
const setupDataBase = require('../lib/db')

module.exports = function setupUsersModel (config) {
  const sequelize = setupDataBase(config)

  return sequelize.define('users', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Nickname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    rol: {
      type: Sequelize.STRING,
      allowNull: false
    }

  })
}
