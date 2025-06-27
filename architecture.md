## Arquitectura del Proyecto Tutorial

Este repositorio combina un **backend** básico en Node.js y un **frontend** en HTML/CSS/JavaScript puro. Incluye ejercicios con TODOs para cada tema (ifs, loops, switch, arrays/objetos) distribuidos en ambas capas.

---

### 1. Estructura de Carpetas y Archivos

```
tutorial-primeros-pasos/
├── .gitignore
├── package.json
├── README.md
├── server/                  # Backend Node.js
│   ├── index.js             # Punto de entrada del servidor
│   ├── routes/              # Definición de endpoints
│   │   ├── ifs.js           # Rutas para ejercicios de ifs
│   │   ├── loops.js         # Rutas para for/while
│   │   ├── switches.js      # Rutas para switch-case
│   │   └── data.js          # Rutas para arrays y objetos
│   ├── controllers/         # Lógica de cada ruta
│   │   ├── ifsController.js
│   │   ├── loopsController.js
│   │   ├── switchesController.js
│   │   └── dataController.js
│   └── services/            # Servicios y acceso a datos (simulado)
│       ├── dataService.js
│       └── utils.js         # Funciones auxiliares
│
├── client/                  # Frontend estático
│   ├── index.html           # Página principal con estructura base
│   ├── css/
│   │   └── styles.css       # Estilos generales
│   ├── js/
│   │   ├── main.js          # Lógica global y rutas internas
│   │   ├── ifs.js           # Ejercicios y llamadas al back de ifs
│   │   ├── loops.js         # Ejercicios y llamadas de loops
│   │   ├── switches.js      # Ejercicios de switch-case
│   │   └── data.js          # Manejo de arrays y objetos
│   └── assets/              # Imágenes, iconos, etc.
│
└── docs/                    # Documentación adicional
    └── ejercicios.md        # Instrucciones de cada ejercicio
```

---

### 2. Descripción de Cada Parte

#### 2.1 Raíz del Proyecto

- **.gitignore**: Ignora `node_modules/`, logs y archivos temporales.
- **package.json**: Dependencias (`express`), scripts (`npm start`, `npm dev`).
- **README.md**: Instrucciones de instalación, ejecución y estructura general.

#### 2.2 Backend (`server/`)

- **index.js**:
  - Configura Express.
  - Monta rutas: `/api/ifs`, `/api/loops`, `/api/switches`, `/api/data`.
- **routes/**:
  - Archivos agrupados por temática de ejercicios.
  - Cada archivo exporta un `Router` con endpoints `GET` y `POST` para recibir datos de ejercicios.
  - Ejemplo en `ifs.js`:
    ```js
    const express = require('express');
    const { checkCondition } = require('../controllers/ifsController');
    const router = express.Router();

    router.post('/check', checkCondition); // TODO: implementar lógica de ifs
    module.exports = router;
    ```
- **controllers/**:
  - Cada `*Controller.js` define funciones middleware.
  - Reciben `req.body`, aplican la lógica y envían respuesta JSON.
- **services/**:
  - Lógica compartida o simulación de base de datos en memoria.
  - `dataService.js` contiene estructuras de arrays/objetos para ejercicios.
  - `utils.js` con helpers generales.

#### 2.3 Frontend (`client/`)

- **index.html**:
  - Estructura base con `<nav>` para elegir ejercicio.
  - `<section id="app"></section>`: contenedor dinámico.
  - Incluye `<script>` de `main.js` y CSS.
- **css/styles.css**:
  - Estilos simples: grid/flex para distribución.
  - Clases para botones, formularios y mensajes de error.
- **js/main.js**:
  - Control de navegación interna.
  - Carga de módulos `ifs.js`, `loops.js`, etc.
  - Ejemplo:
    ```js
    document.getElementById('nav-ifs').addEventListener('click', () => loadIfsExercise());
    ```
- **js/ifs.js** (similar en los demás):
  - Renderiza formulario de ejercicio.
  - Al enviar, hace `fetch('/api/ifs/check', { method: 'POST', body: JSON.stringify(data) })`.
  - Procesa respuesta y muestra resultado.

#### 2.4 Documentación (`docs/ejercicios.md`)

- Listado de ejercicios:
  - Ifs: validar edad, comparar números.
  - Loops: sumar hasta N, conteo de bucles.
  - Switch: menú de opciones.
  - Arrays/Objetos: filtrar lista, CRUD.
- Marca cada ejercicio con un TODO en frontend/backend:
  ```markdown
  - [ ] TODO: implementar controlador `loopsController.sumUp`
  ```

---

### 3. Estado y Conexión de Servicios

- **Estado en Frontend**: Elementos JS nativos (objetos literales) guardan respuestas por ejercicio en memoria. Alternativa futura: migrar a biblioteca de estado (p.ej. Redux).
- **Servicios**:
  - `main.js` orquesta llamadas a rutas `/api/*`.
  - Backend responde con JSON `{ success: true, data: ... }`.
  - Ejemplo de flujo:
    1. Usuario escribe datos en formulario de ifs.
    2. `ifs.js` envía petición POST a `/api/ifs/check`.
    3. `ifsController` en server recibe y llama a `services/utils.js`.
    4. Respuesta regresa al frontend.

---

### 4. Scripts y Ejecución

- **Instalación**:

  ```bash
  git clone https://github.com/tuUsuario/tutorial-primeros-pasos.git
  cd tutorial-primeros-pasos
  npm install
  ```

- **Ejecución**:

  - Desarrollo con reinicios:
    ```bash
    npm run dev  # usa nodemon
    ```
  - Abrir `client/index.html` en el navegador (o servir estático desde Express).

---

> ¡Listo! Esta base te permitirá agregar progresivamente los ejercicios de programación, con TODOs en cada parte para que tu esposita implemente la lógica paso a paso.

