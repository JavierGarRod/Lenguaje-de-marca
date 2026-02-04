const form = document.getElementById("registro");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (this.checkValidity()) {
    window.location.href = "HTML/html1.html";
  } else {
    this.reportValidity(); // muestra errores nativos
  }
  let valido = true;

  limpiarErrores();

  validarTexto("nombre", "El nombre es obligatorio");
  validarTexto("apellidos", "Los apellidos son obligatorios");
  validarEmail("email");
  validarPassword();
  validarTelefono("telefono");
  validarFecha("nacimiento");
  validarNumero("edad", 1, 120);
  validarSelect("pais");
  validarCategorias();
  validarClub();

  if (valido) {
    alert("Formulario enviado correctamente");
  }

  /* ================= FUNCIONES ================= */

  function error(input, mensaje) {
    input.parentElement.querySelector(".error").textContent = mensaje;
    valido = false;
  }

  function limpiarErrores() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
  }

  function validarTexto(id, mensaje) {
    const input = document.getElementById(id);
    if (input.value.trim() === "") {
      error(input, mensaje);
    }
  }

  function validarEmail(id) {
    const input = document.getElementById(id);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(input.value)) {
      error(input, "Email no válido");
    }
  }

  function validarPassword() {
    const p1 = document.getElementById("password");
    const p2 = document.getElementById("password2");

    if (p1.value.length < 6) {
      error(p1, "Mínimo 6 caracteres");
    }
    if (p1.value !== p2.value) {
      error(p2, "Las contraseñas no coinciden");
    }
  }

  function validarTelefono(id) {
    const input = document.getElementById(id);
    if (!/^[0-9]{9}$/.test(input.value)) {
      error(input, "Debe tener 9 dígitos");
    }
  }

  function validarFecha(id) {
    const input = document.getElementById(id);
    if (!input.value) {
      error(input, "Seleccione una fecha");
    }
  }

  function validarNumero(id, min, max) {
    const input = document.getElementById(id);
    const num = Number(input.value);
    if (isNaN(num) || num < min || num > max) {
      error(input, `Debe estar entre ${min} y ${max}`);
    }
  }

  function validarSelect(id) {
    const input = document.getElementById(id);
    if (input.value === "") {
      error(input, "Seleccione un país");
    }
  }

  function validarCategorias() {
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:not([name="noclub"])'
    );
    const checked = Array.from(checkboxes).some(cb => cb.checked);

    if (!checked) {
      checkboxes[0].parentElement.querySelector(".error").textContent =
        "Seleccione al menos una categoría";
      valido = false;
    }
  }

  function validarClub() {
    const club = document.getElementById("club");
    const noclub = document.querySelector('input[name="noclub"]');

    if (club.value.trim() === "" && !noclub.checked) {
      club.parentElement.querySelector(".error").textContent =
        "Indique un club o marque 'No pertenezco a ningún club'";
      valido = false;
    }
  }
});