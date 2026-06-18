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

//NOMBRE
nombre.addEventListener("blur", function () {
  const valor = nombre.value.trim();

  if (valor === "") {
    mostrarError(nombre, "El nombre es obligatorio");
  } else if (valor.length <= 6) {
    mostrarError(nombre, "El nombre debe tener más de 6 letras.");
  } else if (!valor.includes(" ")) {
    mostrarError(nombre, "Debe contener al menos un espacio.");
  }
});

nombre.addEventListener("focus", function () {
  ocultarError(nombre);
});

//EMAIL
email.addEventListener("blur", function () {
  const valor = email.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email.value)) {
    mostrarError(email, "Formato de email inválido.");
  }
});

email.addEventListener("focus", function () {
  ocultarError(email);
});

//CONTRASEÑA
password.addEventListener("blur", function () {
  const regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!regexPassword.test(password.value)) {
    mostrarError(
      password,
      "Debe tener al menos 8 caracteres, letras y números.",
    );
  }
});

password.addEventListener("focus", function () {
  ocultarError(password);
});

//REPETIR CONTRASEÑA
confirmPassword.addEventListener("blur", function () {
  if (confirmPassword.value !== password.value) {
    mostrarError(confirmPassword, "Las contraseñas no coinciden.");
  }
});

confirmPassword.addEventListener("focus", function () {
  ocultarError(confirmPassword);
});

//EDAD
age.addEventListener("blur", function () {
  const valor = Number(age.value);
  if (!Number.isInteger(valor) || valor < 18) {
    mostrarError(age, "Debe ser un número entero mayor o igual a 18.");
  }
});

age.addEventListener("focus", function () {
  ocultarError(age);
});

//TELEFONO
tel.addEventListener("blur", function () {
  const valor = tel.value.trim();
  const regexTel = /^\d{7,}$/;
  if (!regexTel.test(valor)) {
    mostrarError(tel, "Debe contener al menos 7 dígitos (solo números).");
  }
});

tel.addEventListener("focus", function () {
  ocultarError(tel);
});

//DIRECCION
direction.addEventListener("blur", function () {
  const valor = direction.value.trim();
  const regexDir = /^[a-zA-Z0-9\s]+$/; // Solo letras, números y espacios
  if (valor.length < 5 || !valor.includes(" ") || !regexDir.test(valor)) {
    mostrarError(
      direction,
      "Debe tener 5+ caracteres, letras, números y un espacio.",
    );
  }
});

direction.addEventListener("focus", function () {
  ocultarError(direction);
});

//CIUDAD
city.addEventListener("blur", function () {
  const valor = city.value.trim();
  if (valor.length < 3) {
    mostrarError(city, "Debe tener al menos 3 caracteres.");
  }
});

city.addEventListener("focus", function () {
  ocultarError(city);
});

//CODIGO POSTAL
codigoPostal.addEventListener("blur", function () {
  const valor = codigoPostal.value.trim();
  if (valor.length < 3) {
    mostrarError(codigoPostal, "Debe tener al menos 3 caracteres.");
  }
});

codigoPostal.addEventListener("focus", function () {
  ocultarError(codigoPostal);
});

//DNI
dni.addEventListener("blur", function () {
  const valor = dni.value.trim();
  const regexDni = /^\d{7,8}$/;
  if (!regexDni.test(valor)) {
    mostrarError(dni, "El DNI debe tener 7 u 8 dígitos exactos.");
  }
});

dni.addEventListener("focus", function () {
  ocultarError(dni);
});

function mostrarError(input, mensaje) {
  const errorElement = input.nextElementSibling;
  errorElement.innerText = mensaje;
}

function ocultarError(input) {
  const errorElement = input.nextElementSibling;
  errorElement.innerText = "";
}

//FORMS
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todosLosInputs = [
    nombre,
    email,
    password,
    confirmPassword,
    age,
    tel,
    direction,
    city,
    codigoPostal,
    dni,
  ];

  todosLosInputs.forEach((input) => {
    input.dispatchEvent(new Event("blur"));
  });

  let erroresEncontrados = [];
  let resumenDatos = [];

  todosLosInputs.forEach((input) => {
    const mensajeError = input.nextElementSibling.innerText;

    if (mensajeError !== "") {
      erroresEncontrados.push(`- ${input.id}: ${mensajeError}`);
    } else {
      resumenDatos.push(`- ${input.id}: ${input.value}`);
    }
  });

  if (erroresEncontrados.length > 0) {
    alert(
      "El formulario no se pudo enviar debido a los siguientes errores:\n\n" +
        erroresEncontrados.join("\n"),
    );
  } else {
    alert(
      "¡Suscripción exitosa!\nDatos validados:\n\n" + resumenDatos.join("\n"),
    );
    // form.submit();
  }
});
