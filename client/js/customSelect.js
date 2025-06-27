/**
 * Custom Select Component
 * Reemplaza los <select> nativos con dropdowns bonitos y personalizables
 */

class CustomSelect {
  constructor(selectElement) {
    this.originalSelect = selectElement;
    this.isOpen = false;
    this.selectedValue = '';
    this.selectedText = '';

    this.init();
  }

  init() {
    // Crear el wrapper para el custom select
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'custom-select-wrapper';

    // Insertar el wrapper después del select original
    this.originalSelect.parentNode.insertBefore(this.wrapper, this.originalSelect.nextSibling);

    // Crear el elemento principal del custom select
    this.customSelect = document.createElement('div');
    this.customSelect.className = 'custom-select';

    // Agregar clase especial si es el selector de tipo de ejercicio
    if (this.originalSelect.name === 'type') {
      this.customSelect.classList.add('exercise-type');
    }

    // Crear el texto principal
    this.selectText = document.createElement('span');
    this.updateSelectText();

    // Crear la flecha
    this.arrow = document.createElement('div');
    this.arrow.className = 'custom-select-arrow';

    // Crear el dropdown
    this.dropdown = document.createElement('div');
    this.dropdown.className = 'custom-select-dropdown';

    // Ensamblar el custom select
    this.customSelect.appendChild(this.selectText);
    this.customSelect.appendChild(this.arrow);
    this.wrapper.appendChild(this.customSelect);
    this.wrapper.appendChild(this.dropdown);

    // Ocultar el select original y agregar clase al form-group
    this.originalSelect.style.display = 'none';
    const formGroup = this.originalSelect.closest('.form-group');
    if (formGroup) {
      formGroup.classList.add('has-custom-select');
    }

    // Crear las opciones
    this.createOptions();

    // Agregar event listeners
    this.addEventListeners();
  }

  updateSelectText() {
    const selectedOption = this.originalSelect.options[this.originalSelect.selectedIndex];

    if (this.originalSelect.selectedIndex === 0 || !selectedOption.value) {
      // Es el placeholder
      this.selectText.innerHTML = `<span class="custom-select-placeholder">${selectedOption.text}</span>`;
    } else {
      // Es una opción válida
      let optionText = selectedOption.text;

      // Agregar emojis basados en el valor para hacerlo más visual
      if (this.originalSelect.name === 'type') {
        const emojis = {
          'filtrar': '🔍',
          'buscar': '👀',
          'ordenar': '📊',
          'agregar': '➕',
          'eliminar': '🗑️',
          'crear': '✨',
          'acceder': '🔑',
          'modificar': '✏️',
          'metodos': '⚙️',
          'carrito': '🛒'
        };

        const emoji = emojis[selectedOption.value] || '';
        optionText = emoji ? `${emoji} ${optionText}` : optionText;
      }

      this.selectText.innerHTML = `<span class="custom-select-text">${optionText}</span>`;
    }
  }

  createOptions() {
    this.dropdown.innerHTML = '';

    Array.from(this.originalSelect.options).forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.className = 'custom-select-option';
      optionElement.dataset.value = option.value;
      optionElement.dataset.index = index;

      if (index === 0 || !option.value) {
        optionElement.classList.add('placeholder');
        optionElement.textContent = option.text;
      } else {
        let optionText = option.text;

        // Agregar emojis para las opciones de tipo de ejercicio
        if (this.originalSelect.name === 'type') {
          const emojis = {
            'filtrar': '🔍',
            'buscar': '👀',
            'ordenar': '📊',
            'agregar': '➕',
            'eliminar': '🗑️',
            'crear': '✨',
            'acceder': '🔑',
            'modificar': '✏️',
            'metodos': '⚙️',
            'carrito': '🛒'
          };

          const emoji = emojis[option.value] || '';
          optionText = emoji ? `${emoji} ${optionText}` : optionText;
        }

        optionElement.textContent = optionText;
      }

      if (this.originalSelect.selectedIndex === index) {
        optionElement.classList.add('selected');
      }

      this.dropdown.appendChild(optionElement);
    });
  }

  addEventListeners() {
    // Click en el custom select para abrir/cerrar
    this.customSelect.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    // Click en las opciones
    this.dropdown.addEventListener('click', (e) => {
      if (e.target.classList.contains('custom-select-option') && !e.target.classList.contains('placeholder')) {
        const index = parseInt(e.target.dataset.index);
        this.selectOption(index);
      }
    });

    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', (e) => {
      if (!this.wrapper.contains(e.target)) {
        this.close();
      }
    });

    // Teclado support
    this.customSelect.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          this.toggle();
          break;
        case 'Escape':
          this.close();
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (this.isOpen) {
            this.navigateOptions(1);
          } else {
            this.open();
          }
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (this.isOpen) {
            this.navigateOptions(-1);
          }
          break;
      }
    });

    // Hacer el custom select focusable
    this.customSelect.tabIndex = 0;

    // Sincronizar cuando el select original cambia
    this.originalSelect.addEventListener('change', () => {
      this.updateFromOriginal();
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (this.isOpen) return;

    // Cerrar otros dropdowns
    document.querySelectorAll('.custom-select.active').forEach(select => {
      if (select !== this.customSelect) {
        select.classList.remove('active');
        select.parentNode.querySelector('.custom-select-dropdown').classList.remove('show');
      }
    });

    this.isOpen = true;
    this.customSelect.classList.add('active');
    this.dropdown.classList.add('show');

    // Focus en la opción seleccionada
    const selectedOption = this.dropdown.querySelector('.custom-select-option.selected');
    if (selectedOption) {
      selectedOption.scrollIntoView({ block: 'nearest' });
    }
  }

  close() {
    if (!this.isOpen) return;

    this.isOpen = false;
    this.customSelect.classList.remove('active');
    this.dropdown.classList.remove('show');
  }

  selectOption(index) {
    // Actualizar el select original
    this.originalSelect.selectedIndex = index;

    // Disparar evento change en el select original
    this.originalSelect.dispatchEvent(new Event('change', { bubbles: true }));

    // Actualizar la UI
    this.updateFromOriginal();

    // Cerrar dropdown
    this.close();
  }

  updateFromOriginal() {
    // Actualizar texto
    this.updateSelectText();

    // Actualizar opciones seleccionadas
    this.dropdown.querySelectorAll('.custom-select-option').forEach((option, index) => {
      option.classList.toggle('selected', index === this.originalSelect.selectedIndex);
    });
  }

  navigateOptions(direction) {
    const options = Array.from(this.dropdown.querySelectorAll('.custom-select-option:not(.placeholder)'));
    let currentIndex = options.findIndex(option => option.classList.contains('selected'));

    if (currentIndex === -1) currentIndex = 0;

    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = options.length - 1;
    if (newIndex >= options.length) newIndex = 0;

    const targetOption = options[newIndex];
    if (targetOption) {
      const originalIndex = parseInt(targetOption.dataset.index);
      this.selectOption(originalIndex);
    }
  }
}

/**
 * Función para inicializar todos los custom selects en la página
 */
function initCustomSelects() {
  // Encontrar todos los selects que no han sido convertidos aún
  const selects = document.querySelectorAll('select:not([data-custom-select-initialized])');

  selects.forEach(select => {
    // Marcar como inicializado para evitar duplicados
    select.dataset.customSelectInitialized = 'true';

    // Crear el custom select
    new CustomSelect(select);
  });
}

/**
 * Auto-inicializar cuando el DOM esté listo
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCustomSelects);
} else {
  initCustomSelects();
}

/**
 * Observer para detectar nuevos selects agregados dinámicamente
 */
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === 1) { // Element node
        // Buscar selects en el nodo agregado
        const selects = node.querySelectorAll ? node.querySelectorAll('select:not([data-custom-select-initialized])') : [];

        // También verificar si el nodo mismo es un select
        if (node.tagName === 'SELECT' && !node.dataset.customSelectInitialized) {
          new CustomSelect(node);
          node.dataset.customSelectInitialized = 'true';
        }

        // Inicializar selects encontrados
        selects.forEach(select => {
          new CustomSelect(select);
          select.dataset.customSelectInitialized = 'true';
        });
      }
    });
  });
});

// Observar cambios en el DOM
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Exponer funciones globalmente para uso manual si es necesario
window.CustomSelect = CustomSelect;
window.initCustomSelects = initCustomSelects; 