const { Router } = require('express');
const RoleController = require('../controllers/roleController');

const router = Router();

router
  .post('/role', RoleController.createRole)
  .get('/role')
  .get('/role/:id')
  .put('/role/:id')
  .delete('/role/:id');

module.exports = router;