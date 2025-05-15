const form = document.getElementById('empresa-form');
const seccionFormulario = document.getElementById('empresa-section');
const seccionResultado = document.getElementById('empresa-resultado');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const plan = document.getElementById('plan').value;
  const dominio = document.getElementById('dominio').value.trim();
  const infra = document.getElementById('infra').value.trim();

  // Validaciones personalizadas
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const dominioRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // básico para dominios o IP

  if (nombre.length < 3) {
    alert('El nombre de la empresa debe tener al menos 3 caracteres.');
    return;
  }

  if (!correoRegex.test(correo)) {
    alert('Por favor ingresa un correo electrónico válido.');
    return;
  }

  if (plan === "") {
    alert('Debes seleccionar un plan.');
    return;
  }

  if (!dominioRegex.test(dominio)) {
    alert('Ingresa un dominio o IP válido.');
    return;
  }

  if (infra.length < 10) {
    alert('La descripción de la infraestructura debe ser más detallada.');
    return;
  }

  // Si todo está correcto, mostrar resultados
  document.getElementById('nombre-empresa').textContent = nombre;
  document.getElementById('correo-empresa').textContent = correo;
  document.getElementById('plan-empresa').textContent = plan;
  document.getElementById('dominio-empresa').textContent = dominio;
  document.getElementById('infra-empresa').textContent = infra;

  seccionFormulario.style.display = 'none';
  seccionResultado.style.display = 'flex';
});

function volverAlFormulario() {
  seccionFormulario.style.display = 'block';
  seccionResultado.style.display = 'none';
}
