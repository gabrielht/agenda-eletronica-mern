const Comentario = require("../models/Comentario");

// @desc    Get all Comentarios
// @route   GET /api/v1/comentarios
// @access  Public
exports.getComentarios = async (req, res, next) => {
  try {
    const comentarios = await Comentario.find().populate("cliente_id");

    return res.status(200).json({
      success: true,
      count: comentarios.length,
      data: comentarios,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Get one Comentario
// @route   GET /api/v1/comentarios/:id
// @access  Public
exports.getComentarioById = async (req, res, next) => {
  try {
    const { cliente_id } = req.params;
    const comentarios = await Comentario.find({ cliente_id });

    return res.status(200).json({
      success: true,
      count: comentarios.length,
      data: comentarios,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add Comentario
// @route   POST /api/v1/comentarios
// @access  Public
exports.addComentario = async (req, res, next) => {
  try {
    const { cliente_id, comentario } = req.body;

    const _comentario = await Comentario.create(req.body);

    return res.status(201).json({
      success: true,
      data: _comentario,
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

// TODO: arummar esse metodo pra ser um deleteComentario
// @desc    Delete Cliente
// @route   DELETE /api/v1/cliente/:id
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
