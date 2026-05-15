const express = require('express');
const router = express.Router();
const verificarToken = require('../middlewares/verificarToken');
const comentariosController = require('../controllers/comentarioController');

router.post("/", verificarToken, comentariosController.crearComentario);

router.get(
  "/:id",
  comentariosController.obtenerComentarios
);

module.exports = router;