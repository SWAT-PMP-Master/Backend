const index = require('./pmp-backend/index')
const config = require('./config/config')

index(config(false).trelloId, config(false).trelloSecret)
