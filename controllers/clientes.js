const Cliente = require('../models/Cliente');

// @desc    Get all Cliente
// @route   GET /api/v1/cliente
// @access  Public
exports.getClientes = async (req, res, next) => {
  try {
    const clientes = await Cliente.find();

    return res.status(200).json({
      success: true,
      count: clientes.length,
      data: clientes
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

// @desc    Add Cliente
// @route   POST /api/v1/cliente
// @access  Public
exports.addCliente = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const cliente = await Cliente.create(req.body);
  
    return res.status(201).json({
      success: true,
      data: cliente
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