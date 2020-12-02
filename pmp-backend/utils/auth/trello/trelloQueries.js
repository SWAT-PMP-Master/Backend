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
          } else {
            reject(error)
          }
        }
      )
    })
    return userInfoPromise
  };

  getUserTrelloBoards (tokenInfo) {
    const self = this
    console.log(tokenInfo)
    const userBoardsPromise = new Promise(function (resolve, reject) {
      self.oauth.get(
        `${self.uri}/1/members/me/boards`,
        tokenInfo.accToken,
        tokenInfo.accTokenSecrete,
        function (err, data, response) {
          if (!err) {
            resolve(data)
          } else {
            reject(err)
          }
        }
      )
    })

    return userBoardsPromise
  };

  getBoardLists (boardIdAndTokenInfo) {
    const self = this
    const boardlistsPromise = new Promise(function (resolve, reject) {
      self.oauth.get(
        `${self.uri}/1/boards/${boardIdAndTokenInfo.boardId}/lists`,
        boardIdAndTokenInfo.accToken,
        boardIdAndTokenInfo.accTokenSecrete,
        function (err, data, response) {
          console.log(data)
          if (!err) {
            resolve(data)
          } else {
            reject(err)
          }
        }
      )
    })

    return boardlistsPromise
  };

  getCardsOnList (boardListAndTokenInfo) {
    const self = this
    const cardsOnListPromise = new Promise(function (resolve, reject) {
      self.oauth.get(
        `${self.uri}/1/lists/${boardListAndTokenInfo.listId}/cards`,
        boardListAndTokenInfo.accToken,
        boardListAndTokenInfo.accTokenSecrete,
        function (err, data, response) {
          if (!err) {
            resolve(data)
          } else {
            reject(err)
          }
        }
      )
    })
    return cardsOnListPromise
  };
}

module.exports.Queries = Queries
