// Módulo para ejercicios de Layout & Posicionamiento
const LayoutExercise = {
  // Cargar ejercicio de Layout
  load() {
    const container = document.getElementById('app');
    container.innerHTML = `
      <div class="exercise-form">
        <h2>📐 Ejercicio: Layout & Posicionamiento</h2>
        
        <div class="instructions">
          <h3>📋 Qué debes implementar:</h3>
          <p>Domina Flexbox y CSS Grid para crear layouts profesionales. Cada ejercicio enseña técnicas específicas de posicionamiento.</p>
          
          <h4>🎯 Ejercicios disponibles:</h4>
          <div class="examples">
            <div class="example">
              <strong>Ejercicio 1 - Layout 3 Columnas (IMPLEMENTADO):</strong>
              <p>Layout clásico con sidebar, contenido principal y aside usando Flexbox</p>
              <pre>.container {
  display: flex;
  gap: 20px;
}</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 2 - Grid de Productos:</strong>
              <p>TODO: Grid responsive con CSS Grid que se adapta automáticamente</p>
              <pre>Conceptos: grid-template-columns, auto-fit, minmax()</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 3 - Header Centrado:</strong>
              <p>TODO: Navegación con logo centrado y menús a los lados</p>
              <pre>Técnicas: justify-content, align-items, space-between</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 4 - Sidebar Fijo:</strong>
              <p>TODO: Layout con sidebar fijo y contenido scrolleable</p>
              <pre>Conceptos: position fixed, overflow, calc()</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 5 - Dashboard:</strong>
              <p>TODO: Layout tipo admin con paneles y widgets organizados</p>
              <pre>Combinando Grid y Flexbox para layouts complejos</pre>
            </div>
          </div>
          
          <h4>⚠️ Conceptos clave:</h4>
          <ul>
            <li><strong>Flexbox:</strong> flex-direction, justify-content, align-items</li>
            <li><strong>CSS Grid:</strong> grid-template, grid-area, auto-fit</li>
            <li><strong>Posicionamiento:</strong> static, relative, absolute, fixed, sticky</li>
            <li><strong>Overflow:</strong> hidden, scroll, auto para contenido largo</li>
            <li><strong>Z-index:</strong> capas y superposición de elementos</li>
          </ul>
        </div>
        
        <h4>🧪 Prueba el ejemplo implementado:</h4>
        <form id="layout-form">
          <div class="form-group">
            <label for="layout-type">Ejercicio a probar:</label>
            <select id="layout-type" name="type" required onchange="LayoutExercise.updateForm()">
              <option value="">Selecciona un ejercicio...</option>
              <option value="three-columns">1. Layout 3 Columnas (Implementado)</option>
              <option value="product-grid">2. Grid de Productos (TODO)</option>
              <option value="centered-header">3. Header Centrado (TODO)</option>
              <option value="fixed-sidebar">4. Sidebar Fijo (TODO)</option>
              <option value="dashboard">5. Dashboard (TODO)</option>
            </select>
          </div>
          
          <div id="dynamic-inputs"></div>
          
          <button type="submit" class="btn">Generar Layout</button>
        </form>
        
        <div id="layout-result"></div>
      </div>
    `;

    // Agregar event listener al formulario
    document.getElementById('layout-form').addEventListener('submit', this.handleSubmit.bind(this));
  },

  // Actualizar formulario según el tipo seleccionado
  updateForm() {
    const type = document.getElementById('layout-type').value;
    const container = document.getElementById('dynamic-inputs');

    let inputsHTML = '';

    switch (type) {
      case 'three-columns':
        inputsHTML = `
          <div class="form-group">
            <label for="sidebarWidth">Ancho del sidebar (px):</label>
            <input type="number" id="sidebarWidth" name="sidebarWidth" value="250" min="200" max="400" required>
          </div>
          <div class="form-group">
            <label for="asideWidth">Ancho del aside (px):</label>
            <input type="number" id="asideWidth" name="asideWidth" value="200" min="150" max="300" required>
          </div>
          <div class="form-group">
            <label for="gap">Espaciado entre columnas (px):</label>
            <input type="number" id="gap" name="gap" value="20" min="10" max="50" required>
          </div>
          <div class="form-group">
            <label for="minHeight">Altura mínima (vh):</label>
            <input type="number" id="minHeight" name="minHeight" value="100" min="50" max="100" required>
          </div>
        `;
        break;

      case 'product-grid':
      case 'centered-header':
      case 'fixed-sidebar':
      case 'dashboard':
        inputsHTML = `
          <div class="form-group">
            <p><strong>⚠️ Este ejercicio aún no está implementado.</strong></p>
            <p>Es parte de los TODOs para que practiques implementando layouts con Flexbox y Grid.</p>
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
    if (type !== 'three-columns') {
      this.displayResult({
        error: 'Este ejercicio está pendiente de implementación'
      }, false);
      return;
    }

    const data = {};
    for (let [key, value] of formData.entries()) {
      if (key !== 'type') {
        data[key] = parseInt(value);
      }
    }

    // Para el ejercicio implementado, generar layout directamente
    const result = this.generateThreeColumnsLayout(data);
    this.displayResult(result, true);
  },

  // Generar layout de 3 columnas (ejercicio implementado)
  generateThreeColumnsLayout(data) {
    const { sidebarWidth, asideWidth, gap, minHeight } = data;

    const css = `.layout-container {
  /* Flexbox para layout horizontal */
  display: flex;
  min-height: ${minHeight}vh;
  gap: ${gap}px;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.sidebar {
  /* Ancho fijo del sidebar */
  flex: 0 0 ${sidebarWidth}px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.main-content {
  /* Contenido principal que crece */
  flex: 1;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  min-height: 400px;
}

.aside {
  /* Ancho fijo del aside */
  flex: 0 0 ${asideWidth}px;
  background: #e9ecef;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

/* Responsive breakpoint */
@media (max-width: 768px) {
  .layout-container {
    flex-direction: column;
    gap: ${gap / 2}px;
  }
  
  .sidebar,
  .aside {
    flex: none;
    width: 100%;
  }
}

/* Estilos de contenido demo */
.sidebar h3,
.aside h3,
.main-content h2 {
  margin-top: 0;
  color: #495057;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 8px 0;
  border-bottom: 1px solid #dee2e6;
}`;

    const html = `<div class="layout-container">
  <div class="sidebar">
    <h3>📂 Sidebar</h3>
    <ul>
      <li>🏠 Inicio</li>
      <li>📊 Dashboard</li>
      <li>👥 Usuarios</li>
      <li>📝 Contenido</li>
      <li>⚙️ Configuración</li>
    </ul>
  </div>
  
  <div class="main-content">
    <h2>📄 Contenido Principal</h2>
    <p>Esta es el área principal del contenido. Crece automáticamente para llenar el espacio disponible.</p>
    <p>En un layout real, aquí irían tus artículos, formularios, tablas de datos, etc.</p>
    <p>El contenido se adapta responsivamente en pantallas pequeñas cambiando a layout vertical.</p>
  </div>
  
  <div class="aside">
    <h3>📌 Aside</h3>
    <p>Información secundaria, widgets o anuncios.</p>
    <ul>
      <li>📈 Estadísticas</li>
      <li>🔔 Notificaciones</li>
      <li>📅 Calendario</li>
    </ul>
  </div>
</div>`;

    return {
      css: css,
      html: html,
      mensaje: 'Layout de 3 columnas generado exitosamente',
      conceptos: {
        'display: flex': 'Activa Flexbox en el contenedor',
        'flex: 0 0 250px': 'Elemento no crece, no se encoge, ancho fijo',
        'flex: 1': 'Elemento crece para llenar espacio disponible',
        'gap': 'Espaciado automático entre elementos flex',
        'min-height': 'Altura mínima del contenedor',
        'flex-direction': 'Cambia dirección en responsive'
      }
    };
  },

  // Mostrar resultado
  displayResult(result, isSuccess) {
    const container = document.getElementById('layout-result');

    if (isSuccess && result.css) {
      container.innerHTML = `
        <div class="result-container success">
          <h4>✅ ${result.mensaje}</h4>
          
          <div class="code-preview">
            <h5>📐 CSS Generado:</h5>
            <pre><code>${this.escapeHtml(result.css)}</code></pre>
          </div>
          
          <div class="live-preview">
            <h5>👁️ Vista Previa:</h5>
            <style>${result.css}</style>
            <div class="preview-frame" style="height: 500px; overflow: auto; border: 2px solid #ccc; border-radius: 8px;">
              ${result.html}
            </div>
            <p><small>💡 Redimensiona la ventana para ver el comportamiento responsive</small></p>
          </div>
          
          <div class="explanation">
            <h5>📚 Conceptos de Layout utilizados:</h5>
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