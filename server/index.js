const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '../client')));

// Importar rutas
const ifsRoutes = require('./routes/ifs');
const loopsRoutes = require('./routes/loops');
const switchesRoutes = require('./routes/switches');
const arraysRoutes = require('./routes/arrays');
const objetosRoutes = require('./routes/objetos');

// Usar las rutas
app.use('/api/ifs', ifsRoutes);
app.use('/api/loops', loopsRoutes);
app.use('/api/switches', switchesRoutes);
app.use('/api/arrays', arraysRoutes);
app.use('/api/objetos', objetosRoutes);

// Manejar rutas del frontend (SPA)
app.get('/ifs', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/loops', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/switches', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/arrays', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/objetos', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Rutas SPA para secciones de frontend
app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/css', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/layout', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/responsive', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Frontend disponible en: http://localhost:${PORT}/`);
  console.log(`Rutas SPA habilitadas:`);
  console.log(`  Backend: /ifs, /loops, /switches, /arrays, /objetos`);
  console.log(`  Frontend: /html, /css, /layout, /responsive`);
}); 