# Tutorial Primeros Pasos - Programación 🚀 HOLA TALI

Un proyecto tutorial interactivo donde **implementarás** conceptos básicos de programación como ifs, loops, switches y manejo de arrays/objetos. ¡Aprende programando!

## ✨ Características

- 🎯 **Ejercicios prácticos** con instrucciones detalladas
- 📋 **Especificaciones claras** de inputs/outputs esperados
- 🧪 **Tests unitarios** para validar implementaciones
- 🌐 **Frontend interactivo** para probar tus implementaciones
- 🔄 **API REST** que completarás paso a paso

## 🚀 Inicio Rápido

### 1. Requisitos Previos

- **Node.js** (versión 14 o superior)
- **npm** (viene incluido con Node.js)

### 2. Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ratolibre1/clases-tali.git
cd clases-tali

# Instalar dependencias
npm install
```

### 3. Ejecutar la Aplicación

```bash
# Desarrollo (con reinicio automático)
npm run dev

# Producción
npm start
```

### 4. Acceso a la Aplicación

Una vez iniciado el servidor, abrir en el navegador:

- **Frontend (Aplicación Web)**: http://localhost:3000/
- **API Backend**: http://localhost:3000/api/

## 🎯 Cómo Usar Este Tutorial

### 1. **Explora los Ejercicios**
- Abre http://localhost:3000/ en tu navegador
- Navega por cada ejercicio para ver las instrucciones detalladas
- Cada ejercicio incluye:
  - 📋 Qué implementar
  - 📥 Formato de inputs esperados
  - 📤 Ejemplos de outputs
  - ❌ Casos de error a manejar

### 2. **Implementa la Lógica**
- Ve a la carpeta `server/controllers/`
- Completa los TODOs en cada controller:
  - `ifsController.js` - Lógica condicional
  - `loopsController.js` - Bucles y suma
  - `switchesController.js` - Menú con switch-case
  - `dataController.js` - Manipulación de arrays/objetos

### 3. **Prueba tu Implementación**
- Usa el frontend para probar interactivamente
- Ejecuta `npm test` para validar con tests unitarios
- Verifica que los outputs coincidan con los ejemplos

## 🧮 Ejercicio 1: Condicionales (If/Else)

### Estado: 🚧 **Por implementar**

**Archivo:** `server/controllers/ifsController.js`

**Objetivo:** Comparar dos números y determinar cuál es mayor.

**Input esperado:**
```json
{ "a": 5, "b": 3 }
```

**Outputs esperados:**
```json
// Caso 1: a > b
{ "result": "a es mayor" }

// Caso 2: a < b  
{ "result": "b es mayor" }

// Caso 3: a === b
{ "result": "a y b son iguales" }

// Caso 4: Error de validación
{ "error": "Los valores a y b deben ser números" }
```

## 🔄 Ejercicio 2: Loops (Bucles)

### Estado: 🚧 **Por implementar**

**Archivo:** `server/controllers/loopsController.js`

**Objetivo:** Sumar todos los números desde 1 hasta N usando bucles.

**Input esperado:**
```json
{ "n": 5 }
```

**Output esperado:**
```json
{
  "result": 15,
  "process": "1+2+3+4+5"
}
```

## 🔀 Ejercicio 3: Switch-Case

### Estado: 🚧 **Por implementar**

**Archivo:** `server/controllers/switchesController.js`

**Objetivo:** Crear calculadora con menú de operaciones usando switch-case.

**Input esperado:**
```json
{ "a": 10, "b": 5, "operation": "suma" }
```

**Output esperado:**
```json
{
  "result": 15,
  "operation": "10 + 5 = 15"
}
```

## 📊 Ejercicio 4: Arrays y Objetos

### Estado: 🚧 **Por implementar**

**Archivo:** `server/controllers/dataController.js`

**Objetivo:** Filtrar array de estudiantes por edad mínima.

**Input esperado:**
```json
{ "minAge": 18 }
```

**Output esperado:**
```json
{
  "filtered": [
    { "name": "Carlos", "age": 19, "grade": 92 },
    { "name": "María", "age": 18, "grade": 78 }
  ],
  "count": 2,
  "averageGrade": 85
}
```

## 🧪 Testing

```bash
# Ejecutar todos los tests
npm test

# Ver qué implementaciones faltan
npm test -- --verbose
```

### Tests Incluidos

- ✅ **IfsController**: 4 casos de prueba (necesita implementación)
- 🚧 **LoopsController**: Por agregar
- 🚧 **SwitchesController**: Por agregar  
- 🚧 **DataController**: Por agregar

## 🔧 API del Backend

### Base URL
```
http://localhost:3000/api
```

### Endpoints a Implementar

#### 🧮 Ejercicios de Ifs
```http
POST /api/ifs/check
Content-Type: application/json

{
  "a": 5,
  "b": 3
}
```

#### 🔄 Ejercicios de Loops  
```http
POST /api/loops/check
Content-Type: application/json

{
  "n": 5
}
```

#### 🔀 Ejercicios de Switch
```http
POST /api/switches/check
Content-Type: application/json

{
  "a": 10,
  "b": 5,
  "operation": "suma"
}
```

#### 📊 Ejercicios de Arrays/Objetos
```http
POST /api/data/check
Content-Type: application/json

{
  "minAge": 18
}
```

## 📁 Estructura del Proyecto

```
clases-tali/
├── client/                  # Frontend (COMPLETO)
│   ├── index.html          # Interfaz principal
│   ├── css/styles.css      # Estilos responsivos
│   └── js/main.js          # Lógica del frontend
│
├── server/                 # Backend (PARA COMPLETAR)
│   ├── index.js           # Servidor (COMPLETO)
│   ├── routes/            # Rutas API (COMPLETO)
│   └── controllers/       # ⚠️ IMPLEMENTAR AQUÍ:
│       ├── ifsController.js      # TODO: Lógica de ifs
│       ├── loopsController.js    # TODO: Lógica de loops  
│       ├── switchesController.js # TODO: Lógica de switches
│       └── dataController.js     # TODO: Lógica de arrays
│
├── tests/                 # Tests unitarios
│   └── ifsController.test.js    # Tests para validar
│
├── package.json          # Dependencias y scripts
└── README.md            # Esta documentación
```

## 📝 Progreso de Implementación

### ✅ Infraestructura Completa
- [x] Servidor Express configurado
- [x] Rutas API definidas  
- [x] Frontend interactivo
- [x] Sistema de tests
- [x] Documentación detallada

### 🚧 Ejercicios por Implementar
- [ ] **Ifs**: Comparación de números
- [ ] **Loops**: Suma con bucles
- [ ] **Switches**: Calculadora con menú
- [ ] **Arrays/Objetos**: Filtro de estudiantes

## 🎓 Metodología de Aprendizaje

1. **📖 Lee** las instrucciones de cada ejercicio en el frontend
2. **💻 Implementa** la lógica en el controller correspondiente
3. **🧪 Prueba** tu código con el frontend interactivo
4. **✅ Valida** con tests unitarios (`npm test`)
5. **🔄 Itera** hasta completar todos los casos

## 🤝 Ayuda y Recursos

- Cada ejercicio tiene ejemplos detallados en el frontend
- Los tests te muestran qué casos faltan por implementar
- Los TODOs en el código incluyen pistas sobre la implementación

---

¡Feliz aprendizaje! 🎉 ¡A programar se ha dicho!
