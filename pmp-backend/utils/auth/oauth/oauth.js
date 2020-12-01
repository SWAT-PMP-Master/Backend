const passport = require('passport')
const axios = require('axios')
const { OAuth2Strategy } = require('passport-oauth')
const boom = require('@hapi/boom')

const config = require('../../../../config/config')

const TRELLO_AUTHORIZATION_URL = 'https://trello.com/1/OAuthGetRequestToken'
const TRELLO_TOKEN_URL = 'https://trello.com/1/OAuthGetAccessToken'
const TRELLO_URSERINFO_URL = 'https://trello.com/1/members/me'
const TRELLO_AUTHORIZE_URL = 'https://trello.com/1/OAuthAuthorizeToken?scope=read,write'

const oAuth2Strategy = new OAuth2Strategy({
  authorizationURL: TRELLO_AUTHORIZATION_URL,
  tokenURL: TRELLO_TOKEN_URL,
  authorizeURL: TRELLO_AUTHORIZE_URL,
  clientID: config(false).trelloId,
  clientSecret: config(false).trelloSecret,
  callbackURL: '/trello-oaut/callback'
}, async (accesToken, refreshToken, profile, cb) => {
  const { data, status } = await axios({
    url: `${config(false).apiUrl}/`,
    method: 'post',
    data: {
      nickname: profile.name,
      email: profile.email,
      password: profile.id,
      apiKeyToken: accesToken
    }
  })

  if (!data || status !== 201) return cb(boom.unauthorized(), false)

  return cb(null, data)
})

oAuth2Strategy.userProfile = (accesToken, done) => {
  this._oauth2.get(TRELLO_URSERINFO_URL, accesToken, (err, body) => {
    if (err) return done(err)

    try {
      const { sub, name, email } = JSON.parse(body)
      console.log(email)
      const profile = {
        id: sub,
        name
      }

      done(null, profile)
    } catch (error) {
      return done(error)
    }
  })
}

passport.use('trello-oauth', oAuth2Strategy)
