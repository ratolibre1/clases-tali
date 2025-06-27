# 🎯 GUÍA DE DESARROLLO - Tutorial Interactivo de JavaScript

## 📊 Estado Actual del Proyecto

**✅ FUNCIONANDO AL 100%**
- Servidor Express en puerto 3000
- 5 secciones de JavaScript puro (sin DOM/frontend)
- SPA con routing + custom dropdowns animados
- 25 ejercicios totales: 5 implementados + 20 TODOs

---

## 🚀 Inicio Rápido

```bash
cd clases-tali
npm install
npm start
# Servidor disponible en http://localhost:3000
```

**URLs de prueba:**
- http://localhost:3000/ (página principal)
- http://localhost:3000/ifs (condicionales)
- http://localhost:3000/arrays (arrays)

---

## 📂 Estructura del Proyecto

```
clases-tali/
├── server/
│   ├── controllers/           # 5 controllers con ejercicios
│   │   ├── ifsController.js
│   │   ├── loopsController.js
│   │   ├── switchesController.js
│   │   ├── arraysController.js
│   │   └── objetosController.js
│   ├── routes/               # 5 archivos de rutas API
│   │   ├── ifs.js
│   │   ├── loops.js
│   │   ├── switches.js
│   │   ├── arrays.js
│   │   └── objetos.js
│   └── index.js              # Servidor principal
├── client/
│   ├── js/                   # Frontend modular
│   │   ├── main.js           # Navegación y routing
│   │   ├── customSelect.js   # Dropdowns animados
│   │   ├── ifs.js
│   │   ├── loops.js
│   │   ├── switches.js
│   │   ├── arrays.js
│   │   └── objetos.js
│   ├── css/
│   │   └── styles.css        # Estilos + animaciones
│   └── index.html            # SPA principal
├── tests/                    # Tests unitarios
└── package.json
```

---

## 📚 Secciones Implementadas

### 🔀 1. Condicionales (If/Else)
**Archivo:** `server/controllers/ifsController.js`

- ✅ **Ejercicio 1: `comparar()`** - Completamente implementado
- 📝 **Ejercicio 2: `parImpar()`** - Pseudocódigo (determinar par/impar)
- 📝 **Ejercicio 3: `descuento()`** - Pseudocódigo (descuentos por edad)
- 🚀 **Ejercicio 4: `login()`** - Desafío abierto (sistema autenticación)
- 🚀 **Ejercicio 5: `estadoAgua()`** - Desafío abierto (temperatura → estado)

### 🔄 2. Bucles (For/While)
**Archivo:** `server/controllers/loopsController.js`

- ✅ **Ejercicio 1: `suma()`** - Completamente implementado
- 📝 **Ejercicio 2: `tabla()`** - Pseudocódigo (tabla multiplicar)
- 📝 **Ejercicio 3: `pares()`** - Pseudocódigo (contar pares en rango)
- 🚀 **Ejercicio 4: `factorial()`** - Desafío abierto
- 🚀 **Ejercicio 5: `potencia()`** - Desafío abierto

### 🎯 3. Switch-Case
**Archivo:** `server/controllers/switchesController.js`

- ✅ **Ejercicio 1: `calculadora()`** - Completamente implementado
- 📝 **Ejercicio 2: `nota()`** - Pseudocódigo (calificaciones A-F)
- 📝 **Ejercicio 3: `dia()`** - Pseudocódigo (días semana)
- 🚀 **Ejercicio 4: `estacion()`** - Desafío abierto (estaciones año)
- 🚀 **Ejercicio 5: `menu()`** - Desafío abierto (menú restaurante)

### 📊 4. Arrays (Tipos Básicos)
**Archivo:** `server/controllers/arraysController.js`

- ✅ **Ejercicio 1: `filtrar()`** - Completamente implementado
- 📝 **Ejercicio 2: `buscar()`** - Pseudocódigo (find, indexOf, includes)
- 📝 **Ejercicio 3: `ordenar()`** - Pseudocódigo (sort con comparadores)
- 🚀 **Ejercicio 4: `agregar()`** - Desafío abierto (push, unshift, splice)
- 🚀 **Ejercicio 5: `eliminar()`** - Desafío abierto (pop, shift, filter)

### 🏗️ 5. Objetos
**Archivo:** `server/controllers/objetosController.js`

- ⚠️ **Ejercicio 1: `crear()`** - **PENDIENTE** (solo placeholder)
- 📝 **Ejercicio 2: `acceder()`** - Pseudocódigo (acceso propiedades)
- 📝 **Ejercicio 3: `modificar()`** - Pseudocódigo (modificar propiedades)
- 🚀 **Ejercicio 4: `metodos()`** - Desafío abierto (objetos con métodos)
- 🚀 **Ejercicio 5: `carrito()`** - Desafío abierto (carrito compras)

---

## 🎯 PRÓXIMAS TAREAS PRIORITARIAS

### 1. ⚠️ CRÍTICO: Implementar `objetosController.crear()`

**Es el único ejercicio ejemplo que falta implementar**

**Ubicación:** `server/controllers/objetosController.js` línea ~25
**Función:** `crear(req, res)`

**Especificaciones:**
```javascript
// Input esperado:
{
  "nombre": "Ana",
  "edad": 25,
  "email": "ana@email.com",
  "ciudad": "Santiago" // opcional
}

// Output esperado:
{
  "usuario": {
    "id": "USR1",
    "nombre": "Ana",
    "edad": 25,
    "email": "ana@email.com",
    "ciudad": "Santiago",
    "fechaRegistro": "2024-01-15T10:30:00.000Z"
  },
  "mensaje": "Usuario creado exitosamente",
  "id": "USR1"
}
```

**Validaciones necesarias:**
- nombre, edad, email son requeridos
- edad debe ser número entre 0-120
- email debe contener @ y .
- ciudad es opcional
- generar ID único (ej: "USR" + contador)

### 2. Continuar con TODOs en orden de dificultad

**Orden sugerido:**
1. `ifsController.parImpar()` - más simple
2. `loopsController.tabla()` - bucle con string
3. `switchesController.nota()` - switch con rangos
4. `arraysController.buscar()` - métodos de array
5. `objetosController.acceder()` - acceso propiedades

---

## 🛠️ Patrones de Implementación

### Estructura Estándar de Controller

```javascript
function nombreEjercicio(req, res) {
  // 1. EXTRAER DATOS del request body
  var dato1 = req.body.dato1;
  var dato2 = req.body.dato2;

  // 2. VALIDACIONES de entrada
  if (typeof dato1 !== 'number') {
    return res.status(400).json({
      error: "dato1 debe ser un número válido"
    });
  }

  if (condicionInvalida) {
    return res.status(400).json({
      error: "Mensaje de error descriptivo"
    });
  }

  // 3. LÓGICA PRINCIPAL
  var resultado = procesarLogica(dato1, dato2);
  
  // 4. RESPUESTA con formato específico
  res.json({
    result: resultado,
    // Datos adicionales para debugging/info
    input: { dato1: dato1, dato2: dato2 },
    operacion: "descripción de lo realizado"
  });
}
```

### Niveles de Comentarios por Ejercicio

- **Ejercicio 1**: Código completo (ejemplo de referencia)
- **Ejercicios 2-3**: Pseudocódigo paso a paso (guía sin revelar código)
- **Ejercicios 4-5**: Descripción conceptual abierta (máximo desafío)

---

## 🧪 Testing & Validación

### Comandos de Prueba

```bash
# Probar ejercicio implementado (condicionales)
curl -X POST http://localhost:3000/api/ifs/comparar \
  -H "Content-Type: application/json" \
  -d '{"a": 5, "b": 3}'

# Probar ejercicio implementado (bucles)
curl -X POST http://localhost:3000/api/loops/suma \
  -H "Content-Type: application/json" \
  -d '{"n": 5}'

# Probar ejercicio implementado (switches)
curl -X POST http://localhost:3000/api/switches/calculadora \
  -H "Content-Type: application/json" \
  -d '{"a": 10, "b": 3, "operacion": "suma"}'

# Probar ejercicio implementado (arrays)
curl -X POST http://localhost:3000/api/arrays/filtrar \
  -H "Content-Type: application/json" \
  -d '{"type": "pares", "data": ""}'

# Probar ejercicio PENDIENTE (objetos)
curl -X POST http://localhost:3000/api/objetos/crear \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Ana", "edad": 25, "email": "ana@test.com"}'
```

### Respuestas Esperadas

**✅ Ejercicio implementado:**
```json
{
  "result": "a es mayor",
  "valores": {"a": 5, "b": 3},
  "operacion": "5 comparado con 3"
}
```

**⚠️ Ejercicio pendiente:**
```json
{
  "message": "Función crear no implementada aún"
}
```

---

## 🎨 Características del Frontend

### Custom Dropdowns Animados
- **Archivo:** `client/js/customSelect.js`
- Reemplaza `<select>` nativos con animaciones CSS
- Auto-detección de nuevos selects dinámicos
- Navegación por teclado habilitada

### Routing SPA
- **Archivo:** `client/js/main.js`
- Navegación sin recarga de página
- URLs amigables (/ifs, /loops, etc.)
- Botones de navegación sincronizados

### Formularios Dinámicos
- **Archivos:** `client/js/*.js`
- Campos que aparecen según tipo seleccionado
- Validación en tiempo real
- Mensajes de error/éxito

---

## 🔍 Archivos Clave para Desarrollo

### Backend (Prioridad Alta)
- `server/controllers/objetosController.js` - **IMPLEMENTAR `crear()`**
- `server/controllers/loopsController.js` - implementar `tabla()`, `pares()`
- `server/controllers/switchesController.js` - implementar `nota()`, `dia()`
- `server/controllers/ifsController.js` - implementar `parImpar()`, `descuento()`
- `server/controllers/arraysController.js` - implementar `buscar()`, `ordenar()`

### Frontend (Funcionando)
- `client/js/objetos.js` - formularios complejos ya implementados
- `client/js/customSelect.js` - dropdowns animados funcionando
- `client/css/styles.css` - estilos completos con animaciones
- `client/js/main.js` - navegación y routing funcional

### Configuración
- `server/index.js` - rutas API + SPA configuradas
- `package.json` - dependencias instaladas
- `client/index.html` - estructura HTML base

---

## ⚠️ Decisiones de Diseño Importantes

### Tecnológicas
1. **Sin HTML/DOM**: Proyecto 100% JavaScript backend para enseñar fundamentos
2. **JavaScript clásico**: `var`, `function` - sin ES6+ para principiantes
3. **Arrays básicos**: Solo números, strings, booleanos (no objetos hasta sección Objetos)
4. **Express simple**: Sin middlewares complejos, enfoque en lógica

### Pedagógicas
1. **Progresión de dificultad**: ejemplo → pseudocódigo → desafío abierto
2. **Un concepto por sección**: No mezclar condicionales con bucles, etc.
3. **Validaciones explícitas**: Enseñar buenas prácticas desde el inicio
4. **Respuestas consistentes**: Mismo formato JSON en toda la aplicación

### UI/UX
1. **Custom dropdowns**: Mejor experiencia que `<select>` nativos
2. **SPA routing**: Navegación fluida sin recargas
3. **Formularios dinámicos**: Campos que aparecen según contexto
4. **Feedback inmediato**: Validación y respuestas en tiempo real

---

## 💡 Contexto para Claude

Este es un **tutorial progresivo de programación** para estudiantes principiantes de JavaScript. El objetivo es enseñar **conceptos fundamentales** antes de sintaxis avanzada.

### Filosofía del Proyecto
- **Backend antes que frontend**: Dominar lógica antes de UI
- **JavaScript puro antes que frameworks**: Entender el lenguaje base
- **Conceptos antes que sintaxis**: Entender el "por qué" antes del "cómo"
- **Práctica guiada**: Ejemplos → guías → desafíos abiertos

### Estilo de Código
- Variables con `var` (no `let`/`const`)
- Funciones con `function` (no arrow functions)
- Callbacks tradicionales (no async/await)
- Comentarios educativos abundantes

### Validaciones Requeridas
- Siempre validar tipos de datos
- Rangos apropiados para ejercicios educativos
- Mensajes de error claros y descriptivos
- Respuestas JSON consistentes

---

## 🚀 Comandos Útiles

```bash
# Desarrollo
npm start                    # Iniciar servidor
npm test                     # Ejecutar tests (si existen)

# Verificar funcionamiento
curl http://localhost:3000/  # Página principal
curl http://localhost:3000/api/ifs/comparar  # Endpoint específico

# Debugging
tail -f logs/server.log      # Si existen logs
netstat -an | grep 3000      # Verificar puerto
```

---

## ✅ Checklist de Desarrollo

### Antes de Implementar
- [ ] Leer comentarios TODO del ejercicio
- [ ] Entender input/output esperado
- [ ] Revisar validaciones necesarias
- [ ] Seguir patrón de ejercicios implementados

### Durante Implementación
- [ ] Extraer datos de req.body
- [ ] Validar tipos y rangos
- [ ] Implementar lógica del ejercicio
- [ ] Formatear respuesta JSON
- [ ] Probar con curl/Postman

### Después de Implementar
- [ ] Probar casos válidos e inválidos
- [ ] Verificar mensajes de error
- [ ] Comprobar respuesta en frontend
- [ ] Actualizar documentación si es necesario

---

**¡Continúa el excelente trabajo! El proyecto está bien estructurado y listo para seguir creciendo.** 🎯✨ 