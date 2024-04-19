const { Router } = require('express');
const PermissionController = require('../controllers/permissionController');

const router = Router();

router
  .post('/permission', PermissionController.create)
  .get('/permission', PermissionController.list)
  .get('/permission/:id', PermissionController.getById)
  .put('/permission/:id', PermissionController.update)
  .delete('/permission/:id', PermissionController.delete);

module.exports = router;
