const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const verificarToken = require('../middlewares/verificarToken');
const fotosController = require('../controllers/fotosController');

router.post('/', verificarToken, upload.single('imagen'), fotosController.subirFoto);

// router.get('/', verificarToken, fotosController.obtenerFotosUsuario);


// router.get('/compartidas', verificarToken, fotosController.obtenerFotosCompartidas);


module.exports = router;