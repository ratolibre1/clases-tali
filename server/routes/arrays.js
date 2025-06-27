const express = require('express');
const router = express.Router();
const arraysController = require('../controllers/arraysController');

// Ruta para filtrar estudiantes por edad
router.post('/filtrar', arraysController.filtrar);

// Ruta para buscar estudiante por nombre
router.post('/buscar', arraysController.buscar);

// Ruta para ordenar estudiantes por notas
router.post('/ordenar', arraysController.ordenar);

// Ruta para agregar nuevo estudiante
router.post('/agregar', arraysController.agregar);

// Ruta para eliminar estudiante por posición
router.post('/eliminar', arraysController.eliminar);

module.exports = router; 