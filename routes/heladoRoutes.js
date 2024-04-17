var express = require ('express');
var router = express.Router();
const path = require('path');
var heladosController = require('../controllers/heladoControllers')
//creacion
router.get('/crear', heladosController.crear)
router.post('/crear', heladosController.guardar)

router.get("/", heladosController.listado)

// Ruta para la página de inicio
router.get('/', (req, res) => {
    // Sirve el archivo index.html desde la carpeta "public"
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = router;
