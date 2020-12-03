/**
 * Usar el siguiente codigo desde la terminal
 * situado en la carpeta principal
 * para crear juegos en la base de datos
 *
 * DEBUG=app:* node pmp-db/scripts/SeedApiKeys.js
 */

'use strict'

const chalk = require('chalk')
const debug = require('debug')('app:scripts:api-keys')
const utils = require('../utils/index')
const crypto = require('crypto')

const db = require('../index')
const config = require('../../config/config')

const adminScopes = [
  'signin: auth',
  'signup: auth',
  'read: user',
  'create: user',
  'update: user',
  'delete: user']

const masterScopes = [
  'signin: auth',
  'signup: auth',
  'read: user',
  'create: user',
  'update: user',
  'delete: user']

const publicScopes = [
  'signin: auth',
  'signup: auth',
  'read: user',
  'create: user',
  'update: user',
  'delete: user'
]
// config(false).adminScopes
// token: generateRandomToken(),
const apiKeys = [
  {
    token: generateRandomToken(),
    scopes: adminScopes
  },
  {
    token: generateRandomToken(),
    scopes: publicScopes
  },
  {
    token: generateRandomToken(),
    scopes: masterScopes
  }
]

 function generateRandomToken () {
  const buffer = crypto.randomBytes(32)
  return buffer.toString('hex')
}

const seedApiKey = async () => {
  try {
    const { apiKey } = await db(config(false)).catch(utils.handleFatalError)
    let scopesApiKey = null
    for (const element in apiKeys) {
      const scope = apiKeys[element]
      scopesApiKey = await apiKey.createOrUpdate(scope).catch(utils.handleFatalError)
      console.log(scopesApiKey)
    }
  } catch (err) {
    debug(chalk.red.err)
    process.exit(1)
  }
}

seedApiKey()
