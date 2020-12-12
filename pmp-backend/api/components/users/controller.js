'use strict'

const fetch = require('node-fetch')
const url = 'https://api.trello.com/1/enterprises/'
const urlKey = 'key=0471642aefef5fa1fa76530ce1ba4c85&token=9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548'

module.exports = (store) => {
  
  const idUserInfo = async (idUser, idUserGet) => {
    try {
      const member = await fetch(`${url}${idUser}/members/${idUserGet}?${urlKey}`, {
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
