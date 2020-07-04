const express = require('express');
const router = express.Router();
const { getClientes, getClienteById ,addCliente, deleteCliente } = require('../controllers/clientes');
router
  .route('/')
  .get(getClientes)
  .post(addCliente);

router
  .route('/:id')
  .get(getClienteById)
  .delete(deleteCliente);

module.exports = router;