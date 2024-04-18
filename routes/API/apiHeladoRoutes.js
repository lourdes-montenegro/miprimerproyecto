const express = require('express');
const heladosController = require('../../controllers/API/apiHeladoControllers');

const router = express.Router();

router.get('/crear-helado', heladosController.crear);
router.post('/guardar-helado', heladosController.guardar);
router.get('/listado-helados', heladosController.listado);
router.get('/detalle-helado/:id', heladosController.detalle);
router.post('/guardarProducto' , heladosController.guardar)

module.exports = router;
