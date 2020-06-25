const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({
  comentario: {
    type: String,
    trim: true,
    required: [true, 'Por favor adicione o comentario']
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Comentario', ComentarioSchema);