const Cliente = require("../models/Cliente");

// @desc    Get all Clientes
// @route   GET /api/v1/clientes
// @access  Public
exports.getClientes = async (req, res, next) => {
  try {
    const clientes = await Cliente.find();

    return res.status(200).json({
      success: true,
      count: clientes.length,
      data: clientes,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.getClienteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const clientes = await Cliente.find({ createdBy: id });

    return res.status(200).json({
      success: true,
      count: clientes.length,
      data: clientes,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add Cliente
// @route   POST /api/v1/clientes
// @access  Public
exports.addCliente = async (req, res, next) => {
  try {
    const { nome, email, telefone, createdBy } = req.body;

    const cliente = await Cliente.create(req.body);

    return res.status(201).json({
      success: true,
      data: cliente,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc    Delete Cliente
// @route   DELETE /api/v1/clientes/:id
// @access  Public
exports.deleteCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findById(req.params.id);

    if (!cliente) {
      return res.status(404).json({
        success: false,
        error: "No Cliente found",
      });
    }

    await cliente.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
