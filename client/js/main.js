// Estado de la aplicación
const app = {
  currentExercise: null,
  appContainer: null
};

// Mapa de rutas
const routes = {
  '/': 'home',
  '/ifs': 'ifs',
  '/loops': 'loops',
  '/switches': 'switches',
  '/arrays': 'arrays',
  '/objetos': 'objetos'
};

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function () {
  app.appContainer = document.getElementById('app');
  initializeNavigation();
  initializeRouting();

  // Cargar la página inicial basada en la URL actual
  handleRoute();
});

// Configurar navegación
function initializeNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');

  navButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Extraer el tipo de ejercicio del ID
      const exerciseType = this.id.replace('nav-', '');

      // Navegar a la ruta correspondiente
      navigateTo(exerciseType === 'home' ? '/' : `/${exerciseType}`);
    });
  });
}

// Inicializar sistema de routing
function initializeRouting() {
  // Manejar navegación del navegador (back/forward)
  window.addEventListener('popstate', function (event) {
    handleRoute();
  });
}

// Navegar a una ruta específica
function navigateTo(path) {
  // Cambiar la URL sin recargar la página
  history.pushState(null, '', path);

  // Manejar la nueva ruta
  handleRoute();
}

// Manejar la ruta actual
function handleRoute() {
  const currentPath = window.location.pathname;
  const exerciseType = routes[currentPath];

  if (exerciseType) {
    loadExercise(exerciseType);
    updateActiveButton(exerciseType);
  } else {
    // Ruta no encontrada, redirigir al inicio
    navigateTo('/');
  }
}

// Actualizar botón activo en la navegación
function updateActiveButton(exerciseType) {
  // Remover clase active de todos los botones
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  // Agregar clase active al botón correspondiente
  const targetButton = exerciseType === 'home'
    ? document.getElementById('nav-home')
    : document.getElementById(`nav-${exerciseType}`);

  if (targetButton) {
    targetButton.classList.add('active');
  }
}

// Cargar ejercicio según el tipo
function loadExercise(type) {
  app.currentExercise = type;

  // Actualizar el título de la página
  updatePageTitle(type);

  switch (type) {
    case 'ifs':
      IfsExercise.load();
      break;
    case 'loops':
      LoopsExercise.load();
      break;
    case 'switches':
      SwitchesExercise.load();
      break;
    case 'arrays':
      ArraysModule.load();
      break;
    case 'objetos':
      ObjetosExercise.load();
      break;
    case 'home':
    default:
      showWelcome();
  }
}

// Actualizar título de la página
function updatePageTitle(type) {
  const titles = {
    'home': 'Tutorial de Programación',
    'ifs': 'Ejercicios de Condicionales - Tutorial',
    'loops': 'Ejercicios de Bucles - Tutorial',
    'switches': 'Ejercicios de Switch-Case - Tutorial',
    'arrays': 'Ejercicios de Arrays - Tutorial',
    'objetos': 'Ejercicios de Objetos - Tutorial'
  };

  document.title = titles[type] || titles['home'];
}

// Mostrar página de bienvenida
function showWelcome() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="welcome">
      <h2>¡Bienvenido al Tutorial de Programación! 🎉</h2>
      <p>Aprende los fundamentos de la programación paso a paso con ejercicios prácticos.</p>
      
      <div class="exercise-cards">
        <div class="exercise-card" onclick="loadPage('ifs')">
          <h4>🔀 Condicionales (If/Else)</h4>
          <p>Aprende a tomar decisiones en tu código con estructuras condicionales.</p>
          <p><strong>Ejercicios disponibles:</strong></p>
          <ul>
            <li>Comparar dos números</li>
            <li>Verificar si un número es par o impar</li>
            <li>Calcular descuentos por edad</li>
            <li>Sistema de login de usuarios</li>
            <li>Determinar estados del agua por temperatura</li>
          </ul>
          <small>✅ 5 ejercicios - 1 ejemplo implementado</small>
        </div>

        <div class="exercise-card" onclick="loadPage('loops')">
          <h4>🔄 Bucles (For/While)</h4>
          <p>Domina la repetición de código con diferentes tipos de bucles.</p>
          <p><strong>Ejercicios disponibles:</strong></p>
          <ul>
            <li>Sumar números del 1 hasta N</li>
            <li>Generar tablas de multiplicar</li>
            <li>Contar números pares en un rango</li>
            <li>Calcular factorial de un número</li>
            <li>Calcular potencias con bucles</li>
          </ul>
          <small>✅ 5 ejercicios - 1 ejemplo implementado</small>
        </div>

        <div class="exercise-card" onclick="loadPage('switches')">
          <h4>🎯 Switch-Case</h4>
          <p>Maneja múltiples opciones de forma elegante con switch-case.</p>
          <p><strong>Ejercicios disponibles:</strong></p>
          <ul>
            <li>Calculadora básica (+, -, *, /)</li>
            <li>Convertir calificaciones numéricas a letras</li>
            <li>Mostrar días de la semana</li>
            <li>Determinar estaciones del año</li>
            <li>Menú de restaurante interactivo</li>
          </ul>
          <small>✅ 5 ejercicios - 1 ejemplo implementado</small>
        </div>

        <div class="exercise-card" onclick="loadPage('arrays')">
          <h4>📊 Arrays (Arreglos)</h4>
          <p>Manipula colecciones de datos básicos: números, strings y booleanos.</p>
          <p><strong>Ejercicios disponibles:</strong></p>
          <ul>
            <li>Filtrar números pares, mayores a X, palabras con letra</li>
            <li>Buscar elementos específicos en arrays</li>
            <li>Ordenar números y palabras</li>
            <li>Agregar elementos (push, unshift, splice)</li>
            <li>Eliminar elementos (pop, shift, filter)</li>
          </ul>
          <small>✅ 5 ejercicios - 1 ejemplo implementado</small>
        </div>

        <div class="exercise-card" onclick="loadPage('objetos')">
          <h4>🏗️ Objetos</h4>
          <p>Trabaja con estructuras de datos complejas y propiedades.</p>
          <p><strong>Ejercicios disponibles:</strong></p>
          <ul>
            <li>Crear objetos con propiedades básicas</li>
            <li>Acceder y mostrar propiedades de objetos</li>
            <li>Modificar datos de objetos existentes</li>
            <li>Crear y usar métodos en objetos</li>
            <li>Gestionar carrito de compras con objetos</li>
          </ul>
          <small>✅ 5 ejercicios - 1 ejemplo implementado</small>
        </div>
      </div>

      <div class="progress-info">
        <h4>📈 Tu Progreso de Aprendizaje</h4>
        <p><strong>Total de ejercicios:</strong> 25 ejercicios distribuidos en 5 secciones</p>
        <p><strong>Ejemplos implementados:</strong> 5 ejercicios completamente funcionales</p>
        <p><strong>Pendientes:</strong> 20 ejercicios con TODOs detallados para que practiques</p>
        <p><strong>Metodología:</strong> Cada ejercicio incluye instrucciones paso a paso, ejemplos de código y validación de respuestas</p>
        <p><strong>Dificultad:</strong> Progresiva - desde conceptos básicos hasta manipulación de objetos complejos</p>
      </div>
    </div>
  `;
}

// Función auxiliar para cargar páginas (usada en los onclick de las cards)
function loadPage(type) {
  navigateTo(type === 'home' ? '/' : `/${type}`);
} 