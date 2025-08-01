// Módulo para ejercicios de Responsive & Animaciones
const ResponsiveExercise = {
  // Cargar ejercicio de Responsive
  load() {
    const container = document.getElementById('app');
    container.innerHTML = `
      <div class="exercise-form">
        <h2>📱 Ejercicio: Responsive & Animaciones</h2>
        
        <div class="instructions">
          <h3>📋 Qué debes implementar:</h3>
          <p>Crea diseños adaptativos y micro-interacciones. Combina media queries con animaciones para experiencias fluidas.</p>
          
          <h4>🎯 Ejercicios disponibles:</h4>
          <div class="examples">
            <div class="example">
              <strong>Ejercicio 1 - Navbar Responsive (IMPLEMENTADO):</strong>
              <p>Navegación que colapsa en mobile con hamburger menu animado</p>
              <pre>@media (max-width: 768px) {
  .nav-menu { transform: translateX(-100%); }
}</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 2 - Gallery con Lightbox:</strong>
              <p>TODO: Galería responsive con lightbox CSS puro y animaciones</p>
              <pre>Conceptos: transform scale, transition, backdrop-filter</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 3 - Micro-interacciones:</strong>
              <p>TODO: Botones, cards y elementos con hover effects sutiles</p>
              <pre>Animaciones: hover, focus, loading states</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 4 - Loading Animations:</strong>
              <p>TODO: Spinners, progress bars y skeleton screens</p>
              <pre>@keyframes para animaciones CSS puras</pre>
            </div>
            
            <div class="example">
              <strong>Ejercicio 5 - Layout Responsive:</strong>
              <p>TODO: Componente completamente adaptativo mobile-first</p>
              <pre>Breakpoints: mobile, tablet, desktop</pre>
            </div>
          </div>
          
          <h4>⚠️ Conceptos clave:</h4>
          <ul>
            <li><strong>Media Queries:</strong> @media screen, min-width, max-width</li>
            <li><strong>Mobile First:</strong> diseñar primero para móvil</li>
            <li><strong>Breakpoints:</strong> 576px, 768px, 992px, 1200px</li>
            <li><strong>Animaciones:</strong> @keyframes, transition, transform</li>
            <li><strong>Performance:</strong> will-change, transform3d, GPU acceleration</li>
          </ul>
        </div>
        
        <h4>🧪 Prueba el ejemplo implementado:</h4>
        <form id="responsive-form">
          <div class="form-group">
            <label for="responsive-type">Ejercicio a probar:</label>
            <select id="responsive-type" name="type" required onchange="ResponsiveExercise.updateForm()">
              <option value="">Selecciona un ejercicio...</option>
              <option value="navbar-responsive">1. Navbar Responsive (Implementado)</option>
              <option value="gallery-lightbox">2. Gallery con Lightbox (TODO)</option>
              <option value="micro-interactions">3. Micro-interacciones (TODO)</option>
              <option value="loading-animations">4. Loading Animations (TODO)</option>
              <option value="layout-responsive">5. Layout Responsive (TODO)</option>
            </select>
          </div>
          
          <div id="dynamic-inputs"></div>
          
          <button type="submit" class="btn">Generar Responsive</button>
        </form>
        
        <div id="responsive-result"></div>
      </div>
    `;

    // Agregar event listener al formulario
    document.getElementById('responsive-form').addEventListener('submit', this.handleSubmit.bind(this));
  },

  // Actualizar formulario según el tipo seleccionado
  updateForm() {
    const type = document.getElementById('responsive-type').value;
    const container = document.getElementById('dynamic-inputs');

    let inputsHTML = '';

    switch (type) {
      case 'navbar-responsive':
        inputsHTML = `
          <div class="form-group">
            <label for="logo">Texto del logo:</label>
            <input type="text" id="logo" name="logo" value="Mi Sitio" required>
          </div>
          <div class="form-group">
            <label for="menuItems">Items del menú (separados por coma):</label>
            <input type="text" id="menuItems" name="menuItems" value="Inicio, Productos, Servicios, Contacto" required>
          </div>
          <div class="form-group">
            <label for="breakpoint">Breakpoint para mobile (px):</label>
            <input type="number" id="breakpoint" name="breakpoint" value="768" min="600" max="1024" required>
          </div>
          <div class="form-group">
            <label for="theme">Tema:</label>
            <select id="theme" name="theme" required>
              <option value="dark">Oscuro</option>
              <option value="light">Claro</option>
              <option value="blue">Azul</option>
            </select>
          </div>
        `;
        break;

      case 'gallery-lightbox':
      case 'micro-interactions':
      case 'loading-animations':
      case 'layout-responsive':
        inputsHTML = `
          <div class="form-group">
            <p><strong>⚠️ Este ejercicio aún no está implementado.</strong></p>
            <p>Es parte de los TODOs para que practiques implementando diseños responsive y animaciones.</p>
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
    if (type !== 'navbar-responsive') {
      this.displayResult({
        error: 'Este ejercicio está pendiente de implementación'
      }, false);
      return;
    }

    const data = {};
    for (let [key, value] of formData.entries()) {
      if (key !== 'type') {
        if (key === 'breakpoint') {
          data[key] = parseInt(value);
        } else {
          data[key] = value;
        }
      }
    }

    // Para el ejercicio implementado, generar navbar directamente
    const result = this.generateResponsiveNavbar(data);
    this.displayResult(result, true);
  },

  // Generar navbar responsive (ejercicio implementado)
  generateResponsiveNavbar(data) {
    const { logo, menuItems, breakpoint, theme } = data;
    const items = menuItems.split(',').map(item => item.trim());

    // Definir temas
    const themes = {
      dark: { bg: '#343a40', text: '#ffffff', hover: '#495057' },
      light: { bg: '#f8f9fa', text: '#495057', hover: '#e9ecef' },
      blue: { bg: '#007bff', text: '#ffffff', hover: '#0056b3' }
    };

    const themeColors = themes[theme];

    const css = `/* Navbar Responsive - ${theme} theme */
.responsive-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${themeColors.bg};
  color: ${themeColors.text};
  position: relative;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: ${themeColors.text};
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-menu li a {
  color: ${themeColors.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-menu li a:hover {
  background-color: ${themeColors.hover};
}

/* Hamburger button - hidden por defecto */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  padding: 8px;
}

.hamburger span {
  width: 24px;
  height: 3px;
  background: ${themeColors.text};
  transition: all 0.3s ease;
  border-radius: 2px;
}

/* Animación del hamburger */
.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Responsive styles */
@media (max-width: ${breakpoint}px) {
  .hamburger {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: ${themeColors.bg};
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    padding: 2rem 0;
    gap: 0;
  }
  
  .nav-menu.active {
    left: 0;
  }
  
  .nav-menu li {
    margin: 1rem 0;
  }
  
  .nav-menu li a {
    display: block;
    padding: 1rem 2rem;
  }
}

/* Smooth transitions */
* {
  box-sizing: border-box;
}`;

    const html = `<nav class="responsive-navbar">
  <a href="#" class="nav-logo">${logo}</a>
  
  <ul class="nav-menu" id="nav-menu">
    ${items.map(item => `<li><a href="#">${item}</a></li>`).join('\n    ')}
  </ul>
  
  <div class="hamburger" id="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>

<script>
  // JavaScript para el toggle del menú
  document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
  });
</script>`;

    return {
      css: css,
      html: html,
      mensaje: 'Navbar responsive generado exitosamente',
      conceptos: {
        '@media': `Breakpoint en ${breakpoint}px para cambio a mobile`,
        'transform': 'Animación del hamburger con rotación',
        'transition': 'Transiciones suaves en hover y toggle',
        'position: fixed': 'Menú mobile que se superpone',
        'left: -100%': 'Menú oculto fuera de pantalla',
        'flex-direction': 'Cambio de horizontal a vertical'
      }
    };
  },

  // Mostrar resultado
  displayResult(result, isSuccess) {
    const container = document.getElementById('responsive-result');

    if (isSuccess && result.css) {
      container.innerHTML = `
        <div class="result-container success">
          <h4>✅ ${result.mensaje}</h4>
          
          <div class="code-preview">
            <h5>📱 CSS + JavaScript Generado:</h5>
            <pre><code>${this.escapeHtml(result.css)}</code></pre>
            <details>
              <summary>Ver HTML + JavaScript</summary>
              <pre><code>${this.escapeHtml(result.html)}</code></pre>
            </details>
          </div>
          
          <div class="live-preview">
            <h5>👁️ Vista Previa Interactiva:</h5>
            <style>${result.css}</style>
            <div class="preview-frame" style="border: 2px solid #ccc; border-radius: 8px; overflow: hidden;">
              ${result.html}
              <div style="padding: 20px; background: #f8f9fa;">
                <p><strong>💡 Prueba redimensionar la ventana</strong> para ver cómo el menú se convierte en hamburger menu en pantallas pequeñas.</p>
                <p>🔥 <strong>Click en el icono hamburger</strong> (≡) para ver la animación del menú.</p>
              </div>
            </div>
          </div>
          
          <div class="explanation">
            <h5>📚 Conceptos Responsive utilizados:</h5>
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