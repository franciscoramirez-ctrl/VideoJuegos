// FUNCIONALIDAD 1: Alternar entre Modo Oscuro y Modo Claro
const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    btnTema.textContent = '🌙 Modo Oscuro';
  } else {
    btnTema.textContent = '☀️ Modo Claro';
  }
});

// FUNCIONALIDAD 2: Buscador / Filtro de videojuegos en tiempo real
const buscador = document.getElementById('buscador');
const tarjetas = document.querySelectorAll('.tarjeta');
const sinResultados = document.getElementById('sin-resultados');

buscador.addEventListener('input', () => {
  const texto = buscador.value.toLowerCase();
  let visibles = 0;

  tarjetas.forEach(tarjeta => {
    const infoJuego = tarjeta.getAttribute('data-info');
    if (infoJuego.includes(texto)) {
      tarjeta.style.display = 'block';
      visibles++;
    } else {
      tarjeta.style.display = 'none';
    }
  });

  // Muestra un aviso si ningún juego coincide con la búsqueda
  sinResultados.style.display = visibles === 0 ? 'block' : 'none';
});

// FUNCIONALIDAD 3: Mostrar / Ocultar hitos históricos y validar formulario
const btnHistoria = document.getElementById('btn-historia');
const infoHistoria = document.getElementById('info-historia');

btnHistoria.addEventListener('click', () => {
  if (infoHistoria.style.display === 'block') {
    infoHistoria.style.display = 'none';
    btnHistoria.textContent = 'Ver hitos históricos';
  } else {
    infoHistoria.style.display = 'block';
    btnHistoria.textContent = 'Ocultar hitos';
  }
});

const form = document.getElementById('form-recomendacion');
const mensajeForm = document.getElementById('mensaje-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que la página se recargue al enviar
  const usuario = document.getElementById('nombre-usuario').value;
  const juego = document.getElementById('juego-recomendado').value;

  mensajeForm.textContent = `¡Gracias ${usuario}! Registramos tu recomendación de "${juego}".`;
  form.reset();
});
