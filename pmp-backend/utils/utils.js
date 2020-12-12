'use strict'

const config = require('../../config/config')

module.exports = () => {

  const queryFn = () => {
    const query = {
      appKey: config(false).trelloId,
      appSecret: config(false).trelloSecret,
      callbackUrl: config(false).apiUrl
    }
    return query 
  }
  
  const tokenKeyPairFn = (info) => {
    const tokenKeyPair = {
      accToken: info,
      accTokenSecrete: config(false).trelloSecret
    }
    return tokenKeyPair
  }
  
  const tokenKeyPairCardFn = (info, id) => {
    const tokenKeyCard = {
      accToken: info,
      accTokenSecrete: config(false).trelloSecret,
      listId: id
    }
    return tokenKeyCard
  }

  return {
    queryFn,
    tokenKeyPairFn,
    tokenKeyPairCardFn
  }
}
