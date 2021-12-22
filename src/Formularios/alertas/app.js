const formulario = document.querySelector("#formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const alertSucces = document.getElementById("alertSuccess");
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail =
  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const messageAlertSucces = () => {
  alertSucces.classList.remove("d-none");
  alertSucces.textContent = "Mensaje enviado con éxito";
};

const printMessageError = (error) => {
  error.forEach((element) => {
    element.type.classList.remove("d-none");
    element.type.textContent = element.msg;
  });
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  alertSucces.classList.add("d-none");

  const error = [];

  if (!regUserName.test(userName.value) || !userName.value.trim()) {
    userName.classList.add("is-invalid");
    error.push({
      type: alertName,
      msg: "Formato no válido solo acepta letras",
    });
  } else {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    alertName.classList.add("d-none");
  }

  if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
    userEmail.classList.add("is-invalid");
    error.push({
      type: alertEmail,
      msg: "Escribe un correo válido",
    });
  } else {
    userEmail.classList.remove("is-invalid");
    userEmail.classList.add("is-valid");
    alertEmail.classList.add("d-none");
  }

  if (error.length !== 0) {
    printMessageError(error);
    return;
  }

  console.log("formulario enviado");
  messageAlertSucces();
});
