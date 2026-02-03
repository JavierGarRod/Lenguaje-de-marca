document.getElementById("registro").addEventListener("submit", function (e) {
  e.preventDefault();
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
  validarCheckbox("aficiones");
  validarColor("color");

  if (valido) {
    alert("Formulario enviado correctamente");
  }

  function error(id, mensaje) {
    document.querySelector(`#${id} + .error`).textContent = mensaje;
    valido = false;
  }

  function limpiarErrores() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
  }

  function validarTexto(id, mensaje) {
    if (document.getElementById(id).value.trim() === "") {
      error(id, mensaje);
    }
  }

  function validarEmail(id) {
    const email = document.getElementById(id).value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) error(id, "Email no válido");
  }

  function validarPassword() {
    const p1 = document.getElementById("password").value;
    const p2 = document.getElementById("password2").value;

    if (p1.length < 6) error("password", "Mínimo 6 caracteres");
    if (p1 !== p2) error("password2", "Las contraseñas no coinciden");
  }

  function validarTelefono(id) {
    const tel = document.getElementById(id).value;
    if (!/^[0-9]{9}$/.test(tel)) error(id, "Teléfono debe tener 9 dígitos");
  }

  function validarFecha(id) {
    const fecha = document.getElementById(id).value;
    if (!fecha) error(id, "Seleccione una fecha");
  }

  function validarNumero(id, min, max) {
    const num = Number(document.getElementById(id).value);
    if (num < min || num > max) error(id, `Debe estar entre ${min} y ${max}`);
  }

  function validarSelect(id) {
    if (document.getElementById(id).value === "") {
      error(id, "Seleccione una categoría");
    }
  }

  function validarCheckbox(name) {
    const check = document.querySelectorAll(`input[name="${name}"]:checked`);
    if (check.length === 0) {
      document
        .querySelector(`input[name="${name}"]`)
        .parentNode.querySelector(".error").textContent =
        "Seleccione al menos una afición";
      valido = false;
    }
  }

    function obtenerCategoria(edad) {
    if (edad >= 1 && edad <= 20) return "Junior";
    if (edad >= 21 && edad <= 34) return "Senior";
    if (edad >= 35 && edad <= 70) return "Veterano";
    if (edad > 70 && edad <= 120) return "Absoluta";
    return "";
  }
});

/* AUTOSELECCIÓN DE CATEGORÍA SEGÚN EDAD */
document.getElementById("edad").addEventListener("change", function () {
    const edad = Number(this.value);
    const categoria = obtenerCategoria(edad);
    document.getElementById("edad").value = categoria;
});