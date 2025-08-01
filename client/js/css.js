// Módulo para ejercicios de CSS Básico
const CssExercise = {
  // Cargar ejercicio de CSS
  load() {
    const container = document.getElementById('app');
    container.innerHTML = `
      <div class="exercise-form">
        <h2>🎨 Ejercicio: CSS Básico</h2>
        
        <div class="instructions">
          <h3>📋 Qué debes implementar:</h3>
          <p>Aprende a estilizar elementos HTML con CSS moderno. Cada ejercicio cubre conceptos específicos de styling.</p>
          
          <h4>🎯 Ejercicios disponibles:</h4>
          <div class="examples">
            <div class="example">
              <strong>Ejercicio 1 - Botón con Estados (IMPLEMENTADO):</strong>
              <p>Botón completo con hover, active, disabled y transiciones</p>
              <pre>.btn {
  padding: 12px 24px;
  border: none;
  transition: all 0.2s ease;
}</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 2 - Card de Producto:</strong>
              <p>TODO: Card con imagen, shadow, hover effects y responsive</p>
              <pre>Conceptos: box-shadow, transform, object-fit, border-radius</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 3 - Badge/Tag:</strong>
              <p>TODO: Elementos de etiquetas pequeñas con colores y tamaños</p>
              <pre>Variantes: success, warning, error, info</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 4 - Loading Spinner:</strong>
              <p>TODO: Animación de carga usando @keyframes y transform</p>
              <pre>Animación CSS pura, sin JavaScript</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 5 - Formulario Estilizado:</strong>
              <p>TODO: Inputs con focus states, validación visual y layout</p>
              <pre>Estados: normal, focus, error, success</pre>
            </div>
          </div>
          
          <h4>⚠️ Conceptos clave:</h4>
          <ul>
            <li><strong>Box Model:</strong> margin, padding, border, content</li>
            <li><strong>Selectores:</strong> clases, pseudo-clases, pseudo-elementos</li>
            <li><strong>Colores:</strong> hex, rgb, rgba, hsl, variables CSS</li>
            <li><strong>Transiciones:</strong> hover effects, smooth animations</li>
            <li><strong>Especificidad:</strong> cascada, inheritance, !important</li>
          </ul>
        </div>
        
        <h4>🧪 Prueba el ejemplo implementado:</h4>
        <form id="css-form">
          <div class="form-group">
            <label for="css-type">Ejercicio a probar:</label>
            <select id="css-type" name="type" required onchange="CssExercise.updateForm()">
              <option value="">Selecciona un ejercicio...</option>
              <option value="button-states">1. Botón con Estados (Implementado)</option>
              <option value="product-card">2. Card de Producto (TODO)</option>
              <option value="badge-tag">3. Badge/Tag (TODO)</option>
              <option value="loading-spinner">4. Loading Spinner (TODO)</option>
              <option value="styled-form">5. Formulario Estilizado (TODO)</option>
            </select>
          </div>
          
          <div id="dynamic-inputs"></div>
          
          <button type="submit" class="btn">Generar CSS</button>
        </form>
        
        <div id="css-result"></div>
      </div>
    `;

    // Agregar event listener al formulario
    document.getElementById('css-form').addEventListener('submit', this.handleSubmit.bind(this));
  },

  // Actualizar formulario según el tipo seleccionado
  updateForm() {
    const type = document.getElementById('css-type').value;
    const container = document.getElementById('dynamic-inputs');

    let inputsHTML = '';

    switch (type) {
      case 'button-states':
        inputsHTML = `
          <div class="form-group">
            <label for="text">Texto del botón:</label>
            <input type="text" id="text" name="text" required placeholder="Ej: Enviar formulario">
          </div>
          <div class="form-group">
            <label for="variant">Variante:</label>
            <select id="variant" name="variant" required>
              <option value="primary">Primary (azul)</option>
              <option value="secondary">Secondary (gris)</option>
              <option value="success">Success (verde)</option>
              <option value="danger">Danger (rojo)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="size">Tamaño:</label>
            <select id="size" name="size" required>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        `;
        break;

      case 'product-card':
      case 'badge-tag':
      case 'loading-spinner':
      case 'styled-form':
        inputsHTML = `
          <div class="form-group">
            <p><strong>⚠️ Este ejercicio aún no está implementado.</strong></p>
            <p>Es parte de los TODOs para que practiques implementando estilos CSS.</p>
            <p><em>Revisa las especificaciones en el DESARROLLO.md para más detalles.</em></p>
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

    // Solo el primer ejercicio está implementado
    if (type !== 'button-states') {
      this.displayResult({
        error: 'Este ejercicio está pendiente de implementación'
      }, false);
      return;
    }

    const data = {};
    for (let [key, value] of formData.entries()) {
      if (key !== 'type') {
        data[key] = value;
      }
    }

    // Para el ejercicio implementado, generar CSS directamente
    const result = this.generateButtonStyles(data);
    this.displayResult(result, true);
  },

  // Generar estilos de botón (ejercicio implementado)
  generateButtonStyles(data) {
    const { text, variant, size } = data;

    // Definir colores por variante
    const colors = {
      primary: { bg: '#007bff', hover: '#0056b3', text: '#ffffff' },
      secondary: { bg: '#6c757d', hover: '#545b62', text: '#ffffff' },
      success: { bg: '#28a745', hover: '#1e7e34', text: '#ffffff' },
      danger: { bg: '#dc3545', hover: '#c82333', text: '#ffffff' }
    };

    // Definir tamaños
    const sizes = {
      small: { padding: '8px 16px', fontSize: '14px' },
      medium: { padding: '12px 24px', fontSize: '16px' },
      large: { padding: '16px 32px', fontSize: '18px' }
    };

    const colorSet = colors[variant];
    const sizeSet = sizes[size];

    const css = `.btn-${variant}-${size} {
  /* Estructura base */
  display: inline-block;
  padding: ${sizeSet.padding};
  font-size: ${sizeSet.fontSize};
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  
  /* Colores */
  background-color: ${colorSet.bg};
  color: ${colorSet.text};
  
  /* Transiciones suaves */
  transition: all 0.2s ease-in-out;
}

.btn-${variant}-${size}:hover {
  background-color: ${colorSet.hover};
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-${variant}-${size}:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.btn-${variant}-${size}:disabled {
  background-color: #6c757d;
  color: #ffffff;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
  opacity: 0.6;
}

.btn-${variant}-${size}:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(${this.hexToRgb(colorSet.bg)}, 0.25);
}`;

    const html = `<button class="btn-${variant}-${size}">${text}</button>`;

    return {
      css: css,
      html: html,
      mensaje: 'Botón con estados generado exitosamente',
      conceptos: {
        'transition': 'Animación suave entre estados',
        'transform': 'Efecto de elevación en hover',
        'box-shadow': 'Sombras para profundidad visual',
        'pseudo-classes': ':hover, :active, :focus, :disabled',
        'user-select': 'Previene selección de texto',
        'outline': 'Accesibilidad con focus visible'
      }
    };
  },

  // Convertir hex a rgb para rgba
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
      '0, 0, 0';
  },

  // Mostrar resultado
  displayResult(result, isSuccess) {
    const container = document.getElementById('css-result');

    if (isSuccess && result.css) {
      container.innerHTML = `
        <div class="result-container success">
          <h4>✅ ${result.mensaje}</h4>
          
          <div class="code-preview">
            <h5>🎨 CSS Generado:</h5>
            <pre><code>${this.escapeHtml(result.css)}</code></pre>
          </div>
          
          <div class="live-preview">
            <h5>👁️ Vista Previa:</h5>
            <style>${result.css}</style>
            <div class="preview-frame">
              ${result.html}
              <br><br>
              <button class="${result.html.match(/class="([^"]+)"/)[1]}" disabled>Versión Deshabilitada</button>
            </div>
          </div>
          
          <div class="explanation">
            <h5>📚 Conceptos CSS utilizados:</h5>
            <ul>
              ${Object.entries(result.conceptos).map(([property, description]) =>
        `<li><code>${property}</code>: ${description}</li>`
      ).join('')}
            </ul>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="result-container error">
          <h4>❌ Error</h4>
          <p>${result.error || 'Error desconocido'}</p>
        </div>
      `;
    }
  },

  // Escapar HTML para mostrar en código
  escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}; 