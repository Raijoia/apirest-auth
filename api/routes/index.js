const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const users = require('./usersRoute')
const auth = require('./authRoute')
const role = require('./role')

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    users,
    produto,
    role
  )
}
