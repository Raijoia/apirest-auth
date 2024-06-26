const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const users = require('./usersRoute')
const auth = require('./authRoute')
const role = require('./role')
const permission = require('./permissionRoute')
const security = require('./securityRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    users,
    produto,
    role,
    permission,
    security
  )
}
