const express = require('express');
const { suma, tabla, pares, factorial, potencia } = require('../controllers/loopsController');
const router = express.Router();

// Ruta placeholder para ejercicios de loops
router.get('/', (req, res) => {
  res.json({ message: 'Rutas de loops disponibles: /suma, /tabla, /pares, /factorial, /potencia' });
});

// Rutas específicas para cada ejercicio
router.post('/suma', suma);
router.post('/tabla', tabla);
router.post('/pares', pares);
router.post('/factorial', factorial);
router.post('/potencia', potencia);

module.exports = router; 