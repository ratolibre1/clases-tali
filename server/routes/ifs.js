const express = require('express');
const { comparar, parImpar, descuento, login, estadoAgua } = require('../controllers/ifsController');
const router = express.Router();

// Ruta placeholder para ejercicios de ifs
router.get('/', (req, res) => {
  res.json({ message: 'Rutas de ifs disponibles: /comparar, /par-impar, /descuento, /login, /estado-agua' });
});

// Rutas específicas para cada ejercicio
router.post('/comparar', comparar);
router.post('/par-impar', parImpar);
router.post('/descuento', descuento);
router.post('/login', login);
router.post('/estado-agua', estadoAgua);

module.exports = router; 