const { Router } = require('express');
const UserController = require('../controllers/userController');
const authenticate = require('../middleware/authenticate');

const router = Router();

router.use(authenticate);

router
  .post('/users', UserController.createUser)
  .get('/users', UserController.findAllUsers)
  .get('/users/id/:id', UserController.findById)
  .put('/users/id/:id', UserController.updateUser)
  .delete('/users/id/:id', UserController.deleteUser);


module.exports = router;