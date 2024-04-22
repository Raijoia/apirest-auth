const { Router } = require('express');
const SecurityController = require('../controllers/securityController');

const router = Router();

router
  .post('/security/acl', SecurityController.createAcl);

module.exports = router;