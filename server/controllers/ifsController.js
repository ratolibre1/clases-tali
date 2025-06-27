// Controller para ejercicios de condicionales (if/else)

// ✅ EJEMPLO IMPLEMENTADO - Ejercicio 1: Comparar dos números (básico)
function comparar(req, res) {
  // 1. EXTRAER DATOS del request body
  var a = req.body.a;
  var b = req.body.b;

  // 2. VALIDACIONES de entrada
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({
      error: "Los valores a y b deben ser números válidos"
    });
  }

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      error: "Los valores no pueden ser NaN"
    });
  }

  // 3. LÓGICA PRINCIPAL usando if/else if/else
  var result;

  if (a > b) {
    result = "a es mayor";
  } else if (b > a) {
    result = "b es mayor";
  } else {
    result = "a y b son iguales";
  }

  // 4. RESPUESTA con formato específico
  res.json({
    result: result,
    // Datos adicionales para debugging/info
    valores: { a: a, b: b },
    operacion: a + " comparado con " + b
  });
}

// TODO: Ejercicio 2: Determinar si un número es par o impar
function parImpar(req, res) {
  // TODO: Implementar verificación par/impar usando if/else
  // 
  // PSEUDOCÓDIGO:
  // 1. Extraer número del request body
  // 2. Validar que sea un número válido
  // 3. Usar operador módulo (%) para determinar resto de división por 2
  // 4. Si resto es 0, es par; si no, es impar
  // 5. Retornar resultado en string y booleano
  // 
  // Input: { numero: number }
  // Output: { result: string, esPar: boolean, numero: number }
  res.json({ result: "Implementa verificación par/impar usando if/else y operador %" });
}

// TODO: Ejercicio 3: Calcular descuento por edad
function descuento(req, res) {
  // TODO: Implementar sistema de descuentos usando if/else if
  // 
  // PSEUDOCÓDIGO:
  // 1. Extraer edad y precio del request body
  // 2. Validar que edad esté en rango 0-120 y precio sea positivo
  // 3. Usar if/else if para determinar categoría y descuento
  // 4. Calcular precio final aplicando el descuento
  // 5. Retornar descuento, precio final y categoría
  //
  // RANGOS: ≤12=20%, 13-17=15%, 18-64=0%, ≥65=30%
  //
  // Input: { edad: number, precio: number }
  // Output: { descuento: number, precioFinal: number, categoria: string }
  res.json({ result: "Implementa descuentos por edad usando múltiples if/else if" });
}

// TODO: Ejercicio 4: Validar credenciales de usuario
function login(req, res) {
  // TODO: Implementar validación con condiciones anidadas
  // 
  // DESAFÍO ABIERTO:
  // Crea un sistema de autenticación con múltiples usuarios
  // Usa if anidados para verificar usuario y contraseña
  // Asigna roles diferentes según el tipo de usuario
  // Maneja casos de usuario inexistente y contraseña incorrecta
  // Retorna estado de éxito, mensaje descriptivo y rol asignado
  //
  // Input: { usuario: string, password: string }
  // Output: { success: boolean, message: string, role: string }
  res.json({ message: "Implementa validación con if anidados y operadores lógicos" });
}

// TODO: Ejercicio 5: Determinar estado del agua según temperatura
function estadoAgua(req, res) {
  // TODO: Implementar múltiples rangos de temperatura
  // 
  // DESAFÍO ABIERTO:
  // Determina el estado físico del agua según la temperatura
  // Considera puntos de congelación (0°C) y ebullición (100°C)
  // Incluye información adicional sobre habitabilidad humana
  // Agrega descripciones útiles para cada estado
  // Maneja temperaturas extremas apropiadamente
  //
  // Input: { temperatura: number }
  // Output: { estado: string, descripcion: string, puedeVivir: boolean }
  res.json({ message: "Implementa rangos de temperatura usando if/else if múltiples" });
}

module.exports = {
  comparar: comparar,
  parImpar: parImpar,
  descuento: descuento,
  login: login,
  estadoAgua: estadoAgua
}; 