const express = require('express');
const router = express.Router();
const objetosController = require('../controllers/objetosController');

// Ruta para crear perfil de usuario
router.post('/crear', objetosController.crear);

// Ruta para acceder propiedades del producto
router.post('/acceder', objetosController.acceder);

// Ruta para modificar datos del estudiante
router.post('/modificar', objetosController.modificar);

// Ruta para calcular área usando métodos
router.post('/metodos', objetosController.metodos);

// Ruta para gestionar carrito de compras
router.post('/carrito', objetosController.carrito);

module.exports = router; 