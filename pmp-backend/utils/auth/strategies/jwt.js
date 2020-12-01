'use strict'

const passport = require('passport')
const { ExtractJwt, Strategy } = require('passport-jwt')
const store = require('../../../../pmp-db/index')
const boom = require('@hapi/boom')

const config = require('../../../../config/config')

passport.use(
  new Strategy({
    secretOrKey: config(false).authJwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  async (tokenPayload, cb) => {
    try {
      const { Users, Platform, Contact } = await store(config(false))
      const user = await Users.findByNickname(tokenPayload.Nickname)
      const platform = await Platform.findById(user.platformId)
      const contact = await Contact.findById(user.contactId)
      const accessRol = await Contact.findById(user.accessRolId)

      if (!user) return cb(boom.unauthorized(), false)

      delete user.passwordId
      delete user.id
      delete user.updatedAt

      delete contact.id
      delete contact.createdAt
      delete contact.updatedAt

      delete platform.id
      delete platform.createdAt
      delete platform.updatedAt

      delete accessRol.id
      delete accessRol.createdAt
      delete accessRol.updatedAt

      user.contactId = contact
      user.platformId = platform
      user.accessRolId = accessRol

      cb(null, { ...user, scopes: tokenPayload.scopes })
    } catch (error) {
      return cb(error)
    }
  }
  )
)
