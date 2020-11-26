'use strict'

const { nanoid } = require('nanoid')
// const bcrypt = require('bcrypt')
const config = require('../../../../config/config')

module.exports = (store) => {
  const upsert = async (data) => {
    try {
      const { users, table } = await store(config(false))
      console.log(nanoid())
      console.log(users)
      console.log(table)
      return data
    } catch (error) {
      throw new Error('something was wrong')
    }
  }

  return {
    upsert
  }
}
