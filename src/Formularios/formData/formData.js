const formulario = document.querySelector("#formulario");
const userNameA = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
//console.log(formulario, userName, userEmail);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = new FormData(formulario); //esto es iterable
  for (const item of inputs) {
    console.log(item);
  }

  console.log(inputs.get("userName"));
  console.log(inputs.get("userEmail"));

  console.log("formulario enviado");
});
