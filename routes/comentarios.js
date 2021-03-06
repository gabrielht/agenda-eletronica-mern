const express = require('express');
const router = express.Router();
const { getComentarios, getComentarioById, addComentario, deleteCliente } = require('../controllers/comentarios')
router
  .route('/')
  .get(getComentarios)
  .post(addComentario);

router
  .route('/:cliente_id')
  .get(getComentarioById)
  .delete(deleteCliente);

module.exports = router;