const Comentario = require('../models/Comentario');

// @desc    Get all Cliente
// @route   GET /api/v1/clientes
// @access  Public
exports.getComentarios = async (req, res, next) => {
  try {
    const comentarios = await Comentario.find().populate('createdBy');

    return res.status(200).json({
      success: true,
      count: comentarios.length,
      data: comentarios
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

// @desc    Get all Cliente
// @route   GET /api/v1/clientes
// @access  Public
exports.getComentarioById = async (req, res, next) => {
  try {
    const { createdBy } = req.params
    const comentarios = await Comentario.find({createdBy});

    return res.status(200).json({
      success: true,
      count: comentarios.length,
      data: comentarios
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

// @desc    Add Cliente
// @route   POST /api/v1/clientes
// @access  Public
exports.addComentario = async (req, res, next) => {
  try {
    const { comentario, createdBy } = req.body;

    const _comentario = await Comentario.create(req.body);
  
    return res.status(201).json({
      success: true,
      data: _comentario
    }); 
  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

// @desc    Delete Cliente
// @route   DELETE /api/v1/cliente/:id
// @access  Public
exports.deleteCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findById(req.params.id);

    if(!cliente) {
      return res.status(404).json({
        success: false,
        error: 'No Cliente found'
      });
    }

    await cliente.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}