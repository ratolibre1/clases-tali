// Módulo para ejercicios de Loops
const LoopsExercise = {
  // Cargar ejercicio de Loops
  load() {
    const container = document.getElementById('app');
    container.innerHTML = `
            <div class="exercise-form">
                <h2>🔄 Ejercicio: Loops (Bucles)</h2>
                
                <div class="instructions">
                    <h3>📋 Qué debes implementar:</h3>
                    <p>Completa el controller <code>loopsController.js</code> para crear diferentes tipos de bucles con dificultad incremental.</p>
                    
                    <h4>🎯 Ejercicios por implementar:</h4>
                    <div class="examples">
                        <div class="example">
                            <strong>Ejercicio 1 - Suma básica (1 hasta N):</strong>
                            <pre>Input:  { "type": "suma", "n": 5 }
Proceso: 1 + 2 + 3 + 4 + 5 = 15
Output: { "result": 15, "process": "1+2+3+4+5" }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 2 - Tabla de multiplicar:</strong>
                            <pre>Input:  { "numero": 3, "hasta": 5 }
Proceso: 3×1, 3×2, 3×3, 3×4, 3×5
Output: { "result": "3x1=3, 3x2=6, 3x3=9, 3x4=12, 3x5=15" }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 3 - Contar números pares:</strong>
                            <pre>Input:  { "desde": 1, "hasta": 10 }
Proceso: revisar 1,2,3,4,5,6,7,8,9,10 y contar pares
Output: { "result": 5, "pares": "2, 4, 6, 8, 10" }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 4 - Factorial:</strong>
                            <pre>Input:  { "type": "factorial", "n": 4 }
Proceso: 4! = 4 × 3 × 2 × 1 = 24
Output: { "result": 24, "process": "4×3×2×1" }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 5 - Potencia (sin Math.pow):</strong>
                            <pre>Input:  { "type": "potencia", "base": 2, "exponente": 4 }
Proceso: 2^4 = 2 × 2 × 2 × 2 = 16
Output: { "result": 16, "process": "2×2×2×2" }</pre>
                        </div>
                    </div>
                    
                    <h4>⚠️ Validaciones necesarias:</h4>
                    <ul>
                        <li>Números deben ser enteros positivos</li>
                        <li>Para factorial: n debe ser ≤ 15 (evitar números muy grandes)</li>
                        <li>Para potencia: exponente ≤ 10</li>
                        <li>Para rangos: "desde" debe ser ≤ "hasta"</li>
                    </ul>
                </div>
                
                <h4>🧪 Prueba tu implementación:</h4>
                <form id="loops-form">
                    <div class="form-group">
                        <label for="loop-type">Tipo de ejercicio:</label>
                        <select id="loop-type" name="type" required onchange="LoopsExercise.updateForm()">
                            <option value="">Selecciona un ejercicio...</option>
                            <option value="suma">1. Suma 1 hasta N</option>
                            <option value="tabla">2. Tabla de multiplicar</option>
                            <option value="pares">3. Contar números pares</option>
                            <option value="factorial">4. Factorial</option>
                            <option value="potencia">5. Potencia</option>
                        </select>
                    </div>
                    
                    <div id="dynamic-inputs"></div>
                    
                    <button type="submit" class="btn">Ejecutar Bucle</button>
                </form>
                
                <div id="loops-result"></div>
            </div>
        `;

    // Agregar event listener al formulario
    document.getElementById('loops-form').addEventListener('submit', this.handleSubmit);
  },

  // Actualizar formulario según el tipo seleccionado
  updateForm() {
    const type = document.getElementById('loop-type').value;
    const container = document.getElementById('dynamic-inputs');

    let inputsHTML = '';

    switch (type) {
      case 'suma':
        inputsHTML = `
          <div class="form-group">
            <label for="n">Número N (sumar desde 1 hasta N):</label>
            <input type="number" id="n" name="n" min="1" max="1000" required placeholder="Ej: 5">
          </div>
        `;
        break;

      case 'tabla':
        inputsHTML = `
          <div class="form-group">
            <label for="numero">Número para la tabla:</label>
            <input type="number" id="numero" name="numero" min="1" max="20" required placeholder="Ej: 3">
          </div>
          <div class="form-group">
            <label for="hasta">Multiplicar hasta:</label>
            <input type="number" id="hasta" name="hasta" min="1" max="20" required placeholder="Ej: 10">
          </div>
        `;
        break;

      case 'pares':
        inputsHTML = `
          <div class="form-group">
            <label for="desde">Desde:</label>
            <input type="number" id="desde" name="desde" min="1" max="100" required placeholder="Ej: 1">
          </div>
          <div class="form-group">
            <label for="hasta">Hasta:</label>
            <input type="number" id="hasta" name="hasta" min="1" max="100" required placeholder="Ej: 10">
          </div>
        `;
        break;

      case 'factorial':
        inputsHTML = `
          <div class="form-group">
            <label for="n">Número N (calcular N!):</label>
            <input type="number" id="n" name="n" min="0" max="15" required placeholder="Ej: 4">
          </div>
        `;
        break;

      case 'potencia':
        inputsHTML = `
          <div class="form-group">
            <label for="base">Base:</label>
            <input type="number" id="base" name="base" min="1" max="20" required placeholder="Ej: 2">
          </div>
          <div class="form-group">
            <label for="exponente">Exponente:</label>
            <input type="number" id="exponente" name="exponente" min="0" max="10" required placeholder="Ej: 4">
          </div>
        `;
        break;
    }

    container.innerHTML = inputsHTML;
  },

  // Manejar envío del formulario
  async handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const type = formData.get('type');
    const data = {};

    // Convertir FormData a objeto (sin incluir el tipo)
    for (let [key, value] of formData.entries()) {
      if (key !== 'type') {
        data[key] = parseFloat(value);
      }
    }

    try {
      // Llamar a la ruta específica según el tipo
      const response = await fetch(`/api/loops/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      LoopsExercise.displayResult(result, response.ok);

    } catch (error) {
      LoopsExercise.displayResult({ error: 'Error de conexión' }, false);
    }
  },

  // Mostrar resultado
  displayResult(result, isSuccess) {
    const container = document.getElementById('loops-result');
    const type = document.getElementById('loop-type').value;

    if (isSuccess && result) {
      // Validar estructura de respuesta según el tipo de ejercicio
      const validation = this.validateResponse(result, type);

      if (!validation.isValid) {
        container.innerHTML = `
          <div class="result error">
            <strong>❌ Error en la respuesta:</strong><br>
            ${validation.errors.join('<br>')}
            <br><br>
            <strong>Estructura esperada:</strong><br>
            <code>${validation.expectedStructure}</code>
          </div>
        `;
        return;
      }

      let resultHTML = `<div class="result success">`;

      // Mostrar resultado principal
      if (result.result !== undefined) {
        if (Array.isArray(result.result)) {
          resultHTML += `<strong>✅ Resultado:</strong> [${result.result.join(', ')}]<br>`;
        } else {
          resultHTML += `<strong>✅ Resultado:</strong> ${result.result}<br>`;
        }
      }

      // Mostrar datos adicionales específicos por ejercicio
      switch (type) {
        case 'suma':
          if (result.process) {
            resultHTML += `<strong>Proceso:</strong> ${result.process}<br>`;
          }
          if (result.n !== undefined) {
            resultHTML += `<strong>N:</strong> ${result.n}<br>`;
          }
          if (result.formula) {
            resultHTML += `<strong>Fórmula:</strong> ${result.formula}<br>`;
          }
          break;

        case 'tabla':
          if (result.tabla) {
            resultHTML += `<strong>Tabla:</strong> ${result.tabla}<br>`;
          }
          break;

        case 'pares':
          if (result.pares) {
            resultHTML += `<strong>Números pares:</strong> ${result.pares}<br>`;
          }
          break;

        case 'factorial':
          if (result.process) {
            resultHTML += `<strong>Proceso:</strong> ${result.process}<br>`;
          }
          break;

        case 'potencia':
          if (result.process) {
            resultHTML += `<strong>Proceso:</strong> ${result.process}<br>`;
          }
          break;
      }

      resultHTML += `</div>`;
      container.innerHTML = resultHTML;

    } else if (result && result.message) {
      container.innerHTML = `
        <div class="result error">
          <strong>⚠️ Pendiente:</strong> ${result.message}
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="result error">
          <strong>❌ Error:</strong> ${result && result.error ? result.error : 'Algo salió mal'}
        </div>
      `;
    }
  },

  // Validar estructura de respuesta según el ejercicio
  validateResponse(result, type) {
    var errors = [];
    var expectedStructure = '';

    switch (type) {
      case 'suma':
        expectedStructure = '{ result: number, process: string, n: number, formula: string }';
        if (result.result === undefined) errors.push('Falta el campo "result"');
        if (!result.process) errors.push('Falta el campo "process"');
        if (result.n === undefined) errors.push('Falta el campo "n"');
        if (!result.formula) errors.push('Falta el campo "formula"');
        break;

      case 'tabla':
        expectedStructure = '{ result: string, tabla: string }';
        if (!result.result) errors.push('Falta el campo "result"');
        if (!result.tabla) errors.push('Falta el campo "tabla"');
        break;

      case 'pares':
        expectedStructure = '{ result: number, pares: string }';
        if (result.result === undefined) errors.push('Falta el campo "result"');
        if (!result.pares) errors.push('Falta el campo "pares"');
        break;

      case 'factorial':
        expectedStructure = '{ result: number, process: string }';
        if (result.result === undefined) errors.push('Falta el campo "result"');
        if (!result.process) errors.push('Falta el campo "process"');
        break;

      case 'potencia':
        expectedStructure = '{ result: number, process: string }';
        if (result.result === undefined) errors.push('Falta el campo "result"');
        if (!result.process) errors.push('Falta el campo "process"');
        break;
    }

    return {
      isValid: errors.length === 0,
      errors: errors,
      expectedStructure: expectedStructure
    };
  }
}; 