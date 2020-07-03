const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({
  cliente_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: [true, 'Por favor adicione o ID do cliente']
  },
  comentario: {
    type: String,
    trim: true,
    required: [true, 'Por favor adicione o comentario']
  }, 
  tipo_comentario: {
    type: Number,
    required: [true, 'Por favor adicione o ID do TIPO do comentario']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Comentario', ComentarioSchema);