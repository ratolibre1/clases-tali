// Módulo para ejercicios de Arrays
const ArraysExercise = {
  // Cargar ejercicio de Arrays
  load() {
    const container = document.getElementById('app');
    container.innerHTML = `
            <div class="exercise-form">
                <h2>📊 Ejercicio: Arrays (Arreglos)</h2>
                
                <div class="instructions">
                    <h3>📋 Qué debes implementar:</h3>
                    <p>Completa el controller <code>arraysController.js</code> para trabajar con arrays de datos.</p>
                    
                    <h4>🎯 Ejercicios por implementar:</h4>
                    <div class="examples">
                        <div class="example">
                            <strong>Ejercicio 1 - Filtrar estudiantes por edad:</strong>
                            <pre>Input:  { "minAge": 18 }
Output: { "filtered": [...], "count": 3, "averageGrade": 88.33, "minAge": 18, "totalStudents": 5 }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 2 - Buscar estudiante por nombre:</strong>
                            <pre>Input:  { "nombre": "Carlos" }
Output: { "found": true, "student": {...}, "position": 1 }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 3 - Ordenar por notas (descendente):</strong>
                            <pre>Input:  { "limite": 3 }
Output: { "sorted": [{...}, {...}, {...}], "podio": ["Laura", "Carlos", "Pedro"] }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 4 - Agregar nuevo estudiante:</strong>
                            <pre>Input:  { "student": { "name": "José", "age": 19, "grade": 90 } }
Output: { "success": true, "newTotal": 6, "newAverage": 88.5, "newStudent": {...} }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 5 - Eliminar estudiante por posición:</strong>
                            <pre>Input:  { "position": 2 }
Output: { "success": true, "removed": {...}, "newTotal": 4, "newAverage": 87.25 }</pre>
                        </div>
                    </div>
                    
                    <h4>📋 Datos base del curso:</h4>
                    <pre>var students = [
  { name: "Ana", age: 17, grade: 85 },
  { name: "Carlos", age: 19, grade: 92 },
  { name: "María", age: 18, grade: 78 },
  { name: "Pedro", age: 16, grade: 88 },
  { name: "Laura", age: 20, grade: 95 }
];</pre>
                    
                    <h4>⚠️ Métodos de array a usar:</h4>
                    <ul>
                        <li><strong>Filtrar:</strong> .filter(), .length, .reduce() para promedios</li>
                        <li><strong>Buscar:</strong> .find(), bucle for para obtener posición</li>
                        <li><strong>Ordenar:</strong> .sort() con función comparadora, .slice() para límite</li>
                        <li><strong>Agregar:</strong> .push(), recalcular estadísticas</li>
                        <li><strong>Eliminar:</strong> .splice(), validar posición, recalcular</li>
                    </ul>
                </div>
                
                <h4>🧪 Prueba tu implementación:</h4>
                <form id="arrays-form">
                    <div class="form-group">
                        <label for="array-type">Tipo de ejercicio:</label>
                        <select id="array-type" name="type" required onchange="ArraysExercise.updateForm()">
                            <option value="">Selecciona un ejercicio...</option>
                            <option value="filtrar">1. Filtrar por edad</option>
                            <option value="buscar">2. Buscar estudiante</option>
                            <option value="ordenar">3. Ordenar por notas</option>
                            <option value="agregar">4. Agregar estudiante</option>
                            <option value="eliminar">5. Eliminar estudiante</option>
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
            <label for="minAge">Edad mínima:</label>
            <input type="number" id="minAge" name="minAge" min="0" max="100" required placeholder="Ej: 18">
          </div>
        `;
        break;

      case 'buscar':
        inputsHTML = `
          <div class="form-group">
            <label for="nombre">Nombre del estudiante:</label>
            <select id="nombre" name="nombre" required>
              <option value="">Selecciona estudiante...</option>
              <option value="Ana">Ana</option>
              <option value="Carlos">Carlos</option>
              <option value="María">María</option>
              <option value="Pedro">Pedro</option>
              <option value="Laura">Laura</option>
            </select>
          </div>
        `;
        break;

      case 'ordenar':
        inputsHTML = `
          <div class="form-group">
            <label for="limite">Cantidad de estudiantes en el ranking:</label>
            <input type="number" id="limite" name="limite" min="1" max="5" required placeholder="Ej: 3">
          </div>
        `;
        break;

      case 'agregar':
        inputsHTML = `
          <div class="form-group">
            <label for="studentName">Nombre:</label>
            <input type="text" id="studentName" name="studentName" required placeholder="Ej: José">
          </div>
          <div class="form-group">
            <label for="studentAge">Edad:</label>
            <input type="number" id="studentAge" name="studentAge" min="16" max="25" required placeholder="Ej: 19">
          </div>
          <div class="form-group">
            <label for="studentGrade">Nota:</label>
            <input type="number" id="studentGrade" name="studentGrade" min="0" max="100" required placeholder="Ej: 90">
          </div>
        `;
        break;

      case 'eliminar':
        inputsHTML = `
          <div class="form-group">
            <label for="position">Posición a eliminar (1-5):</label>
            <select id="position" name="position" required>
              <option value="">Selecciona posición...</option>
              <option value="1">1 - Ana (17 años, nota: 85)</option>
              <option value="2">2 - Carlos (19 años, nota: 92)</option>
              <option value="3">3 - María (18 años, nota: 78)</option>
              <option value="4">4 - Pedro (16 años, nota: 88)</option>
              <option value="5">5 - Laura (20 años, nota: 95)</option>
            </select>
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
        if (key === 'nombre' || key === 'studentName') {
          data[key] = value;
        } else {
          data[key] = parseFloat(value);
        }
      }
    }

    // Para el caso de agregar estudiante, crear el objeto student
    if (type === 'agregar') {
      data.student = {
        name: data.studentName,
        age: data.studentAge,
        grade: data.studentGrade
      };
      // Limpiar las propiedades individuales
      delete data.studentName;
      delete data.studentAge;
      delete data.studentGrade;
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
      ArraysExercise.displayResult(result, response.ok);

    } catch (error) {
      ArraysExercise.displayResult({ error: 'Error de conexión' }, false);
    }
  },

  // Mostrar resultado
  displayResult(result, isSuccess) {
    const container = document.getElementById('arrays-result');
    const type = document.getElementById('array-type').value;

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

      // Mostrar datos específicos por ejercicio
      switch (type) {
        case 'filtrar':
          resultHTML += `<strong>✅ Estudiantes filtrados:</strong><br>`;
          if (result.filtered && result.filtered.length > 0) {
            result.filtered.forEach(student => {
              resultHTML += `• ${student.name} (${student.age} años, nota: ${student.grade})<br>`;
            });
            resultHTML += `<strong>Total encontrados:</strong> ${result.count}<br>`;
            if (result.averageGrade) {
              resultHTML += `<strong>Promedio de notas:</strong> ${result.averageGrade}<br>`;
            }
            resultHTML += `<strong>Edad mínima:</strong> ${result.minAge} años<br>`;
            resultHTML += `<strong>Total estudiantes:</strong> ${result.totalStudents}<br>`;
          } else {
            resultHTML += `<strong>No se encontraron estudiantes con esa edad mínima</strong><br>`;
          }
          break;

        case 'buscar':
          if (result.found) {
            resultHTML += `<strong>✅ Estudiante encontrado:</strong><br>`;
            resultHTML += `• Nombre: ${result.student.name}<br>`;
            resultHTML += `• Edad: ${result.student.age} años<br>`;
            resultHTML += `• Nota: ${result.student.grade}<br>`;
            resultHTML += `• Posición en la lista: ${result.position + 1}<br>`;
          } else {
            resultHTML += `<strong>❌ Estudiante no encontrado</strong><br>`;
          }
          break;

        case 'ordenar':
          resultHTML += `<strong>🏆 Ranking de estudiantes:</strong><br>`;
          if (result.sorted && result.sorted.length > 0) {
            result.sorted.forEach((student, index) => {
              const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
              resultHTML += `${medal} ${student.name} - Nota: ${student.grade}<br>`;
            });
            if (result.podio && result.podio.length > 0) {
              resultHTML += `<strong>Podio:</strong> ${result.podio.join(', ')}<br>`;
            }
          }
          break;

        case 'agregar':
          if (result.success) {
            resultHTML += `<strong>✅ Estudiante agregado exitosamente!</strong><br>`;
            resultHTML += `• Nuevo total: ${result.newTotal} estudiantes<br>`;
            resultHTML += `• Nuevo promedio: ${result.newAverage}<br>`;
            if (result.newStudent) {
              resultHTML += `• Estudiante agregado: ${result.newStudent.name}<br>`;
            }
          } else {
            resultHTML += `<strong>❌ Error al agregar estudiante</strong><br>`;
          }
          break;

        case 'eliminar':
          if (result.success) {
            resultHTML += `<strong>✅ Estudiante eliminado exitosamente!</strong><br>`;
            if (result.removed) {
              resultHTML += `• Estudiante eliminado: ${result.removed.name}<br>`;
            }
            resultHTML += `• Nuevo total: ${result.newTotal} estudiantes<br>`;
            resultHTML += `• Nuevo promedio: ${result.newAverage}<br>`;
          } else {
            resultHTML += `<strong>❌ Error al eliminar estudiante</strong><br>`;
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
      case 'filtrar':
        expectedStructure = '{ filtered: array, count: number, averageGrade: number, minAge: number, totalStudents: number }';
        if (!Array.isArray(result.filtered)) errors.push('El campo "filtered" debe ser un array');
        if (result.count === undefined) errors.push('Falta el campo "count"');
        if (result.minAge === undefined) errors.push('Falta el campo "minAge"');
        if (result.totalStudents === undefined) errors.push('Falta el campo "totalStudents"');
        break;

      case 'buscar':
        expectedStructure = '{ found: boolean, student: object, position: number }';
        if (result.found === undefined) errors.push('Falta el campo "found"');
        if (result.found && !result.student) errors.push('Falta el campo "student" para búsqueda exitosa');
        if (result.found && result.position === undefined) errors.push('Falta el campo "position" para búsqueda exitosa');
        break;

      case 'ordenar':
        expectedStructure = '{ sorted: array, podio: array }';
        if (!Array.isArray(result.sorted)) errors.push('El campo "sorted" debe ser un array');
        if (!Array.isArray(result.podio)) errors.push('El campo "podio" debe ser un array');
        break;

      case 'agregar':
        expectedStructure = '{ success: boolean, newTotal: number, newAverage: number, newStudent: object }';
        if (result.success === undefined) errors.push('Falta el campo "success"');
        if (result.success && result.newTotal === undefined) errors.push('Falta el campo "newTotal"');
        if (result.success && result.newAverage === undefined) errors.push('Falta el campo "newAverage"');
        if (result.success && !result.newStudent) errors.push('Falta el campo "newStudent"');
        break;

      case 'eliminar':
        expectedStructure = '{ success: boolean, removed: object, newTotal: number, newAverage: number }';
        if (result.success === undefined) errors.push('Falta el campo "success"');
        if (result.success && !result.removed) errors.push('Falta el campo "removed"');
        if (result.success && result.newTotal === undefined) errors.push('Falta el campo "newTotal"');
        if (result.success && result.newAverage === undefined) errors.push('Falta el campo "newAverage"');
        break;
    }

    return {
      isValid: errors.length === 0,
      errors: errors,
      expectedStructure: expectedStructure
    };
  }
}; 