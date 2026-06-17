const form = document.getElementById("form");
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const age = document.getElementById("age");
const tel = document.getElementById("tel");
const direction = document.getElementById("direction");
const city = document.getElementById("city");
const codigoPostal = document.getElementById("codigoPostal");
const dni = document.getElementById("dni");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

nombre.addEventListener("blur", function () {
  if (nombre.value.trim() === "") {
    mostrarError(nombre, "El nombre es obligatorio");
  } else {
    ocultarError(nombre);
  }
});

function mostrarError(input, mensaje) {
  const errorElement = input.parentElement.nextElementSibling;
  errorElement.innerText = mensaje;
}

function ocultarError(input) {
  const errorElement = input.parentElement.nextElementSibling;
  errorElement.innerText = "";
}
