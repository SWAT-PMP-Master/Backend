class Queries {
  constructor (oauth) {
    this.uri = 'https://api.trello.com'
    this.oauth = oauth
  }

  getUserInfo (tokenkeyPair) {
    const self = this
    const userInfoPromise = new Promise(function (resolve, reject) {
      self.oauth.get(
        `${self.uri}/1/members/me`,
        tokenkeyPair.accessToken,
        tokenkeyPair.accessTokenSecrete,
        function (error, data, response) {
          if (!error) {
            resolve(data)
          } /* else {
            reject({ error: err })
          } */
        }
      )
      reject(new Error('error'))
    })
    return userInfoPromise
  };

  getUserTrelloBoards (tokenInfo) {
    const self = this
    const userBoardsPromise = new Promise(function (resolve, reject) {
      self.oauth.get(
        `${self.uri}/1/members/me/boards`,
        tokenInfo.accToken,
        tokenInfo.accTokenSecrete,
        function (err, data, response) {
          if (!err) {
            resolve(data)
          } /* else {
            reject({ error: err })
          } */
        }
      )
      reject(new Error('error'))
    })

    return userBoardsPromise
  };

  getBoardLists (boardIdAndTokenInfo) {
    const self = this
    const boardlistsPromise = new Promise(function (resolve, reject) {
      self.oauth.get(
        `${self.uri}/1/boards/${boardIdAndTokenInfo.boardId}/lists`,
        boardIdAndTokenInfo.tokenInfo.accToken,
        boardIdAndTokenInfo.tokenInfo.accTokenSecrete,
        function (err, data, response) {
          if (!err) {
            resolve(data)
          } /* else {
            reject({ error: err })
          } */
        }
      )
      reject(new Error('error'))
    })

    return boardlistsPromise
  };

  getCardsOnList (boardListAndTokenInfo) {
    const self = this
    const cardsOnListPromise = new Promise(function (resolve, reject) {
      self.oauth.get(
        `${self.uri}/1/lists/${boardListAndTokenInfo.listId}/cards`,
        boardListAndTokenInfo.tokenInfo.accToken,
        boardListAndTokenInfo.tokenInfo.accTokenSecrete,
        function (err, data, response) {
          if (!err) {
            resolve(data)
          } /* else {
            reject({ error: err })
          } */
        }
      )
      reject(new Error('error'))
    })
    return cardsOnListPromise
  };
}

module.exports.Queries = Queries
