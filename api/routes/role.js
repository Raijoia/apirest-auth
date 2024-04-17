const { Router } = require('express');
const RoleController = require('../controllers/roleController');

const router = Router();

router
  .post('/role', RoleController.createRole)
  .get('/role', RoleController.getRoles)
  .get('/role/:id', RoleController.getRole)
  .put('/role/:id', RoleController.updateRole)
  .delete('/role/:id', RoleController.deleteRole);

module.exports = router;