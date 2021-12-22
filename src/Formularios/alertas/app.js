const formulario = document.querySelector("#formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regUserEmail =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

  if (!regUserName.test(userName.value)) {
    console.log("formato no valido");
    return;
  }
  if (!regUserEmail.test(userEmail.value)) {
    console.log("formato no valido");
    return;
  }

  console.log("formulario enviado");
});
