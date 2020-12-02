'use strict'

const OAuth = require('./oauthExt').OAuth_Ext
const Queries = require('./trelloQueries').Queries

const query = function query (options) {
  return new Queries(new OAuth(options).configOAuth())
  // return new Queries({})
}

module.exports = query

/** EXPECTED USE CASE PARAM
 query({
    appkey: "asdfasdasdsada",
    appSecret: "sdafasddfsadassaasdasdasdasdasdasd",
    callbackUrl: "https://localhost/whatever"
});
 */
