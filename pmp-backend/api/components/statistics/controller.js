'use strict'

// const trelloAuth = require('../../../utils/auth/trello/index')
// const utils = require('../../../utils/utils')
const boards = require('../trello/index')

module.exports = (store) => {
  // const query = utils().queryFn()

  const getBoardsPercen = async (body, params) => {
    body.data = [params.idBoard]
    const elements = []
    const data = await boards.boardsList(body)
    elements.Boards = data[0].length
    const cards = data[0]
    let listTotal = 0
    cards.forEach(el => {
      listTotal += el.list.length
    })
    listTotal -= elements.Boards
    elements.TotalCards = listTotal
    let names = []
    cards.forEach(el => {
      let checkList = []
      el.list.forEach(ele => {
        checkList = checkList.concat(ele.idChecklists)
      })

      const totalCardsList = el.list.length - 1
      const tempNames = {
        name: el.name,
        cards: totalCardsList,
        lists: el.list,
        checkList: checkList
      }
      names = names.concat(tempNames)
    })
    elements.BoardsNames = names
    let single = []
    elements.BoardsNames.forEach(el => {
      /*const valor = {
        name: 'Name',
        value: 0
      }*/
      if (el.name === 'Done') {
        const totalProject = el.cards / elements.TotalCards
        /*valor.name = el.name
        valor.value = totalProject.tofixed(2)*/
        elements.TotalProject = `${totalProject.toFixed(2) * 100}%`
      } else if (el.name === 'Backlog') {
        const backlogProject = el.cards / elements.TotalCards
        /*valor.name = el.name
        valor.value = totalProject.tofixed(2)*/
        elements.BacklogProject = `${backlogProject.toFixed(2) * 100}%`
      } else if (el.name === 'To Do') {
        const toDoProject = el.cards / elements.TotalCards
        /*valor.name = el.name
        valor.value = totalProject.tofixed(2)*/
        elements.ToDoProject = `${toDoProject.toFixed(2) * 100}%`
      } else if (el.name === 'Doing') {
        const doingProject = el.cards / elements.TotalCards
        /*valor.name = el.name
        valor.value = totalProject.tofixed(2)*/
        elements.TotalDoing = `${doingProject.toFixed(2) * 100}%`
      }
      single = single.concat(valor)
    })

    return elements
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
