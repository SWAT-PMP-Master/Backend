class Queries {
  constructor (oauth) {
    this.uri = 'https://trello.com'
    this.oauth = oauth
  }

  async getUsers (tokenkeyPair) {
    const self = this
    const userInfoPromise = new Promise((resolve, reject) => {
      self.oauth.get(
        `${self.uri}/1/members/${tokenkeyPair.id}`,
        tokenkeyPair.accToken,
        tokenkeyPair.accTokenSecrete,
        (error, data, response) => {
          if (!error) {
            resolve(data)
          } else {
            reject(error)
          }
        }
      )
    })
    return userInfoPromise
  }

  async getUserInfo (tokenkeyPair) {
    const self = this
    const userInfoPromise = new Promise((resolve, reject) => {
      self.oauth.get(
        `${self.uri}/1/members/me`,
        tokenkeyPair.accToken,
        tokenkeyPair.accTokenSecrete,
        (error, data, response) => {
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
    const userBoardsPromise = new Promise((resolve, reject) => {
      self.oauth.get(
        `${self.uri}/1/members/me/boards`,
        tokenInfo.accToken,
        tokenInfo.accTokenSecrete,
        (err, data, response) => {
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
    const boardlistsPromise = new Promise((resolve, reject) => {
      self.oauth.get(
        `${self.uri}/1/boards/${boardIdAndTokenInfo.boardId}/lists`,
        boardIdAndTokenInfo.accToken,
        boardIdAndTokenInfo.accTokenSecrete,
        (err, data, response) => {
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
    const cardsOnListPromise = new Promise((resolve, reject) => {
      self.oauth.get(
        `${self.uri}/1/lists/${boardListAndTokenInfo.listId}/cards`,
        boardListAndTokenInfo.accToken,
        boardListAndTokenInfo.accTokenSecrete,
        (err, data, response) => {
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
