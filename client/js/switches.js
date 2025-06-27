// Módulo para ejercicios de Switches
const SwitchesExercise = {
  // Cargar ejercicio de Switches
  load() {
    const container = document.getElementById('app');
    container.innerHTML = `
            <div class="exercise-form">
                <h2>🔀 Ejercicio: Switch-Case</h2>
                
                <div class="instructions">
                    <h3>📋 Qué debes implementar:</h3>
                    <p>Completa el controller <code>switchesController.js</code> para crear menús y calculadoras usando switch-case.</p>
                    
                    <h4>🎯 Ejercicios por implementar:</h4>
                    <div class="examples">
                        <div class="example">
                            <strong>Ejercicio 1 - Calculadora básica:</strong>
                            <pre>Input:  { "type": "calculadora", "a": 10, "b": 5, "operacion": "suma" }
Output: { "result": 15, "expresion": "10 + 5 = 15" }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 2 - Calificaciones (A-F):</strong>
                            <pre>Input:  { "type": "nota", "puntaje": 85 }
Output: { "letra": "B", "descripcion": "Bueno", "aprobado": true }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 3 - Día de la semana:</strong>
                            <pre>Input:  { "type": "dia", "numero": 3 }
Output: { "dia": "Miércoles", "tipo": "día laboral", "esFinDeSemana": false }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 4 - Estaciones del año:</strong>
                            <pre>Input:  { "type": "estacion", "mes": 12 }
Output: { "estacion": "Verano", "descripcion": "Calor y vacaciones", "esInvierno": false }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 5 - Menú de restaurante:</strong>
                            <pre>Input:  { "type": "menu", "categoria": "platos", "opcion": 2 }
Output: { "item": "Pollo Grillado", "precio": 8500, "categoria": "Platos Principales" }</pre>
                        </div>
                    </div>
                    
                    <h4>⚠️ Especificaciones detalladas:</h4>
                    <ul>
                        <li><strong>Calculadora:</strong> suma, resta, multiplicacion, division (maneja división por 0)</li>
                        <li><strong>Notas:</strong> A(90-100), B(80-89), C(70-79), D(60-69), F(<60)</li>
                        <li><strong>Días:</strong> 1=Lunes...7=Domingo, indicar si es fin de semana</li>
                        <li><strong>Estaciones:</strong> DIC-FEB=Verano, MAR-MAY=Otoño, JUN-AGO=Invierno, SEP-NOV=Primavera</li>
                        <li><strong>Menú:</strong> categorías con múltiples opciones y precios</li>
                    </ul>
                </div>
                
                <h4>🧪 Prueba tu implementación:</h4>
                <form id="switches-form">
                    <div class="form-group">
                        <label for="switch-type">Tipo de ejercicio:</label>
                        <select id="switch-type" name="type" required onchange="SwitchesExercise.updateForm()">
                            <option value="">Selecciona un ejercicio...</option>
                            <option value="calculadora">1. Calculadora básica</option>
                            <option value="nota">2. Sistema de calificaciones</option>
                            <option value="dia">3. Días de la semana</option>
                            <option value="estacion">4. Estaciones del año</option>
                            <option value="menu">5. Menú de restaurante</option>
                        </select>
                    </div>
                    
                    <div id="dynamic-inputs"></div>
                    
                    <button type="submit" class="btn">Ejecutar Switch</button>
                </form>
                
                <div id="switches-result"></div>
            </div>
        `;

    // Agregar event listener al formulario
    document.getElementById('switches-form').addEventListener('submit', this.handleSubmit);
  },

  // Actualizar formulario según el tipo seleccionado
  updateForm() {
    const type = document.getElementById('switch-type').value;
    const container = document.getElementById('dynamic-inputs');

    let inputsHTML = '';

    switch (type) {
      case 'calculadora':
        inputsHTML = `
          <div class="form-group">
            <label for="a">Número A:</label>
            <input type="number" id="a" name="a" required placeholder="Ej: 10">
          </div>
          <div class="form-group">
            <label for="b">Número B:</label>
            <input type="number" id="b" name="b" required placeholder="Ej: 5">
          </div>
          <div class="form-group">
            <label for="operacion">Operación:</label>
            <select id="operacion" name="operacion" required>
              <option value="">Selecciona operación...</option>
              <option value="suma">Suma (+)</option>
              <option value="resta">Resta (-)</option>
              <option value="multiplicacion">Multiplicación (×)</option>
              <option value="division">División (÷)</option>
            </select>
          </div>
        `;
        break;

      case 'nota':
        inputsHTML = `
          <div class="form-group">
            <label for="puntaje">Puntaje (0-100):</label>
            <input type="number" id="puntaje" name="puntaje" min="0" max="100" required placeholder="Ej: 85">
          </div>
        `;
        break;

      case 'dia':
        inputsHTML = `
          <div class="form-group">
            <label for="numero">Número del día (1-7):</label>
            <select id="numero" name="numero" required>
              <option value="">Selecciona día...</option>
              <option value="1">1 - Lunes</option>
              <option value="2">2 - Martes</option>
              <option value="3">3 - Miércoles</option>
              <option value="4">4 - Jueves</option>
              <option value="5">5 - Viernes</option>
              <option value="6">6 - Sábado</option>
              <option value="7">7 - Domingo</option>
            </select>
          </div>
        `;
        break;

      case 'estacion':
        inputsHTML = `
          <div class="form-group">
            <label for="mes">Mes (1-12):</label>
            <select id="mes" name="mes" required>
              <option value="">Selecciona mes...</option>
              <option value="1">1 - Enero</option>
              <option value="2">2 - Febrero</option>
              <option value="3">3 - Marzo</option>
              <option value="4">4 - Abril</option>
              <option value="5">5 - Mayo</option>
              <option value="6">6 - Junio</option>
              <option value="7">7 - Julio</option>
              <option value="8">8 - Agosto</option>
              <option value="9">9 - Septiembre</option>
              <option value="10">10 - Octubre</option>
              <option value="11">11 - Noviembre</option>
              <option value="12">12 - Diciembre</option>
            </select>
          </div>
        `;
        break;

      case 'menu':
        inputsHTML = `
          <div class="form-group">
            <label for="categoria">Categoría:</label>
            <select id="categoria" name="categoria" required onchange="SwitchesExercise.updateMenuOptions()">
              <option value="">Selecciona categoría...</option>
              <option value="entradas">Entradas</option>
              <option value="platos">Platos Principales</option>
              <option value="postres">Postres</option>
              <option value="bebidas">Bebidas</option>
            </select>
          </div>
          <div class="form-group">
            <label for="opcion">Opción:</label>
            <select id="opcion" name="opcion" required>
              <option value="">Primero selecciona categoría...</option>
            </select>
          </div>
        `;
        break;
    }

    container.innerHTML = inputsHTML;
  },

  // Actualizar opciones del menú según categoría
  updateMenuOptions() {
    const categoria = document.getElementById('categoria').value;
    const opcionSelect = document.getElementById('opcion');

    const opciones = {
      'entradas': [
        { value: 1, text: '1 - Empanadas (3 unidades)' },
        { value: 2, text: '2 - Tabla de quesos' },
        { value: 3, text: '3 - Sopaipillas con pebre' }
      ],
      'platos': [
        { value: 1, text: '1 - Pastel de choclo' },
        { value: 2, text: '2 - Pollo grillado' },
        { value: 3, text: '3 - Salmón a la plancha' }
      ],
      'postres': [
        { value: 1, text: '1 - Tres leches' },
        { value: 2, text: '2 - Sopaipillas pasadas' },
        { value: 3, text: '3 - Helado de lúcuma' }
      ],
      'bebidas': [
        { value: 1, text: '1 - Pisco sour' },
        { value: 2, text: '2 - Mote con huesillo' },
        { value: 3, text: '3 - Jugo natural' }
      ]
    };

    opcionSelect.innerHTML = '<option value="">Selecciona opción...</option>';

    if (opciones[categoria]) {
      opciones[categoria].forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.text;
        opcionSelect.appendChild(option);
      });
    }
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
        if (key === 'operacion' || key === 'categoria') {
          data[key] = value;
        } else {
          data[key] = parseFloat(value);
        }
      }
    }

    try {
      // Llamar a la ruta específica según el tipo
      const response = await fetch(`/api/switches/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      SwitchesExercise.displayResult(result, response.ok);

    } catch (error) {
      SwitchesExercise.displayResult({ error: 'Error de conexión' }, false);
    }
  },

  // Mostrar resultado
  displayResult(result, isSuccess) {
    const container = document.getElementById('switches-result');
    const type = document.getElementById('switch-type').value;

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
        case 'calculadora':
          if (result.expresion) {
            resultHTML += `<strong>Expresión:</strong> ${result.expresion}<br>`;
          }
          if (result.operacion) {
            resultHTML += `<strong>Operación:</strong> ${result.operacion}<br>`;
          }
          if (result.valores) {
            resultHTML += `<strong>Valores:</strong> A=${result.valores.a}, B=${result.valores.b}<br>`;
          }
          break;

        case 'nota':
          if (result.letra) {
            resultHTML += `<strong>Calificación:</strong> ${result.letra}<br>`;
          }
          if (result.descripcion) {
            resultHTML += `<strong>Descripción:</strong> ${result.descripcion}<br>`;
          }
          if (result.aprobado !== undefined) {
            resultHTML += `<strong>Estado:</strong> ${result.aprobado ? 'Aprobado ✅' : 'Reprobado ❌'}<br>`;
          }
          break;

        case 'dia':
          if (result.dia) {
            resultHTML += `<strong>Día:</strong> ${result.dia}<br>`;
          }
          if (result.tipo) {
            resultHTML += `<strong>Tipo:</strong> ${result.tipo}<br>`;
          }
          if (result.esFinDeSemana !== undefined) {
            resultHTML += `<strong>Fin de semana:</strong> ${result.esFinDeSemana ? 'Sí 🎉' : 'No 💼'}<br>`;
          }
          break;

        case 'estacion':
          if (result.estacion) {
            resultHTML += `<strong>Estación:</strong> ${result.estacion}<br>`;
          }
          if (result.descripcion) {
            resultHTML += `<strong>Descripción:</strong> ${result.descripcion}<br>`;
          }
          break;

        case 'menu':
          if (result.item) {
            resultHTML += `<strong>Item:</strong> ${result.item}<br>`;
          }
          if (result.precio !== undefined) {
            resultHTML += `<strong>Precio:</strong> $${result.precio}<br>`;
          }
          if (result.categoria) {
            resultHTML += `<strong>Categoría:</strong> ${result.categoria}<br>`;
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
      case 'calculadora':
        expectedStructure = '{ result: number, expresion: string, operacion: string, valores: {a: number, b: number} }';
        if (result.result === undefined) errors.push('Falta el campo "result"');
        if (!result.expresion) errors.push('Falta el campo "expresion"');
        if (!result.operacion) errors.push('Falta el campo "operacion"');
        if (!result.valores) errors.push('Falta el campo "valores"');
        break;

      case 'nota':
        expectedStructure = '{ letra: string, descripcion: string, aprobado: boolean }';
        if (!result.letra) errors.push('Falta el campo "letra"');
        if (!result.descripcion) errors.push('Falta el campo "descripcion"');
        if (result.aprobado === undefined) errors.push('Falta el campo "aprobado"');
        break;

      case 'dia':
        expectedStructure = '{ dia: string, tipo: string, esFinDeSemana: boolean }';
        if (!result.dia) errors.push('Falta el campo "dia"');
        if (!result.tipo) errors.push('Falta el campo "tipo"');
        if (result.esFinDeSemana === undefined) errors.push('Falta el campo "esFinDeSemana"');
        break;

      case 'estacion':
        expectedStructure = '{ estacion: string, descripcion: string }';
        if (!result.estacion) errors.push('Falta el campo "estacion"');
        if (!result.descripcion) errors.push('Falta el campo "descripcion"');
        break;

      case 'menu':
        expectedStructure = '{ item: string, precio: number, categoria: string }';
        if (!result.item) errors.push('Falta el campo "item"');
        if (result.precio === undefined) errors.push('Falta el campo "precio"');
        if (!result.categoria) errors.push('Falta el campo "categoria"');
        break;
    }

    return {
      isValid: errors.length === 0,
      errors: errors,
      expectedStructure: expectedStructure
    };
  }
}; 