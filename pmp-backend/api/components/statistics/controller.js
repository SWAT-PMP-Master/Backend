'use strict'

const trelloAuth = require('../../../utils/auth/trello/index')
const utils = require('../../../utils/utils')
const boards = require('../trello/index')

module.exports = (store) => {
  const query = utils().queryFn()

  const getBoardsPercen = async (body) => {
    const data = boards.boardsList(body)
    console.log(data)
    console.log(trelloAuth)
    console.log(query)
  }

  const getMainCardPercen = async (body) => {

  }

  const getCardsInCardsPercen = async (body) => {

  }

  const getCheckListPercen = async (body) => {

  }

  const getTotalCheckList = async (body) => {

  }

  return {
    getBoardsPercen,
    getMainCardPercen,
    getCardsInCardsPercen,
    getCheckListPercen,
    getTotalCheckList
  }
}
