const bcrypt = require('bcrypt')
const utils = require('../../../../pmp-db/utils/index')
const config = require('../../../../config/config')
const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const boom = require('@hapi/boom')
const store = require('../../../../pmp-db/index')

passport.use(new BasicStrategy(async (username, password, cb) => {
  const { table, users } = await store(config(false)).catch(utils.handleFatalError)
  const usersExists = await users.findByNickname(username).catch(utils.handleFatalError)
  const tableExist = await table.findByUser(usersExists.id).catch(utils.handleFatalError)

  try {
    if (!usersExists) {
      return cb(boom.unauthorized(), false)
    }

    if (!await bcrypt.compare(password, usersExists.password)) {
      return cb(boom.unauthorized(), false)
    }
    delete usersExists.createdAt
    delete usersExists.updatedAt
    delete usersExists.id
    delete usersExists.password
    usersExists.token = tableExist.trelloSecretUser

    return cb(null, usersExists)
  } catch (err) {
    return cb(err)
  }
}))
