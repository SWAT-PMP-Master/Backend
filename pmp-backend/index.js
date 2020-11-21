const config = require('../config/config')
const trelloNode = require('trello-node-api')(config(false).trelloId, config(false).trelloSecret)

console.log('working')
console.log(trelloNode)
