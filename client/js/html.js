// Módulo para ejercicios de HTML Semántico
const HtmlExercise = {
  // Cargar ejercicio de HTML
  load() {
    const container = document.getElementById('app');
    container.innerHTML = `
      <div class="exercise-form">
        <h2>📄 Ejercicio: HTML Semántico</h2>
        
        <div class="instructions">
          <h3>📋 Qué debes implementar:</h3>
          <p>Crea componentes HTML usando etiquetas semánticas apropiadas. Cada ejercicio se enfoca en un patrón específico de estructuración.</p>
          
          <h4>🎯 Ejercicios disponibles:</h4>
          <div class="examples">
            <div class="example">
              <strong>Ejercicio 1 - Card de Noticia (IMPLEMENTADO):</strong>
              <p>Una card semántica con título, fecha, resumen y metadatos</p>
              <pre>&lt;article class="news-card"&gt;
  &lt;header&gt;...&lt;/header&gt;
  &lt;p&gt;...&lt;/p&gt;
  &lt;footer&gt;...&lt;/footer&gt;
&lt;/article&gt;</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 2 - Formulario de Contacto:</strong>
              <p>TODO: Crear formulario con fieldsets, labels y validación HTML5</p>
              <pre>Elementos a usar: &lt;form&gt;, &lt;fieldset&gt;, &lt;legend&gt;, &lt;label&gt;, inputs con tipos específicos</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 3 - Navegación Breadcrumb:</strong>
              <p>TODO: Implementar navegación jerárquica con &lt;nav&gt; y &lt;ol&gt;</p>
              <pre>Estructura: Inicio > Productos > Laptops > MacBook Pro</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 4 - Perfil de Usuario:</strong>
              <p>TODO: Crear perfil usando &lt;section&gt;, &lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;</p>
              <pre>Con foto, datos personales y descripción estructurada</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 5 - Landing Page:</strong>
              <p>TODO: Estructura completa con hero, features, testimonials y footer</p>
              <pre>Usando: &lt;main&gt;, &lt;section&gt;, &lt;aside&gt;, elementos semánticos</pre>
            </div>
          </div>
          
          <h4>⚠️ Conceptos clave:</h4>
          <ul>
            <li><strong>Semántica:</strong> Usa &lt;article&gt;, &lt;section&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;aside&gt;</li>
            <li><strong>Accesibilidad:</strong> Labels, ARIA attributes, estructura lógica</li>
            <li><strong>Formularios:</strong> Tipos de input apropiados, validación HTML5</li>
            <li><strong>Navegación:</strong> &lt;nav&gt;, breadcrumbs, menús jerárquicos</li>
            <li><strong>Metadatos:</strong> &lt;time&gt;, microdata, structured data</li>
          </ul>
        </div>
        
        <h4>🧪 Prueba el ejemplo implementado:</h4>
        <form id="html-form">
          <div class="form-group">
            <label for="html-type">Ejercicio a probar:</label>
            <select id="html-type" name="type" required onchange="HtmlExercise.updateForm()">
              <option value="">Selecciona un ejercicio...</option>
              <option value="news-card">1. Card de Noticia (Implementado)</option>
              <option value="contact-form">2. Formulario de Contacto (TODO)</option>
              <option value="breadcrumb">3. Navegación Breadcrumb (TODO)</option>
              <option value="user-profile">4. Perfil de Usuario (TODO)</option>
              <option value="landing-page">5. Landing Page (TODO)</option>
            </select>
          </div>
          
          <div id="dynamic-inputs"></div>
          
          <button type="submit" class="btn">Generar HTML</button>
        </form>
        
        <div id="html-result"></div>
      </div>
    `;

    // Agregar event listener al formulario
    document.getElementById('html-form').addEventListener('submit', this.handleSubmit.bind(this));
  },

  // Actualizar formulario según el tipo seleccionado
  updateForm() {
    const type = document.getElementById('html-type').value;
    const container = document.getElementById('dynamic-inputs');

    let inputsHTML = '';

    switch (type) {
      case 'news-card':
        inputsHTML = `
          <div class="form-group">
            <label for="title">Título de la noticia:</label>
            <input type="text" id="title" name="title" required placeholder="Ej: Nueva función en JavaScript">
          </div>
          <div class="form-group">
            <label for="date">Fecha:</label>
            <input type="date" id="date" name="date" required>
          </div>
          <div class="form-group">
            <label for="summary">Resumen:</label>
            <textarea id="summary" name="summary" rows="3" required placeholder="Resumen de la noticia..."></textarea>
          </div>
          <div class="form-group">
            <label for="category">Categoría:</label>
            <input type="text" id="category" name="category" required placeholder="Ej: Tecnología">
          </div>
        `;
        break;

      case 'contact-form':
      case 'breadcrumb':
      case 'user-profile':
      case 'landing-page':
        inputsHTML = `
          <div class="form-group">
            <p><strong>⚠️ Este ejercicio aún no está implementado.</strong></p>
            <p>Es parte de los TODOs para que practiques implementando la estructura HTML semántica.</p>
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
    if (type !== 'news-card') {
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

    // Para el ejercicio implementado, generar HTML directamente
    const result = this.generateNewsCard(data);
    this.displayResult(result, true);
  },

  // Generar card de noticia (ejercicio implementado)
  generateNewsCard(data) {
    const { title, date, summary, category } = data;

    // Formatear fecha para el atributo datetime
    const datetime = date;
    const displayDate = new Date(date).toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const html = `<article class="news-card">
  <header>
    <h3>${title}</h3>
    <time datetime="${datetime}">${displayDate}</time>
  </header>
  <p>${summary}</p>
  <footer>
    <span class="category">${category}</span>
    <a href="#" class="read-more">Leer más</a>
  </footer>
</article>`;

    return {
      html: html,
      mensaje: 'Card de noticia generada exitosamente',
      elementos: {
        'article': 'Contenedor semántico para contenido independiente',
        'header': 'Encabezado con título y fecha',
        'time': 'Elemento semántico para fechas con atributo datetime',
        'footer': 'Pie con metadatos y acciones'
      }
    };
  },

  // Mostrar resultado
  displayResult(result, isSuccess) {
    const container = document.getElementById('html-result');

    if (isSuccess && result.html) {
      container.innerHTML = `
        <div class="result-container success">
          <h4>✅ ${result.mensaje}</h4>
          
          <div class="code-preview">
            <h5>🔍 HTML Generado:</h5>
            <pre><code>${this.escapeHtml(result.html)}</code></pre>
          </div>
          
          <div class="live-preview">
            <h5>👁️ Vista Previa:</h5>
            <div class="preview-frame">
              ${result.html}
            </div>
          </div>
          
          <div class="explanation">
            <h5>📚 Elementos semánticos utilizados:</h5>
            <ul>
              ${Object.entries(result.elementos).map(([tag, description]) =>
        `<li><code>&lt;${tag}&gt;</code>: ${description}</li>`
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
  escapeHtml(html) {
    return html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}; 