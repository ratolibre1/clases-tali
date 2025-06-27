// Módulo para ejercicios de Objetos
const ObjetosExercise = {
  // Cargar ejercicio de Objetos
  load() {
    const container = document.getElementById('app');
    container.innerHTML = `
            <div class="exercise-form">
                <h2>🏗️ Ejercicio: Objetos</h2>
                
                <div class="instructions">
                    <h3>📋 Qué debes implementar:</h3>
                    <p>Completa el controller <code>objetosController.js</code> para trabajar con objetos y sus propiedades.</p>
                    
                    <h4>🎯 Ejercicios por implementar:</h4>
                    <div class="examples">
                        <div class="example">
                            <strong>Ejercicio 1 - Crear perfil de usuario:</strong>
                            <pre>Input:  { "nombre": "Juan", "edad": 25, "email": "juan@mail.com" }
Output: { "usuario": {...}, "mensaje": "Usuario creado", "id": "USR001" }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 2 - Acceder propiedades del producto:</strong>
                            <pre>Input:  { "propiedad": "precio" }
Output: { "valor": 1500, "propiedad": "precio", "producto": "Laptop", "disponible": true }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 3 - Modificar datos del estudiante:</strong>
                            <pre>Input:  { "campo": "nota", "valor": 95 }
Output: { "success": true, "anterior": 85, "nuevo": 95, "estudiante": {...} }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 4 - Calcular área (método del objeto):</strong>
                            <pre>Input:  { "figura": "rectangulo", "ancho": 5, "alto": 3 }
Output: { "area": 15, "perimetro": 16, "figura": {...}, "formula": "ancho × alto" }</pre>
                        </div>
                        
                        <div class="example">
                            <strong>Ejercicio 5 - Gestionar carrito de compras (objeto anidado):</strong>
                            <pre>Input:  { "accion": "agregar", "producto": "Libro", "precio": 2500, "cantidad": 2 }
Output: { "success": true, "carrito": {...}, "total": 5000, "items": 2 }</pre>
                        </div>
                    </div>
                    
                    <h4>📋 Objetos base para trabajar:</h4>
                    <pre>var producto = {
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
};</pre>
                    
                    <h4>⚠️ Conceptos a implementar:</h4>
                    <ul>
                        <li><strong>Crear:</strong> Literal de objeto {}, asignación de propiedades</li>
                        <li><strong>Acceder:</strong> notación punto (obj.prop) y corchetes (obj["prop"])</li>
                        <li><strong>Modificar:</strong> reasignación de propiedades, validaciones</li>
                        <li><strong>Métodos:</strong> funciones dentro de objetos, usar "this"</li>
                        <li><strong>Anidados:</strong> objetos dentro de objetos, arrays de objetos</li>
                    </ul>
                </div>
                
                <h4>🧪 Prueba tu implementación:</h4>
                <form id="objetos-form">
                    <div class="form-group">
                        <label for="objeto-type">Tipo de ejercicio:</label>
                        <select id="objeto-type" name="type" required onchange="ObjetosExercise.updateForm()">
                            <option value="">Selecciona un ejercicio...</option>
                            <option value="crear">1. Crear perfil de usuario</option>
                            <option value="acceder">2. Acceder propiedades</option>
                            <option value="modificar">3. Modificar datos</option>
                            <option value="metodos">4. Métodos del objeto</option>
                            <option value="carrito">5. Carrito de compras</option>
                        </select>
                    </div>
                    
                    <div id="dynamic-inputs"></div>
                    
                    <button type="submit" class="btn">Procesar Objeto</button>
                </form>
                
                <div id="objetos-result"></div>
            </div>
        `;

    // Agregar event listener al formulario
    document.getElementById('objetos-form').addEventListener('submit', this.handleSubmit);
  },

  // Actualizar formulario según el tipo seleccionado
  updateForm() {
    const type = document.getElementById('objeto-type').value;
    const container = document.getElementById('dynamic-inputs');

    let inputsHTML = '';

    switch (type) {
      case 'crear':
        inputsHTML = `
          <div class="form-group">
            <label for="nombre">Nombre del usuario:</label>
            <input type="text" id="nombre" name="nombre" required placeholder="Ej: Juan">
          </div>
          <div class="form-group">
            <label for="edad">Edad:</label>
            <input type="number" id="edad" name="edad" min="18" max="100" required placeholder="Ej: 25">
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Ej: juan@mail.com">
          </div>
          <div class="form-group">
            <label for="ciudad">Ciudad (opcional):</label>
            <input type="text" id="ciudad" name="ciudad" placeholder="Ej: Santiago">
          </div>
        `;
        break;

      case 'acceder':
        inputsHTML = `
          <div class="form-group">
            <label for="propiedad">Propiedad a acceder:</label>
            <select id="propiedad" name="propiedad" required>
              <option value="">Selecciona propiedad...</option>
              <option value="nombre">nombre</option>
              <option value="precio">precio</option>
              <option value="categoria">categoria</option>
              <option value="disponible">disponible</option>
            </select>
            <small>Producto: { nombre: "Laptop", precio: 1500, categoria: "Electrónicos", disponible: true }</small>
          </div>
        `;
        break;

      case 'modificar':
        inputsHTML = `
          <div class="form-group">
            <label for="campo">Campo a modificar:</label>
            <select id="campo" name="campo" required>
              <option value="">Selecciona campo...</option>
              <option value="nombre">nombre</option>
              <option value="edad">edad</option>
              <option value="nota">nota</option>
              <option value="materia">materia</option>
            </select>
          </div>
          <div class="form-group">
            <label for="valor">Nuevo valor:</label>
            <input type="text" id="valor" name="valor" required placeholder="Ej: 95 o 'Historia'">
            <small>Estudiante actual: { nombre: "Ana", edad: 18, nota: 85, materia: "Matemáticas" }</small>
          </div>
        `;
        break;

      case 'metodos':
        inputsHTML = `
          <div class="form-group">
            <label for="figura">Tipo de figura:</label>
            <select id="figura" name="figura" required>
              <option value="">Selecciona figura...</option>
              <option value="rectangulo">Rectángulo</option>
              <option value="cuadrado">Cuadrado</option>
              <option value="circulo">Círculo</option>
            </select>
          </div>
          <div id="dimensiones-inputs"></div>
        `;
        // Agregar listener para actualizar dimensiones
        setTimeout(() => {
          const figuraSelect = document.getElementById('figura');
          if (figuraSelect) {
            figuraSelect.addEventListener('change', this.updateDimensiones);
          }
        }, 100);
        break;

      case 'carrito':
        inputsHTML = `
          <div class="form-group">
            <label for="accion">Acción:</label>
            <select id="accion" name="accion" required>
              <option value="">Selecciona acción...</option>
              <option value="agregar">Agregar producto</option>
              <option value="eliminar">Eliminar producto</option>
              <option value="vaciar">Vaciar carrito</option>
              <option value="aplicar-descuento">Aplicar descuento</option>
            </select>
          </div>
          <div id="carrito-inputs"></div>
        `;
        // Agregar listener para actualizar inputs del carrito
        setTimeout(() => {
          const accionSelect = document.getElementById('accion');
          if (accionSelect) {
            accionSelect.addEventListener('change', this.updateCarritoInputs);
          }
        }, 100);
        break;
    }

    container.innerHTML = inputsHTML;
  },

  // Actualizar inputs de dimensiones según la figura
  updateDimensiones() {
    const figura = document.getElementById('figura').value;
    const container = document.getElementById('dimensiones-inputs');

    let inputsHTML = '';

    switch (figura) {
      case 'rectangulo':
        inputsHTML = `
          <div class="form-group">
            <label for="ancho">Ancho:</label>
            <input type="number" id="ancho" name="ancho" min="1" required placeholder="Ej: 5">
          </div>
          <div class="form-group">
            <label for="alto">Alto:</label>
            <input type="number" id="alto" name="alto" min="1" required placeholder="Ej: 3">
          </div>
        `;
        break;

      case 'cuadrado':
        inputsHTML = `
          <div class="form-group">
            <label for="lado">Lado:</label>
            <input type="number" id="lado" name="lado" min="1" required placeholder="Ej: 4">
          </div>
        `;
        break;

      case 'circulo':
        inputsHTML = `
          <div class="form-group">
            <label for="radio">Radio:</label>
            <input type="number" id="radio" name="radio" min="1" required placeholder="Ej: 3">
          </div>
        `;
        break;
    }

    if (container) {
      container.innerHTML = inputsHTML;
    }
  },

  // Actualizar inputs del carrito según la acción
  updateCarritoInputs() {
    const accion = document.getElementById('accion').value;
    const container = document.getElementById('carrito-inputs');

    let inputsHTML = '';

    switch (accion) {
      case 'agregar':
        inputsHTML = `
          <div class="form-group">
            <label for="producto">Nombre del producto:</label>
            <input type="text" id="producto" name="producto" required placeholder="Ej: Libro">
          </div>
          <div class="form-group">
            <label for="precio">Precio unitario:</label>
            <input type="number" id="precio" name="precio" min="1" required placeholder="Ej: 2500">
          </div>
          <div class="form-group">
            <label for="cantidad">Cantidad:</label>
            <input type="number" id="cantidad" name="cantidad" min="1" required placeholder="Ej: 2">
          </div>
        `;
        break;

      case 'eliminar':
        inputsHTML = `
          <div class="form-group">
            <label for="producto">Nombre del producto a eliminar:</label>
            <input type="text" id="producto" name="producto" required placeholder="Ej: Libro">
          </div>
        `;
        break;

      case 'aplicar-descuento':
        inputsHTML = `
          <div class="form-group">
            <label for="descuento">Porcentaje de descuento:</label>
            <input type="number" id="descuento" name="descuento" min="0" max="100" required placeholder="Ej: 15">
          </div>
        `;
        break;

      case 'vaciar':
        inputsHTML = `
          <div class="form-group">
            <p><strong>ℹ️ Esta acción vaciará completamente el carrito.</strong></p>
          </div>
        `;
        break;
    }

    if (container) {
      container.innerHTML = inputsHTML;
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
        if (key === 'nombre' || key === 'email' || key === 'ciudad' || key === 'propiedad' ||
          key === 'campo' || key === 'valor' || key === 'figura' || key === 'accion' || key === 'producto') {
          data[key] = value;
        } else {
          data[key] = parseFloat(value);
        }
      }
    }

    try {
      // Llamar a la ruta específica según el tipo
      const response = await fetch(`/api/objetos/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      ObjetosExercise.displayResult(result, response.ok);

    } catch (error) {
      ObjetosExercise.displayResult({ error: 'Error de conexión' }, false);
    }
  },

  // Mostrar resultado
  displayResult(result, isSuccess) {
    const container = document.getElementById('objetos-result');
    const type = document.getElementById('objeto-type').value;

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
        case 'crear':
          if (result.usuario) {
            resultHTML += `<strong>✅ Usuario creado exitosamente:</strong><br>`;
            resultHTML += `• ID: ${result.id}<br>`;
            resultHTML += `• Nombre: ${result.usuario.nombre}<br>`;
            resultHTML += `• Edad: ${result.usuario.edad} años<br>`;
            resultHTML += `• Email: ${result.usuario.email}<br>`;
            if (result.usuario.ciudad) {
              resultHTML += `• Ciudad: ${result.usuario.ciudad}<br>`;
            }
            resultHTML += `• Mensaje: ${result.mensaje}<br>`;
          }
          break;

        case 'acceder':
          resultHTML += `<strong>✅ Propiedad accedida:</strong><br>`;
          resultHTML += `• Propiedad: ${result.propiedad}<br>`;
          resultHTML += `• Valor: ${result.valor}<br>`;
          resultHTML += `• Producto: ${result.producto}<br>`;
          if (result.disponible !== undefined) {
            resultHTML += `• Disponible: ${result.disponible ? 'Sí' : 'No'}<br>`;
          }
          break;

        case 'modificar':
          if (result.success) {
            resultHTML += `<strong>✅ Campo modificado exitosamente:</strong><br>`;
            resultHTML += `• Campo: ${result.estudiante.nombre || 'N/A'}<br>`;
            resultHTML += `• Valor anterior: ${result.anterior}<br>`;
            resultHTML += `• Valor nuevo: ${result.nuevo}<br>`;
            if (result.estudiante) {
              resultHTML += `• Estudiante actualizado: ${JSON.stringify(result.estudiante)}<br>`;
            }
          } else {
            resultHTML += `<strong>❌ Error al modificar campo</strong><br>`;
          }
          break;

        case 'metodos':
          resultHTML += `<strong>✅ Cálculo de área:</strong><br>`;
          resultHTML += `• Figura: ${result.figura.tipo || 'N/A'}<br>`;
          resultHTML += `• Área: ${result.area}<br>`;
          if (result.perimetro !== undefined) {
            resultHTML += `• Perímetro: ${result.perimetro}<br>`;
          }
          if (result.formula) {
            resultHTML += `• Fórmula: ${result.formula}<br>`;
          }
          break;

        case 'carrito':
          if (result.success) {
            resultHTML += `<strong>✅ Operación exitosa en el carrito:</strong><br>`;
            resultHTML += `• Total: $${result.total}<br>`;
            resultHTML += `• Cantidad de items: ${result.items}<br>`;
            if (result.carrito && result.carrito.items) {
              resultHTML += `• Productos: ${result.carrito.items.length > 0 ? result.carrito.items.map(item => item.nombre).join(', ') : 'Carrito vacío'}<br>`;
            }
            if (result.carrito && result.carrito.descuento > 0) {
              resultHTML += `• Descuento aplicado: ${result.carrito.descuento}%<br>`;
            }
          } else {
            resultHTML += `<strong>❌ Error en la operación del carrito</strong><br>`;
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
      case 'crear':
        expectedStructure = '{ usuario: object, mensaje: string, id: string }';
        if (!result.usuario) errors.push('Falta el campo "usuario"');
        if (!result.mensaje) errors.push('Falta el campo "mensaje"');
        if (!result.id) errors.push('Falta el campo "id"');
        break;

      case 'acceder':
        expectedStructure = '{ valor: any, propiedad: string, producto: string, disponible: boolean }';
        if (result.valor === undefined) errors.push('Falta el campo "valor"');
        if (!result.propiedad) errors.push('Falta el campo "propiedad"');
        if (!result.producto) errors.push('Falta el campo "producto"');
        break;

      case 'modificar':
        expectedStructure = '{ success: boolean, anterior: any, nuevo: any, estudiante: object }';
        if (result.success === undefined) errors.push('Falta el campo "success"');
        if (result.success && result.anterior === undefined) errors.push('Falta el campo "anterior"');
        if (result.success && result.nuevo === undefined) errors.push('Falta el campo "nuevo"');
        if (result.success && !result.estudiante) errors.push('Falta el campo "estudiante"');
        break;

      case 'metodos':
        expectedStructure = '{ area: number, perimetro: number, figura: object, formula: string }';
        if (result.area === undefined) errors.push('Falta el campo "area"');
        if (!result.figura) errors.push('Falta el campo "figura"');
        if (!result.formula) errors.push('Falta el campo "formula"');
        break;

      case 'carrito':
        expectedStructure = '{ success: boolean, carrito: object, total: number, items: number }';
        if (result.success === undefined) errors.push('Falta el campo "success"');
        if (result.success && !result.carrito) errors.push('Falta el campo "carrito"');
        if (result.success && result.total === undefined) errors.push('Falta el campo "total"');
        if (result.success && result.items === undefined) errors.push('Falta el campo "items"');
        break;
    }

    return {
      isValid: errors.length === 0,
      errors: errors,
      expectedStructure: expectedStructure
    };
  }
}; 