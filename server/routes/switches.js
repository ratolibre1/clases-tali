const express = require('express');
const { calculadora, nota, dia, estacion, menu } = require('../controllers/switchesController');
const router = express.Router();

// Ruta placeholder para ejercicios de switches
router.get('/', (req, res) => {
  res.json({ message: 'Rutas de switches disponibles: /calculadora, /nota, /dia, /estacion, /menu' });
});

// Rutas específicas para cada ejercicio
router.post('/calculadora', calculadora);
router.post('/nota', nota);
router.post('/dia', dia);
router.post('/estacion', estacion);
router.post('/menu', menu);

module.exports = router; 