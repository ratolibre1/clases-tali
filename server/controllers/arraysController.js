// Arrays Controller - Ejercicios con Arrays

const arraysController = {
  // Ejercicio 1: Filtrar elementos de un array
  filtrar: (req, res) => {
    const { type, data } = req.body;

    try {
      let array, resultado;

      switch (type) {
        case 'pares':
          // Filtrar números pares de un array de números
          array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          resultado = array.filter(num => num % 2 === 0);
          break;

        case 'mayores':
          // Filtrar números mayores a un valor
          array = [5, 12, 8, 130, 44, 3, 25];
          const limite = parseInt(data) || 10;
          resultado = array.filter(num => num > limite);
          break;

        case 'palabras':
          // Filtrar palabras que contengan cierta letra
          array = ['casa', 'perro', 'gato', 'mesa', 'silla', 'ventana'];
          const letra = data || 'a';
          resultado = array.filter(palabra => palabra.includes(letra));
          break;

        default:
          return res.status(400).json({ error: 'Tipo de filtro no válido' });
      }

      res.json({
        success: true,
        arrayOriginal: array,
        filtro: type,
        parametro: data,
        resultado: resultado,
        mensaje: `Se encontraron ${resultado.length} elementos que cumplen el criterio`
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Ejercicio 2: Buscar elementos en un array
  buscar: (req, res) => {
    // TODO: Implementar búsqueda en arrays de tipos básicos
    //
    // PSEUDOCÓDIGO:
    // 1. Extraer tipo de búsqueda y datos del request body
    // 2. Definir array base según el tipo (números, palabras, etc.)
    // 3. Usar métodos de búsqueda: find(), indexOf(), includes()
    // 4. Retornar elemento encontrado, índice y si existe
    // 5. Manejar casos donde no se encuentra el elemento
    //
    // TIPOS DE BÚSQUEDA:
    // - Buscar número específico en [1, 5, 3, 8, 2]
    // - Buscar palabra en ['hola', 'mundo', 'javascript']
    // - Encontrar índice del elemento
    // - Verificar si existe (true/false)

    res.json({
      message: 'Ejercicio de búsqueda - pendiente de implementar',
      ejemplos: [
        'Buscar número específico',
        'Buscar palabra en array',
        'Encontrar índice de elemento',
        'Verificar existencia'
      ]
    });
  },

  // Ejercicio 3: Ordenar arrays
  ordenar: (req, res) => {
    // TODO: Implementar ordenamiento de arrays básicos
    //
    // PSEUDOCÓDIGO:
    // 1. Extraer tipo de ordenamiento del request body
    // 2. Definir array base según el tipo
    // 3. Usar método sort() con función comparadora apropiada
    // 4. Para números: (a, b) => a - b (ascendente) o b - a (descendente)
    // 5. Para strings: sort() sin parámetros (alfabético)
    // 6. Retornar array original y array ordenado
    //
    // TIPOS DE ORDENAMIENTO:
    // - Números ascendente/descendente: [3, 1, 4, 1, 5, 9, 2, 6]
    // - Palabras alfabéticamente: ['zebra', 'apple', 'banana']
    // - Por longitud de string

    res.json({
      message: 'Ejercicio de ordenamiento - pendiente de implementar',
      ejemplos: [
        'Ordenar números ascendente/descendente',
        'Ordenar palabras alfabéticamente',
        'Ordenar por longitud de string'
      ]
    });
  },

  // Ejercicio 4: Agregar elementos a un array
  agregar: (req, res) => {
    // TODO: Implementar adición de elementos a arrays
    //
    // DESAFÍO ABIERTO:
    // Crea funciones para agregar elementos en diferentes posiciones
    // Considera métodos como push(), unshift(), splice(), concat()
    // Permite al usuario especificar dónde y qué agregar
    // Muestra el array antes y después de la modificación
    // Valida que los elementos sean del tipo correcto

    res.json({
      message: 'Ejercicio de agregar elementos - pendiente de implementar',
      ejemplos: [
        'Agregar al final (push)',
        'Agregar al inicio (unshift)',
        'Insertar en posición (splice)',
        'Concatenar arrays'
      ]
    });
  },

  // Ejercicio 5: Eliminar elementos de un array
  eliminar: (req, res) => {
    // TODO: Implementar eliminación de elementos de arrays
    //
    // DESAFÍO ABIERTO:
    // Implementa diferentes formas de eliminar elementos
    // Considera métodos como pop(), shift(), splice(), filter()
    // Permite eliminar por índice, por valor, o por condición
    // Maneja casos donde el elemento no existe
    // Retorna el elemento eliminado y el array resultante

    res.json({
      message: 'Ejercicio de eliminar elementos - pendiente de implementar',
      ejemplos: [
        'Eliminar del final (pop)',
        'Eliminar del inicio (shift)',
        'Eliminar por índice (splice)',
        'Eliminar por valor (filter)'
      ]
    });
  }
};

module.exports = arraysController; 