const express = require('express');
const router = express.Router();

const{registrarUsuario, loginUsuario, buscarUsuarios} = require('../controllers/usuariosController');



router.post('/registro', registrarUsuario);
router.post('/login', loginUsuario);
router.get('/buscar', buscarUsuarios);

module.exports = router;