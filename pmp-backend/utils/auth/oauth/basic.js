const passport = require('passport')
const { BasicStrategy } = require('passport-http')

const boom = require('@hapi/boom')
const axios = require('axios')
const config = require('../../../../config/config')

passport.use(
  new BasicStrategy(async (user, password, cb) => {
    try {
      const { data, status } = await axios({
        url: `${config.apiUrl}/auth/sign-in`,
        method: 'post',
        auth: {
          password,
          nickname: user,
          email: `${user}@trello.com`,
          trelloIdUser: '12431234',
          token: 'asdfklasjqw1234'
        },
        data: {
          apiKeyToken: config.apiKeyToken
        }
      })
      if (!data || status !== 200) return cb(boom.unauthorized(), false)

      return cb(null, data)
    } catch (error) {
      cb(error)
    }
  })
)
