const express = require("express");
const router = express.Router();
const seguidoresController = require("../controllers/seguidoresController");
const verificarToken = require("../middlewares/verificarToken");

router.post("/", verificarToken, seguidoresController.seguir);

router.get("/",verificarToken, seguidoresController.obtenerSeguidos);

module.exports = router;