// const bcrypt = require('bcrypt')
// const config = require('../../../../config/config')
const passport = require('passport')
const { BasicStrategy } = require('passport-http')
// const boom = require('@hapi/boom')
// const store = require('../../../../pmp-db/index')

passport.use(new BasicStrategy(async (username, password, cb) => {
  try {
    return cb(null, 'hola')
  } catch (err) {
    return cb(err)
  }
}))
