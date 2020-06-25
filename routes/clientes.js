const express = require('express');
const router = express.Router();
const { getClientes, addCliente, deleteCliente } = require('../controllers/clientes');
router
  .route('/')
  .get(getClientes)
  .post(addCliente);

router
  .route('/:id')
  .delete(deleteCliente);

module.exports = router;