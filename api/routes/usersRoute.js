const { Router } = require('express');

const router = Router();

router
  .post('/users')
  .get('/users')
  .get('/users/id/:id')
  .put('/users/id/:id')
  .delete('/users/id/:id');


module.exports = router;