class Queries {
  constructor (oauth) {
    this.uri = 'https://trello.com'
    this.oauth = oauth
  }

  authorizationFn (url, tokenInfo) {
    const self = this
    const authPromise = new Promise((resolve, reject) => {
      self.oauth.get(
        url,
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
    return authPromise
  }

  async getUsers (tokenkeyPair) {
    const url = `${this.uri}/1/members/${tokenkeyPair.id}`
    const userInfoPromise = await this.authorizationFn(url, tokenkeyPair)
    return userInfoPromise
  }

  async getUserInfo (tokenkeyPair) {
    const url = `${this.uri}/1/members/me`
    const userInfoPromise = await this.authorizationFn(url, tokenkeyPair)
    return userInfoPromise
  }

  async getMemberShipBoards (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/memberships`
    const userBoardsPromise = await this.authorizationFn(url, tokenInfo)
    return userBoardsPromise
  }

  async getBoardAction (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/actions`
    const userBoardsPromise = await this.authorizationFn(url, tokenInfo)
    return userBoardsPromise
  }

  async getBoardfield (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}/${tokenInfo.field}`
    const userBoardsPromise = await this.authorizationFn(url, tokenInfo)
    return userBoardsPromise
  }

  async getBoard (tokenInfo) {
    const url = `${this.uri}/1/boards/${tokenInfo.id}`
    const userBoardsPromise = await this.authorizationFn(url, tokenInfo)
    return userBoardsPromise
  }

  async getUserTrelloBoards (tokenInfo) {
    const url = `${this.uri}/1/members/me/boards`
    const userBoardsPromise = await this.authorizationFn(url, tokenInfo)
    return userBoardsPromise
  }

  async getBoardLists (boardIdAndTokenInfo) {
    const url = `${this.uri}/1/boards/${boardIdAndTokenInfo.boardId}/lists`
    const boardlistsPromise = await this.authorizationFn(url, boardIdAndTokenInfo)
    return boardlistsPromise
  }

  async getCardsOnList (boardListAndTokenInfo) {
    const url = `${this.uri}/1/lists/${boardListAndTokenInfo.listId}/cards`
    const cardsOnListPromise = await this.authorizationFn(url, boardListAndTokenInfo)
    return cardsOnListPromise
  }
}

module.exports.Queries = Queries
