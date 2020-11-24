const trelloCheck = async (trelloId, trelloSecret) => {
  // const config = require('../config/config')
  const trelloNode = require('trello-node-api')(trelloId, trelloSecret)

  let response
  try {
    response = await trelloNode.board.search('5fb6924ce122620591ab0071')
    console.log(response)
  } catch (error) {
    if (error) {
      console.log('error ', error)
    }
  }
}

// trelloCheck()

module.exports = trelloCheck
