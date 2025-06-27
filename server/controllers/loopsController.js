// Controller para ejercicios de loops

// ✅ EJEMPLO IMPLEMENTADO - Ejercicio 1: Suma desde 1 hasta N
function suma(req, res) {
  // 1. EXTRAER DATOS del request body
  var n = req.body.n;

  // 2. VALIDACIONES de entrada
  if (typeof n !== 'number') {
    return res.status(400).json({
      error: "El valor n debe ser un número válido"
    });
  }

  if (isNaN(n) || n < 1 || n > 1000) {
    return res.status(400).json({
      error: "El valor n debe estar entre 1 y 1000"
    });
  }

  // 3. LÓGICA PRINCIPAL usando bucle for
  var resultado = 0;
  var proceso = "";

  for (var i = 1; i <= n; i++) {
    resultado += i;

    // Construir string del proceso
    if (i === 1) {
      proceso = i.toString();
    } else {
      proceso += "+" + i;
    }
  }

  // 4. RESPUESTA con formato específico
  res.json({
    result: resultado,
    process: proceso,
    // Datos adicionales para debugging/info
    n: n,
    formula: "Suma de 1 hasta " + n
  });
}

// TODO: Ejercicio 2: Tabla de multiplicar
function tabla(req, res) {
  // TODO: Implementar tabla de multiplicar
  //
  // PSEUDOCÓDIGO:
  // 1. Extraer numero y hasta del request body
  // 2. Validar que ambos sean números entre 1-20
  // 3. Crear variable para almacenar la tabla como string
  // 4. Usar bucle for desde 1 hasta el valor "hasta"
  // 5. En cada iteración: calcular producto y agregarlo al string
  // 6. Retornar objeto con el resultado
  //
  // EJEMPLO: numero=3, hasta=5
  // Output: { "result": "3x1=3, 3x2=6, 3x3=9, 3x4=12, 3x5=15" }

  res.json({ message: "Implementa la tabla de multiplicar usando un bucle" });
}

// TODO: Ejercicio 3: Contar números pares en un rango
function pares(req, res) {
  // TODO: Implementar contador de números pares
  //
  // PSEUDOCÓDIGO:
  // 1. Extraer desde y hasta del request body
  // 2. Validar que desde <= hasta y estén en rango válido (1-100)
  // 3. Crear contador y string para almacenar la lista
  // 4. Usar bucle for desde "desde" hasta "hasta"
  // 5. En cada iteración: verificar si es par usando módulo %
  // 6. Si es par: incrementar contador y agregar a la lista
  // 7. Retornar cantidad y lista de pares
  //
  // EJEMPLO: desde=1, hasta=10
  // Output: { "result": 5, "pares": "2, 4, 6, 8, 10" }

  res.json({ message: "Implementa el contador de números pares usando bucle + if" });
}

// TODO: Ejercicio 4: Calcular factorial
function factorial(req, res) {
  // TODO: Implementar factorial N!
  //
  // DESAFÍO ABIERTO:
  // Calcula el factorial de un número (ej: 4! = 4×3×2×1 = 24)
  // Considera casos especiales como 0! = 1
  // Limita el input para evitar números demasiado grandes
  // Devuelve tanto el resultado como el proceso de cálculo
  //
  // Input: { n: number }
  // Output: { result: number, process: string }

  res.json({ message: "Implementa el factorial usando un bucle multiplicativo" });
}

// TODO: Ejercicio 5: Calcular potencia sin Math.pow
function potencia(req, res) {
  // TODO: Implementar potencia base^exponente
  //
  // DESAFÍO ABIERTO:
  // Calcula potencia usando multiplicación repetida (sin Math.pow)
  // Maneja casos especiales como cualquier número elevado a 0
  // Considera límites apropiados para base y exponente
  // Muestra el proceso de multiplicación paso a paso
  //
  // Input: { base: number, exponente: number }
  // Output: { result: number, process: string }

  res.json({ message: "Implementa la potencia usando multiplicación repetida" });
}

module.exports = {
  suma: suma,
  tabla: tabla,
  pares: pares,
  factorial: factorial,
  potencia: potencia
}; 