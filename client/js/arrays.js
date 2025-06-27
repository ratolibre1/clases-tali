// Módulo para ejercicios de Arrays
const ArraysModule = {
  // Cargar ejercicio de Arrays
  load() {
    const container = document.getElementById('app');
    container.innerHTML = `
            <div class="exercise-form">
                <h2>📊 Ejercicio: Arrays (Arreglos)</h2>
                
                <div class="instructions">
                    <h3>📋 Qué debes implementar:</h3>
                    <p>Completa el controller <code>arraysController.js</code> para manipular arrays con tipos básicos: números, strings y booleanos.</p>
                    
                    <h4>🎯 Ejercicios por implementar:</h4>
                    <div class="examples">
                        <div class="example">
                            <strong>Ejercicio 1 - Filtrar elementos:</strong>
                            <pre>Input:  { "type": "pares" }
Output: { "arrayOriginal": [1,2,3,4,5,6,7,8,9,10], "resultado": [2,4,6,8,10] }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 2 - Buscar elementos:</strong>
                            <pre>Input:  { "type": "numero", "valor": 5 }
Output: { "encontrado": true, "indice": 1, "elemento": 5 }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 3 - Ordenar arrays:</strong>
                            <pre>Input:  { "type": "numeros-asc" }
Output: { "arrayOriginal": [3,1,4,1,5,9,2,6], "resultado": [1,1,2,3,4,5,6,9] }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 4 - Agregar elementos:</strong>
                            <pre>Input:  { "method": "push", "elemento": 10 }
Output: { "arrayOriginal": [1,2,3], "resultado": [1,2,3,10], "operacion": "push" }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 5 - Eliminar elementos:</strong>
                            <pre>Input:  { "method": "pop" }
Output: { "arrayOriginal": [1,2,3,4,5], "resultado": [1,2,3,4], "eliminado": 5 }</pre>
                        </div>
                    </div>
                    
                    <h4>⚠️ Especificaciones detalladas:</h4>
                    <ul>
                        <li><strong>Filtrar:</strong> Números pares, mayores a X, palabras que contienen letra</li>
                        <li><strong>Buscar:</strong> find(), indexOf(), includes() en arrays de números y strings</li>
                        <li><strong>Ordenar:</strong> sort() ascendente/descendente, alfabético, por longitud</li>
                        <li><strong>Agregar:</strong> push(), unshift(), splice() para insertar elementos</li>
                        <li><strong>Eliminar:</strong> pop(), shift(), splice(), filter() para remover elementos</li>
                    </ul>
                    
                    <h4>📚 Arrays de ejemplo:</h4>
                    <ul>
                        <li><strong>Números:</strong> [1,2,3,4,5,6,7,8,9,10], [5,12,8,130,44,3,25], [3,1,4,1,5,9,2,6]</li>
                        <li><strong>Strings:</strong> ['casa','perro','gato','mesa','silla','ventana'], ['zebra','apple','banana']</li>
                        <li><strong>Mixtos:</strong> [1,5,3,8,2], ['hola','mundo','javascript']</li>
                    </ul>
                </div>
                
                <h4>🧪 Prueba tu implementación:</h4>
                <form id="arrays-form">
                    <div class="form-group">
                        <label for="array-type">Tipo de ejercicio:</label>
                        <select id="array-type" name="type" required onchange="ArraysModule.updateForm()">
                            <option value="">Selecciona un ejercicio...</option>
                            <option value="filtrar">1. Filtrar elementos</option>
                            <option value="buscar">2. Buscar elementos</option>
                            <option value="ordenar">3. Ordenar array</option>
                            <option value="agregar">4. Agregar elementos</option>
                            <option value="eliminar">5. Eliminar elementos</option>
                        </select>
                    </div>
                    
                    <div id="dynamic-inputs"></div>
                    
                    <button type="submit" class="btn">Procesar Array</button>
                </form>
                
                <div id="arrays-result"></div>
            </div>
        `;

    // Agregar event listener al formulario
    document.getElementById('arrays-form').addEventListener('submit', this.handleSubmit);
  },

  // Actualizar formulario según el tipo seleccionado
  updateForm() {
    const type = document.getElementById('array-type').value;
    const container = document.getElementById('dynamic-inputs');

    let inputsHTML = '';

    switch (type) {
      case 'filtrar':
        inputsHTML = `
          <div class="form-group">
            <label for="filter-type">Tipo de filtro:</label>
            <select id="filter-type" name="filter-type" required onchange="ArraysModule.updateFilterInputs()">
              <option value="">Selecciona un filtro...</option>
              <option value="pares">Números pares de [1,2,3,4,5,6,7,8,9,10]</option>
              <option value="mayores">Números mayores a un valor</option>
              <option value="palabras">Palabras que contienen una letra</option>
            </select>
          </div>
          <div id="filter-inputs"></div>
        `;
        break;

      case 'buscar':
        inputsHTML = `
          <div class="form-group">
            <label for="search-type">Tipo de búsqueda:</label>
            <select id="search-type" name="search-type" required>
              <option value="">Selecciona un tipo...</option>
              <option value="numero">Buscar número específico</option>
              <option value="palabra">Buscar palabra en array</option>
              <option value="indice">Encontrar índice de elemento</option>
            </select>
          </div>
          <div class="form-group">
            <label for="valor">Valor a buscar:</label>
            <input type="text" id="valor" name="valor" required placeholder="Ej: 5 o 'hola'">
          </div>
        `;
        break;

      case 'ordenar':
        inputsHTML = `
          <div class="form-group">
            <label for="sort-type">Tipo de ordenamiento:</label>
            <select id="sort-type" name="sort-type" required>
              <option value="">Selecciona un tipo...</option>
              <option value="numeros-asc">Números ascendente</option>
              <option value="numeros-desc">Números descendente</option>
              <option value="palabras-alfa">Palabras alfabéticamente</option>
              <option value="palabras-longitud">Palabras por longitud</option>
            </select>
          </div>
        `;
        break;

      case 'agregar':
        inputsHTML = `
          <div class="form-group">
            <label for="add-method">Método de adición:</label>
            <select id="add-method" name="add-method" required>
              <option value="">Selecciona un método...</option>
              <option value="push">Push - Agregar al final</option>
              <option value="unshift">Unshift - Agregar al inicio</option>
              <option value="splice">Splice - Insertar en posición</option>
              <option value="concat">Concat - Concatenar arrays</option>
            </select>
          </div>
          <div class="form-group">
            <label for="elemento">Elemento a agregar:</label>
            <input type="text" id="elemento" name="elemento" required placeholder="Ej: 42 o 'hola'">
          </div>
          <div class="form-group" id="position-group" style="display: none;">
            <label for="posicion">Posición (para splice):</label>
            <input type="number" id="posicion" name="posicion" min="0" placeholder="Ej: 2">
          </div>
        `;
        break;

      case 'eliminar':
        inputsHTML = `
          <div class="form-group">
            <label for="remove-method">Método de eliminación:</label>
            <select id="remove-method" name="remove-method" required>
              <option value="">Selecciona un método...</option>
              <option value="pop">Pop - Eliminar del final</option>
              <option value="shift">Shift - Eliminar del inicio</option>
              <option value="splice">Splice - Eliminar por índice</option>
              <option value="filter">Filter - Eliminar por valor</option>
            </select>
          </div>
          <div class="form-group" id="value-group" style="display: none;">
            <label for="valor-eliminar">Valor a eliminar:</label>
            <input type="text" id="valor-eliminar" name="valor-eliminar" placeholder="Ej: 3 o 'gato'">
          </div>
          <div class="form-group" id="index-group" style="display: none;">
            <label for="indice">Índice a eliminar:</label>
            <input type="number" id="indice" name="indice" min="0" placeholder="Ej: 2">
          </div>
        `;
        break;
    }

    container.innerHTML = inputsHTML;

    // Agregar event listeners adicionales
    this.addExtraListeners();
  },

  // Event listeners adicionales para campos dinámicos
  addExtraListeners() {
    const addMethod = document.getElementById('add-method');
    const removeMethod = document.getElementById('remove-method');

    if (addMethod) {
      addMethod.addEventListener('change', function () {
        const positionGroup = document.getElementById('position-group');
        if (this.value === 'splice') {
          positionGroup.style.display = 'block';
        } else {
          positionGroup.style.display = 'none';
        }
      });
    }

    if (removeMethod) {
      removeMethod.addEventListener('change', function () {
        const valueGroup = document.getElementById('value-group');
        const indexGroup = document.getElementById('index-group');

        if (this.value === 'filter') {
          valueGroup.style.display = 'block';
          indexGroup.style.display = 'none';
        } else if (this.value === 'splice') {
          valueGroup.style.display = 'none';
          indexGroup.style.display = 'block';
        } else {
          valueGroup.style.display = 'none';
          indexGroup.style.display = 'none';
        }
      });
    }
  },

  // Actualizar inputs de filtro
  updateFilterInputs() {
    const filterType = document.getElementById('filter-type').value;
    const container = document.getElementById('filter-inputs');

    switch (filterType) {
      case 'mayores':
        container.innerHTML = `
          <div class="form-group">
            <label for="limite">Número límite:</label>
            <input type="number" id="limite" name="limite" required placeholder="Ej: 10" min="0" max="200">
            <small>Array: [5, 12, 8, 130, 44, 3, 25]</small>
          </div>
        `;
        break;

      case 'palabras':
        container.innerHTML = `
          <div class="form-group">
            <label for="letra">Letra a buscar:</label>
            <input type="text" id="letra" name="letra" required placeholder="Ej: a" maxlength="1">
            <small>Array: ['casa', 'perro', 'gato', 'mesa', 'silla', 'ventana']</small>
          </div>
        `;
        break;

      case 'pares':
        container.innerHTML = `
          <div class="form-group">
            <small>Se filtrarán los números pares del array [1,2,3,4,5,6,7,8,9,10]</small>
          </div>
        `;
        break;

      default:
        container.innerHTML = '';
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
        // Convertir números cuando sea apropiado
        if (['limite', 'posicion', 'indice'].includes(key)) {
          data[key] = parseInt(value);
        } else {
          data[key] = value;
        }
      }
    }

    // Preparar datos específicos por tipo de ejercicio
    if (type === 'filtrar') {
      data.type = data['filter-type'];
      if (data.type === 'mayores') {
        data.data = data.limite;
      } else if (data.type === 'palabras') {
        data.data = data.letra;
      }
      // Limpiar campos no necesarios
      delete data['filter-type'];
      delete data.limite;
      delete data.letra;
    }

    try {
      // Llamar a la ruta específica según el tipo
      const response = await fetch(`/api/arrays/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      ArraysModule.displayResult(result, response.ok);

    } catch (error) {
      ArraysModule.displayResult({ error: 'Error de conexión' }, false);
    }
  },

  // Mostrar resultado
  displayResult(result, isSuccess) {
    const container = document.getElementById('arrays-result');
    const type = document.getElementById('array-type').value;

    if (isSuccess && result.success) {
      container.innerHTML = `
        <div class="result success">
          <h4>✅ ¡Éxito!</h4>
          <p><strong>Array original:</strong> [${result.arrayOriginal.join(', ')}]</p>
          <p><strong>Operación:</strong> ${result.filtro || type}</p>
          ${result.parametro ? `<p><strong>Parámetro:</strong> ${result.parametro}</p>` : ''}
          <p><strong>Resultado:</strong> [${result.resultado.join(', ')}]</p>
          <p><strong>Mensaje:</strong> ${result.mensaje}</p>
        </div>
      `;
    } else if (result.message && result.ejemplos) {
      // Para ejercicios no implementados
      container.innerHTML = `
        <div class="result error">
          <h4>⚠️ Ejercicio Pendiente</h4>
          <p><strong>Estado:</strong> ${result.message}</p>
          <p><strong>Ejemplos a implementar:</strong></p>
          <ul>
            ${result.ejemplos.map(ejemplo => `<li>${ejemplo}</li>`).join('')}
          </ul>
          <p><strong>Instrucciones:</strong> Completa la función correspondiente en <code>server/controllers/arraysController.js</code></p>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="result error">
          <h4>❌ Error</h4>
          <p>${result.error || 'Error desconocido'}</p>
        </div>
      `;
    }
  }
};

// Auto-inicializar si estamos en la página de arrays
if (window.location.pathname === '/arrays' || window.location.hash === '#arrays') {
  ArraysModule.load();
} 