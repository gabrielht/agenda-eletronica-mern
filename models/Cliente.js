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
  telefone:{
    type: String,
    required: [true, 'Por favor adicione o telefone']
  },
  createdBy:{
    type: String,
    required: [true, 'Tu nao ta logado irmao ????']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Cliente', ClienteSchema);