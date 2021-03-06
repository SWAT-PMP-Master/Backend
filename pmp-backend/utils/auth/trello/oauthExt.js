const { OAuth } = require('oauth')

class oAuthExt {
  constructor (options) {
    this.appkey = options.appKey
    this.appSecret = options.appSecret
    this.callbackUrl = options.callbackUrl

    this.trelloAuthUrls = {
      requestURL: 'https://trello.com/1/OAuthGetRequestToken',
      accessURL: 'https://trello.com/1/OAuthGetAccessToken',
      authorizeURL: 'https://trello.com/1/OAuthAuthorizeToken'
    }
  }

  configOAuth () {
    return new OAuth(
      this.trelloAuthUrls.requestURL,
      this.trelloAuthUrls.accessURL,
      this.appkey,
      this.appSecret,
      '1.0',
      this.callbackUrl, 'HMAC-SHA1')
  }
}

module.exports.OAuth_Ext = oAuthExt
