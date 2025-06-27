// Módulo para ejercicios de Ifs
const IfsExercise = {
  // Cargar ejercicio de Ifs
  load() {
    const container = document.getElementById('app');
    container.innerHTML = `
            <div class="exercise-form">
                <h2>🧮 Ejercicio: Condicionales (If/Else)</h2>
                
                <div class="instructions">
                    <h3>📋 Qué debes implementar:</h3>
                    <p>Completa el controller <code>ifsController.js</code> para diferentes tipos de condicionales con dificultad incremental.</p>
                    
                    <h4>🎯 Ejercicios por implementar:</h4>
                    <div class="examples">
                        <div class="example">
                            <strong>Ejercicio 1 - Comparar dos números:</strong>
                            <pre>Input:  { "a": 10, "b": 5 }
Output: { "result": "a es mayor" }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 2 - Par o Impar:</strong>
                            <pre>Input:  { "numero": 7 }
Output: { "result": "impar", "esPar": false }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 3 - Descuento por edad:</strong>
                            <pre>Input:  { "edad": 65, "precio": 1000 }
Output: { "descuento": 30, "precioFinal": 700, "categoria": "Tercera edad" }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 4 - Login de usuario:</strong>
                            <pre>Input:  { "usuario": "admin", "password": "123" }
Output: { "success": true, "message": "Bienvenido", "role": "administrador" }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 5 - Estado del agua:</strong>
                            <pre>Input:  { "temperatura": 25 }
Output: { "estado": "líquido", "descripcion": "Agua potable", "puedeVivir": true }</pre>
                        </div>
                    </div>
                    
                    <h4>⚠️ Especificaciones detalladas:</h4>
                    <ul>
                        <li><strong>Comparar:</strong> Básico if/else if/else para a > b, a < b, a === b</li>
                        <li><strong>Par/Impar:</strong> Usar operador % y if/else</li>
                        <li><strong>Descuento:</strong> Niños(0-12): 20%, Jóvenes(13-17): 15%, Adultos(18-64): 0%, Tercera edad(65+): 30%</li>
                        <li><strong>Login:</strong> Validar usuarios: admin/123, user/456, guest/789 con roles diferentes</li>
                        <li><strong>Estado agua:</strong> ≤0: sólido, 1-99: líquido, ≥100: gas. Habitable: 15-35°C</li>
                    </ul>
                </div>
                
                <h4>🧪 Prueba tu implementación:</h4>
                <form id="ifs-form">
                    <div class="form-group">
                        <label for="if-type">Tipo de ejercicio:</label>
                        <select id="if-type" name="type" required onchange="IfsExercise.updateForm()">
                            <option value="">Selecciona un ejercicio...</option>
                            <option value="comparar">1. Comparar dos números</option>
                            <option value="par-impar">2. Par o Impar</option>
                            <option value="descuento">3. Descuento por edad</option>
                            <option value="login">4. Login de usuario</option>
                            <option value="estado-agua">5. Estado del agua</option>
                        </select>
                    </div>
                    
                    <div id="dynamic-inputs"></div>
                    
                    <button type="submit" class="btn">Evaluar Condición</button>
                </form>
                
                <div id="ifs-result"></div>
            </div>
        `;

    // Agregar event listener al formulario
    document.getElementById('ifs-form').addEventListener('submit', this.handleSubmit);
  },

  // Actualizar formulario según el tipo seleccionado
  updateForm() {
    const type = document.getElementById('if-type').value;
    const container = document.getElementById('dynamic-inputs');

    let inputsHTML = '';

    switch (type) {
      case 'comparar':
        inputsHTML = `
          <div class="form-group">
            <label for="a">Número A:</label>
            <input type="number" id="a" name="a" required placeholder="Ej: 10">
          </div>
          <div class="form-group">
            <label for="b">Número B:</label>
            <input type="number" id="b" name="b" required placeholder="Ej: 5">
          </div>
        `;
        break;

      case 'par-impar':
        inputsHTML = `
          <div class="form-group">
            <label for="numero">Número a evaluar:</label>
            <input type="number" id="numero" name="numero" required placeholder="Ej: 7">
          </div>
        `;
        break;

      case 'descuento':
        inputsHTML = `
          <div class="form-group">
            <label for="edad">Edad:</label>
            <input type="number" id="edad" name="edad" min="0" max="120" required placeholder="Ej: 65">
          </div>
          <div class="form-group">
            <label for="precio">Precio original:</label>
            <input type="number" id="precio" name="precio" min="0" required placeholder="Ej: 1000">
          </div>
        `;
        break;

      case 'login':
        inputsHTML = `
          <div class="form-group">
            <label for="usuario">Usuario:</label>
            <input type="text" id="usuario" name="usuario" required placeholder="Ej: admin">
            <small>Usuarios válidos: admin, user, guest</small>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required placeholder="Ej: 123">
            <small>Passwords: admin/123, user/456, guest/789</small>
          </div>
        `;
        break;

      case 'estado-agua':
        inputsHTML = `
          <div class="form-group">
            <label for="temperatura">Temperatura (°C):</label>
            <input type="number" id="temperatura" name="temperatura" required placeholder="Ej: 25">
            <small>Rangos: ≤0 sólido, 1-99 líquido, ≥100 gas</small>
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
        if (key === 'usuario' || key === 'password') {
          data[key] = value;
        } else {
          data[key] = parseFloat(value);
        }
      }
    }

    try {
      // Llamar a la ruta específica según el tipo
      const response = await fetch(`/api/ifs/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      IfsExercise.displayResult(result, response.ok);

    } catch (error) {
      IfsExercise.displayResult({ error: 'Error de conexión' }, false);
    }
  },

  // Mostrar resultado
  displayResult(result, isSuccess) {
    const container = document.getElementById('ifs-result');
    const type = document.getElementById('if-type').value;

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

      // Mostrar diferentes campos según el tipo de resultado
      if (result.result !== undefined) {
        resultHTML += `<strong>✅ Resultado:</strong> ${result.result}<br>`;
      }

      // Mostrar datos adicionales específicos por ejercicio
      switch (type) {
        case 'comparar':
          if (result.valores) {
            resultHTML += `<strong>Valores:</strong> A=${result.valores.a}, B=${result.valores.b}<br>`;
          }
          if (result.operacion) {
            resultHTML += `<strong>Operación:</strong> ${result.operacion}<br>`;
          }
          break;

        case 'par-impar':
          if (result.esPar !== undefined) {
            resultHTML += `<strong>Es par:</strong> ${result.esPar ? 'Sí' : 'No'}<br>`;
          }
          if (result.numero !== undefined) {
            resultHTML += `<strong>Número evaluado:</strong> ${result.numero}<br>`;
          }
          break;

        case 'descuento':
          if (result.descuento !== undefined) {
            resultHTML += `<strong>Descuento:</strong> ${result.descuento}%<br>`;
          }
          if (result.precioFinal !== undefined) {
            resultHTML += `<strong>Precio final:</strong> $${result.precioFinal}<br>`;
          }
          if (result.categoria) {
            resultHTML += `<strong>Categoría:</strong> ${result.categoria}<br>`;
          }
          break;

        case 'login':
          if (result.success !== undefined) {
            resultHTML += `<strong>Login:</strong> ${result.success ? 'Exitoso ✅' : 'Fallido ❌'}<br>`;
          }
          if (result.message) {
            resultHTML += `<strong>Mensaje:</strong> ${result.message}<br>`;
          }
          if (result.role) {
            resultHTML += `<strong>Rol:</strong> ${result.role}<br>`;
          }
          break;

        case 'estado-agua':
          if (result.estado) {
            resultHTML += `<strong>Estado:</strong> ${result.estado}<br>`;
          }
          if (result.descripcion) {
            resultHTML += `<strong>Descripción:</strong> ${result.descripcion}<br>`;
          }
          if (result.puedeVivir !== undefined) {
            resultHTML += `<strong>Habitable:</strong> ${result.puedeVivir ? 'Sí 🌊' : 'No ❄️🔥'}<br>`;
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
      case 'comparar':
        expectedStructure = '{ result: string, valores: {a: number, b: number}, operacion: string }';
        if (result.result === undefined) errors.push('Falta el campo "result"');
        if (!result.valores) errors.push('Falta el campo "valores"');
        if (!result.operacion) errors.push('Falta el campo "operacion"');
        break;

      case 'par-impar':
        expectedStructure = '{ result: string, esPar: boolean, numero: number }';
        if (result.result === undefined) errors.push('Falta el campo "result"');
        if (result.esPar === undefined) errors.push('Falta el campo "esPar"');
        if (result.numero === undefined) errors.push('Falta el campo "numero"');
        break;

      case 'descuento':
        expectedStructure = '{ descuento: number, precioFinal: number, categoria: string }';
        if (result.descuento === undefined) errors.push('Falta el campo "descuento"');
        if (result.precioFinal === undefined) errors.push('Falta el campo "precioFinal"');
        if (!result.categoria) errors.push('Falta el campo "categoria"');
        break;

      case 'login':
        expectedStructure = '{ success: boolean, message: string, role: string }';
        if (result.success === undefined) errors.push('Falta el campo "success"');
        if (!result.message) errors.push('Falta el campo "message"');
        if (result.success && !result.role) errors.push('Falta el campo "role" para login exitoso');
        break;

      case 'estado-agua':
        expectedStructure = '{ estado: string, descripcion: string, puedeVivir: boolean }';
        if (!result.estado) errors.push('Falta el campo "estado"');
        if (!result.descripcion) errors.push('Falta el campo "descripcion"');
        if (result.puedeVivir === undefined) errors.push('Falta el campo "puedeVivir"');
        break;
    }

    return {
      isValid: errors.length === 0,
      errors: errors,
      expectedStructure: expectedStructure
    };
  }
}; 