const express =require("express");
const router =express.Router();
const verificarToken = require("../middlewares/verificarToken");
const {valorarFoto} = require( "../controllers/valoracionesController");

router.post( "/", verificarToken, valorarFoto);

module.exports = router;