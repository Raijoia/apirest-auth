const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const users = require('./usersRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    produto,
    users
  )
}
