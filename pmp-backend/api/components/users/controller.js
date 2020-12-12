'use strict'

const fetch = require('node-fetch')
const url = 'https://api.trello.com/1/enterprises/'
const urlKey = 'key=0471642aefef5fa1fa76530ce1ba4c85&token=9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548'
const config = require('../../../../config/config')

module.exports = (store) => {

  const idUserInfo = async (body, params) => {
    try {
      console.log(body)
      const { users, table } = await store(config(false))
      const userId = await users.findByNickname(body.Nickname)
      const tableId = await table.findByUser(userId.id)

      const query = {
        appKey: config(false).trelloId,
        appSecret: config(false).trelloSecret,
        callbackUrl: config(false).apiUrl
      }

      const tokenKeyPair = {
        accessToken: info,
        accessTokenSecrete: config(false).trelloSecret
      }
      const data = JSON.parse(await trelloAuth(query).getUserInfo(tokenKeyPair))

      console.log('------------')
      console.log(tableId)
      const member = await fetch(`${url}${params.idUser}/members/${params.idUserGet}?${urlKey}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })
      console.log(member)
      return 'works'
    } catch (e) {
      throw new Error(e)
    }
  }

  return {
    idUserInfo
  }
}
