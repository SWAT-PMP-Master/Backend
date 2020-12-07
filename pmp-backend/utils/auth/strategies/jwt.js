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
      const { users, table } = await store(config(false))
      const user = await users.findByNickname(tokenPayload.Nickname)
      const token = await table.findByUser(user.id)

      if (!token) return cb(boom.unauthorized(), false)
      const { createdAt, updatedAt, id, password, ...infoUser } = user
      const { trelloIdUser, trelloSecretUser } = token
      const tok = {
        trelloIdUser: trelloIdUser,
        trelloSecretUser: trelloSecretUser
      }
      infoUser.token = tok
      infoUser.data = tokenPayload.boards

      cb(null, { ...infoUser, scopes: tokenPayload.scopes })
    } catch (error) {
      return cb(error)
    }
  }
  )
)
