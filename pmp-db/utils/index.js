'use strict'

const chalk = require('chalk')

function handleFatalError (err) {
  console.error(`${chalk.bgRed.black('[fatal error]:')} ${err.message}`)
  console.error(`${chalk.bgRed.black('[Error]:')} ${err.stack}`)
  process.exit(1)
}

function totalPage () {
  return 15
}

module.exports = {
  handleFatalError,
  totalPage
}
