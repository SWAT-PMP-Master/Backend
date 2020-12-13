'use strict'

const postman = require('../api/postman')
const login = require('../api/components/login/network')
const errors = require('../network/errors')
const trello = require('../api/components/trello/network')
const users = require('../api/components/users/network')
const boards = require('../api/components/boards/network')
const actions = require('../api/components/actions/network')
const cards = require('../api/components/cards/network')
const checklist = require('../api/components/checklist/network')
const customFields = require('../api/components/customFields/network')
const emojis = require('../api/components/emojis/network')
const enterprise = require('../api/components/enterprise/network')
const labels = require('../api/components/labels/network')
const list = require('../api/components/list/network')
const notifications = require('../api/components/notifications/network')
const organizations = require('../api/components/organizations/network')
const plugins = require('../api/components/plugins/network')
const searching = require('../api/components/searching/network')
const statistics = require('../api/components/statistics/network')
const webhooks = require('../api/components/webhooks/network')

const routes = (app) => {
  //  const swaggerRoute = () => app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
  const postmanRoute = () => app.use('/api-doc', postman)
  const loginRoute = () => app.use('/auth', login)
  const errorsRoute = () => app.use(errors)
  const trelloRoute = () => app.use('/trello', trello)
  const usersRoute = () => app.use('/user', users)
  const boardsRoute = () => app.use('/boards', boards)
  const actionsRoute = () => app.use('/actions', actions)
  const checklistRoute = () => app.use('/checklist', checklist)
  const cardsRoute = () => app.use('/cards', cards)
  const customFieldsRoute = () => app.use('/customFields', customFields)
  const emojisRoute = () => app.use('/emojis', emojis)
  const enterpriseRoute = () => app.use('/enterprise', enterprise)
  const labelsRoute = () => app.use('/labels', labels)
  const listRoute = () => app.use('/list', list)
  const notificationsRoute = () => app.use('/notifications', notifications)
  const organizationsRoute = () => app.use('/organizations', organizations)
  const pluginsRoute = () => app.use('/plugins', plugins)
  const searchingRoute = () => app.use('/searching', searching)
  const statisticsRoute = () => app.use('/statistics', statistics)
  const webhooksRoute = () => app.use('/webhooks', webhooks)

  return {
    postmanRoute,
    loginRoute,
    trelloRoute,
    errorsRoute,
    usersRoute,
    boardsRoute,
    actionsRoute,
    checklistRoute,
    cardsRoute,
    customFieldsRoute,
    emojisRoute,
    enterpriseRoute,
    labelsRoute,
    listRoute,
    notificationsRoute,
    organizationsRoute,
    pluginsRoute,
    searchingRoute,
    statisticsRoute,
    webhooksRoute
  }
}

module.exports = routes
