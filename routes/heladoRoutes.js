const express = require('express');
const heladosController = require('../controllers/heladoControllers');

const router = express.Router();

router.get('/crear-helado', heladosController.crear);
router.post('/guardar-helado', heladosController.guardar);
router.get('/listado-helados', heladosController.listado);
router.get('/detalle-helado/:id', heladosController.detalle);
router.put('/products/:id', heladosController.editProduct);
router.delete('/delete' , heladosController.delete)

module.exports = router;
