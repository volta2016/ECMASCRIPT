// variables globales
const btnButtons = document.querySelector("#btnButtons");
const buttons = document.querySelector("#buttons");
const back = document.querySelector("#back");

// funciones autoejecutable IFE
(() => {
  btnButtons.addEventListener("click", addButtons);
  buttons.addEventListener("click", delegation);
})();

(() => {
  const color = localStorage.getItem("colorFondo"); //colocamos cual es item que nosotros queremos leer, el key. El usuario al principio no va tener información guardada
  // console.log(color);
  if (color === null) {
    back.className = "bg-dark";
  } else {
    back.className = color; //si actualizado debería quedar con el color seleccionado
  }
})();

function delegation(e) {
  e.preventDefault();
  //console.log(e.target.classList[1]); //clase en el index[1]
  const colorButton = e.target.classList[1];
  // actualizacion del value en el localStorage
  switch (colorButton) {
    case "btn-primary":
      back.className = "bg-primary";
      localStorage.setItem("colorFondo", "btn-primary");
      //setItem va a guardar en el locaLStorage con una clave colorFondo y el string seleccionado
      break;
    case "btn-secondary":
      back.className = "btn-secondary";
      localStorage.setItem("colorFondo", "btn-secondary");
      break;
    case "btn-warning":
      back.className = "btn-warning";
      localStorage.setItem("colorFondo", "btn-warning");
      break;
    case "btn-danger":
      back.className = "btn-danger";
      localStorage.setItem("colorFondo", "btn-sencudary");
      break;
    case "btn-success":
      back.className = "btn-success";
      localStorage.setItem("colorFondo", "btn-success");
      break;
  }
}

function addButtons(e) {
  e.preventDefault();
  buttons.innerHTML = `<button class="btn btn-primary">primary</button>
  <button class="btn btn-secondary">secondary</button>
  <button class="btn btn-danger">danger</button>
  <button class="btn btn-success">success</button>
  <button class="btn btn-warning">warning</button>`;
}
