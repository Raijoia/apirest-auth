const { Router } = require('express');
const SecurityController = require('../controllers/securityController');

const router = Router();

router
  .post('/security/acl', SecurityController.createAcl)
  .post('/security/permission-roles', SecurityController.createPermissionRoles);

module.exports = router;