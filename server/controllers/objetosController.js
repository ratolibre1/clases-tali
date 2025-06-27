// Objetos Controller - Ejercicios con Objetos

// Objetos base para trabajar
var producto = {
  nombre: "Laptop",
  precio: 1500,
  categoria: "Electrónicos",
  disponible: true
};

var estudiante = {
  nombre: "Ana",
  edad: 18,
  nota: 85,
  materia: "Matemáticas"
};

var carritoData = {
  items: [],
  total: 0,
  descuento: 0
};

// Contador para IDs únicos
var userIdCounter = 1;

// Ejercicio 1: Crear perfil de usuario
function crear(req, res) {
  // TODO: Implementar creación de usuario
  // 
  // Pasos a seguir:
  // 1. Obtener nombre, edad, email del req.body
  // 2. Validar que todos los campos requeridos estén presentes
  // 3. Validar formato de email (contiene @ y .)
  // 4. Crear objeto usuario usando literal {}
  // 5. Generar ID único (ej: "USR" + userIdCounter++)
  // 6. Retornar: { usuario: object, mensaje: string, id: string }
  // 
  // Ejemplo de creación de objeto:
  // var usuario = {
  //   nombre: nombre,
  //   edad: edad,
  //   email: email,
  //   fechaRegistro: new Date().toISOString()
  // };
  // 
  // Si ciudad está presente, agregarla también:
  // if (req.body.ciudad) {
  //   usuario.ciudad = req.body.ciudad;
  // }

  res.json({
    message: "Función crear no implementada aún"
  });
}

// Ejercicio 2: Acceder propiedades del producto
function acceder(req, res) {
  // TODO: Implementar acceso a propiedades
  // 
  // PSEUDOCÓDIGO:
  // 1. Obtener nombre de propiedad del request body
  // 2. Validar que la propiedad existe en el objeto producto
  // 3. Usar notación de corchetes para acceder al valor
  // 4. Verificar tipo de dato de la propiedad
  // 5. Retornar valor, información del producto y metadatos
  // 6. Manejar caso donde la propiedad no existe
  //
  // PROPIEDADES DISPONIBLES: nombre, precio, categoria, disponible

  res.json({
    message: "Función acceder no implementada aún"
  });
}

// Ejercicio 3: Modificar datos del estudiante
function modificar(req, res) {
  // TODO: Implementar modificación de propiedades
  // 
  // PSEUDOCÓDIGO:
  // 1. Obtener campo y nuevo valor del request body
  // 2. Validar que el campo existe en el objeto estudiante
  // 3. Guardar valor anterior para comparación
  // 4. Convertir nuevo valor al tipo correcto según el campo
  // 5. Asignar nuevo valor usando notación de corchetes
  // 6. Retornar estado anterior, nuevo y objeto completo
  // 7. Validar tipos de datos (edad y nota deben ser números)
  //
  // CAMPOS MODIFICABLES: nombre, edad, nota, materia

  res.json({
    message: "Función modificar no implementada aún"
  });
}

// Ejercicio 4: Calcular área usando métodos del objeto
function metodos(req, res) {
  // TODO: Implementar objeto con métodos
  // 
  // DESAFÍO ABIERTO:
  // Crea objetos con propiedades y métodos propios
  // Usa "this" para acceder a propiedades dentro de métodos
  // Implementa cálculos para diferentes figuras geométricas
  // Considera rectángulo, cuadrado, círculo, triángulo
  // Retorna tanto el área como el perímetro calculados

  res.json({
    message: "Función metodos no implementada aún"
  });
}

// Ejercicio 5: Gestionar carrito de compras (objetos anidados)
function carrito(req, res) {
  // TODO: Implementar gestión del carrito
  // 
  // DESAFÍO ABIERTO:
  // Maneja un carrito con arrays de objetos anidados
  // Implementa acciones: agregar, eliminar, vaciar, aplicar descuentos
  // Calcula totales dinámicamente considerando cantidades y descuentos
  // Usa métodos de arrays como push(), filter(), reduce()
  // Mantén coherencia de datos entre items y total

  res.json({
    message: "Función carrito no implementada aún"
  });
}

module.exports = {
  crear,
  acceder,
  modificar,
  metodos,
  carrito
}; 