const { Router } = require('express');
const UserController = require('../controllers/userController');

const router = Router();

router
  .post('/users', UserController.createUser)
  .get('/users', UserController.findAllUsers)
  .get('/users/id/:id', UserController.findById)
  .put('/users/id/:id', UserController.updateUser)
  .delete('/users/id/:id', UserController.deleteUser);


module.exports = router;