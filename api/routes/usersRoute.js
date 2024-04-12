const { Router } = require('express');
const UserController = require('../controllers/userController');

const router = Router();

router
  .post('/users', UserController.createUser)
  .get('/users')
  .get('/users/id/:id')
  .put('/users/id/:id')
  .delete('/users/id/:id');


module.exports = router;