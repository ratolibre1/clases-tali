# Plan de Acción Granular para el MVP

Cada tarea aquí descrita es atómica, con un inicio, un objetivo claro y fácil de probar. Puedes asignarlas una a una al LLM de desarrollo y verificar su correcta ejecución antes de pasar a la siguiente.

---

## Fase 0: Preparación del Repositorio

1. **Inicializar Git y Node**

   * **Inicio**: Carpeta vacía `tutorial-primeros-pasos/`
   * **Meta**: Repositorio con `git init`, `package.json` creado (`npm init -y`)
   * **Cómo probar**: `npm run` muestra comandos default; `git status` indica master sin commits.

2. **Instalar Dependencias Básicas**

   * **Inicio**: `package.json` sin dependencias
   * **Meta**: Tener `express` y `nodemon` en `devDependencies`
   * **Cómo probar**: `npm install express` y `npm install --save-dev nodemon`; verificar `package.json`.

3. **Añadir .gitignore**

   * **Inicio**: No existe `.gitignore`
   * **Meta**: Archivo con `node_modules/`, `*.log`, `/client/dist/`
   * **Cómo probar**: `git status` no muestra `node_modules/`.

---

## Fase 1: Estructura de Backend

4. **Crear Carpeta `server/` y Archivo de Entrada**

   * **Inicio**: Solo `package.json`
   * **Meta**: `server/index.js` que arranca Express en el puerto 3000
   * **Cómo probar**: `npm start` o `npm run dev` y al visitar `http://localhost:3000/` recibir “OK”.

5. **Configurar Enrutador Principal**

   * **Inicio**: `index.js` solo sirve texto
   * **Meta**: Montar rutas vacías bajo `/api/ifs`, `/api/loops`, `/api/switches`, `/api/data`
   * **Cómo probar**: `curl http://localhost:3000/api/ifs` → 404 o ruta definida.

6. **Crear Controllers Vacíos**

   * **Inicio**: No existen controladores
   * **Meta**: Archivos `ifsController.js`, `loopsController.js`, `switchesController.js`, `dataController.js` exportando stubs de función
   * **Cómo probar**: Importar y llamar cada stub devuelve `{ success: true }` en JSON.

7. **Conectar Rutas con Controllers**

   * **Inicio**: Rutas sin lógica
   * **Meta**: Cada ruta POST (`/check`) invoca el controlador correspondiente
   * **Cómo probar**: `curl -X POST http://localhost:3000/api/ifs/check -d '{}'` retorna `{ success: true }`.

---

## Fase 2: Primer Ejercicio – Ifs

8. **Implementar Servicio de Ifs (Backend)**

   * **Inicio**: `ifsController.checkCondition` vacío
   * **Meta**: Lógica mínima: recibe `{ a, b }`, responde quién es mayor
   * **Cómo probar**: POST con `{ "a": 5, "b": 3 }` → `{ "result": "a es mayor" }`.

9. **Escribir Tests Unitarios de Ifs**

   * **Inicio**: Sin tests
   * **Meta**: 3 tests: `a > b`, `a < b`, `a == b`
   * **Cómo probar**: `npm test` pasa todos los casos.

---

## Fase 3: Estructura de Frontend

10. **Crear Carpeta `client/` y `index.html`**

    * **Inicio**: Solo backend
    * **Meta**: `client/index.html` con `<nav>` y `<section id="app">` vacío, y referencias a CSS/JS
    * **Cómo probar**: Abrir en navegador muestra nav y app vacío.

11. **Agregar `css/styles.css` Base**

    * **Inicio**: Sin estilos
    * **Meta**: Definir tipografía, grid básico para nav y contenido
    * **Cómo probar**: Cambiar ancho de ventana valida que el layout responda.

12. **Configurar `js/main.js` para Navegación**

    * **Inicio**: Sin JS
    * **Meta**: Al hacer click en “Ifs” carga un `<form>` placeholder en `#app`
    * **Cómo probar**: Click “Ifs” → aparece formulario vacío.

---

## Fase 4: Integración Ifs en Frontend

13. **Desarrollar `client/js/ifs.js`**

    * **Inicio**: No existe ifs.js
    * **Meta**: Función `loadIfsExercise()` que monta formulario con dos inputs (`a`, `b`) y botón “Enviar”
    * **Cómo probar**: `main.js` importa y ejecuta `loadIfsExercise()` al click.

14. **Conectar Frontend a Backend Ifs**

    * **Inicio**: Formulario sin acción
    * **Meta**: Al enviar, hace `fetch('/api/ifs/check', { method: 'POST', body: JSON })` y muestra el `result` en pantalla
    * **Cómo probar**: Ingresar 7 y 2 → ver “a es mayor”.

---

## Fase 5: Loops, Switch & Data

15. **Repetir Tareas 8–9 para Loops**

    * Crear lógica de sumar 1..N en backend, tests unitarios.

16. **Repetir Tareas 13–14 para Loops**

    * Frontend con formulario para N, mostrar suma total.

17. **Repetir Patrón para Switch-Case**

    * Backend: menú simple (`case 'A'`, etc.).
    * Frontend: dropdown y despliegue de resultado.

18. **Repetir Patrón para Arrays y Objetos**

    * Backend: filtrar lista; Frontend: mostrar lista filtrada.

---

## Fase 6: Documentación y Deploy

19. **Redactar `docs/ejercicios.md`**

    * **Inicio**: Carpeta docs vacía
    * **Meta**: Listado con `[ ] TODO:` para cada controlador y frontend
    * **Cómo probar**: Leer el archivo y ver checklist.

20. **Servir Frontend desde Express**

    * **Inicio**: Frontend sólo accedido por archivo local
    * **Meta**: Configurar `express.static('client')` en `index.js`
    * **Cómo probar**: Al visitar `http://localhost:3000/` carga `index.html`.

21. **Agregar Script de Deploy Simulado**

    * **Inicio**: Sin script
    * **Meta**: `npm run build && npm start` (incluir placeholder)
    * **Cómo probar**: Ejecutar build y start sin errores.

---

Con este plan podrás avanzar paso a paso, validando cada unidad antes de continuar. ¡Éxito construyendo el MVP!
