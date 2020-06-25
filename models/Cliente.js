const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    trim: true,
    required: [true, 'Por favor adicione o nome']
  },
  email: {
    type: String,
    required: [true, 'Por favor adicione o email']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Cliente', ClienteSchema);