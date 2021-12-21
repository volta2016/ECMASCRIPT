const formulario = document.querySelector("#formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("funciona");

  console.log(userName.value);
  console.log(userEmail.value);
});
