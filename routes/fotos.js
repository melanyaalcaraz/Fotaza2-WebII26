const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const verificarToken = require('../middlewares/verificarToken');
const fotosController = require('../controllers/fotosController');
const { obtenerFeedSeguidos } = require('../controllers/fotosController');
const { obtenerMisFotos } = require('../controllers/fotosController');
const { buscarFotos } = require('../controllers/fotosController');

router.post('/', verificarToken, upload.single('imagen'), fotosController.subirFoto);

router.get('/', verificarToken, fotosController.obtenerFotosUsuario);

router.get("/mias",verificarToken,obtenerMisFotos);
router.get( "/feed",verificarToken,obtenerFeedSeguidos);
router.get("/buscar",verificarToken,buscarFotos);



module.exports = router;