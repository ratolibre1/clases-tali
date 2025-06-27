// Controller para ejercicios de switches

// ✅ EJEMPLO IMPLEMENTADO - Ejercicio 1: Calculadora básica
function calculadora(req, res) {
  // 1. EXTRAER DATOS del request body
  var a = req.body.a;
  var b = req.body.b;
  var operacion = req.body.operacion;

  // 2. VALIDACIONES de entrada
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({
      error: "Los valores a y b deben ser números válidos"
    });
  }

  if (typeof operacion !== 'string' || !operacion.trim()) {
    return res.status(400).json({
      error: "La operación debe ser un string válido"
    });
  }

  // 3. LÓGICA PRINCIPAL usando switch-case
  var resultado;
  var simbolo;

  switch (operacion.toLowerCase()) {
    case 'suma':
      resultado = a + b;
      simbolo = '+';
      break;

    case 'resta':
      resultado = a - b;
      simbolo = '-';
      break;

    case 'multiplicacion':
      resultado = a * b;
      simbolo = '×';
      break;

    case 'division':
      if (b === 0) {
        return res.status(400).json({
          error: "No se puede dividir por cero"
        });
      }
      resultado = a / b;
      simbolo = '÷';
      break;

    default:
      return res.status(400).json({
        error: "Operación no válida. Use: suma, resta, multiplicacion, division"
      });
  }

  // 4. RESPUESTA con formato específico
  res.json({
    result: resultado,
    expresion: a + " " + simbolo + " " + b + " = " + resultado,
    // Datos adicionales para debugging/info
    operacion: operacion,
    valores: { a: a, b: b }
  });
}

// TODO: Ejercicio 2: Sistema de calificaciones A-F
function nota(req, res) {
  // TODO: Implementar sistema de notas usando switch-case
  //
  // PSEUDOCÓDIGO:
  // 1. Extraer puntaje del request body
  // 2. Validar puntaje esté entre 0-100
  // 3. Usar switch(true) con condiciones de rangos
  // 4. Asignar letra (A,B,C,D,F) y descripción según rango
  // 5. Determinar si está aprobado (>= 60)
  // 6. Retornar letra, descripción y estado de aprobación
  //
  // RANGOS: 90-100=A, 80-89=B, 70-79=C, 60-69=D, <60=F

  res.json({ message: "Implementa calificaciones A-F usando switch con rangos" });
}

// TODO: Ejercicio 3: Días de la semana
function dia(req, res) {
  // TODO: Implementar días de semana usando switch-case
  //
  // PSEUDOCÓDIGO:
  // 1. Extraer número del request body (1-7)
  // 2. Validar que esté en rango 1-7
  // 3. Usar switch(numero) para mapear a nombres de días
  // 4. Asignar tipo (día laboral vs fin de semana)
  // 5. Determinar si es fin de semana (sábado/domingo)
  // 6. Retornar nombre del día, tipo y booleano de fin de semana
  //
  // MAPEO: 1=Lunes, 2=Martes, ..., 6=Sábado, 7=Domingo

  res.json({ message: "Implementa días de semana usando switch(numero)" });
}

// TODO: Ejercicio 4: Estaciones del año
function estacion(req, res) {
  // TODO: Implementar estaciones usando switch-case
  //
  // DESAFÍO ABIERTO:
  // Mapea meses a estaciones del año usando cases agrupados
  // Considera que en Chile las estaciones son opuestas al hemisferio norte
  // Incluye descripciones características de cada estación
  // Maneja meses agrupados en el mismo case (ej: dic-ene-feb = verano)
  //
  // Input: { mes: number (1-12) }
  // Output: { estacion: string, descripcion: string }

  res.json({ message: "Implementa estaciones del año usando switch(mes) con cases agrupados" });
}

// TODO: Ejercicio 5: Menú de restaurante
function menu(req, res) {
  // TODO: Implementar menú usando switch-case anidados
  //
  // DESAFÍO ABIERTO:
  // Crea un sistema de menú con categorías y opciones
  // Usa switches anidados (categoría principal, opción dentro de categoría)
  // Incluye precios realistas para un restaurante chileno
  // Maneja casos donde la categoría o opción no existen
  // Considera categorías: entradas, platos principales, postres, bebidas
  //
  // Input: { categoria: string, opcion: number }
  // Output: { item: string, precio: number, categoria: string }

  res.json({ message: "Implementa menú de restaurante usando switches anidados" });
}

module.exports = {
  calculadora: calculadora,
  nota: nota,
  dia: dia,
  estacion: estacion,
  menu: menu
}; 