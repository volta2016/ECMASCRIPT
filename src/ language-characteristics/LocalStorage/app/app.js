// variables globales
const btnButtons = document.querySelector("#btnButtons");
const buttons = document.querySelector("#buttons");
const back = document.querySelector("#back");

// funciones autoejecutable
(() => {
  btnButtons.addEventListener("click", addButtons);
  buttons.addEventListener("click", delegation);
})();

// (() => {
//   const color = localStorage.getItem('colorFondo');//colocamos cual es item que nosotros queremos leer, el key
//   // console.log(color);
//   if (color === null) {
//     fondo.className = 'bg-dark'
//   } else {
//     fondo.className = color;
//   }
//   //si actualizado debería quedar con el color seleccionado
// })();

function delegation(e) {
  e.preventDefault();
  // console.log(e.target.classList[1]);
  const colorButton = e.target.classList[1];
  // actualizacion del value en el localStorage
  switch (colorButton) {
    case "btn-primary":
      back.className = "bg-primary";
      // background.setItem('colorFondo', "btn-primary");//guardamos el valor
      break;
    case "btn-secondary":
      back.className = "btn-secondary";
      // background.setItem('colorFondo', "bg-danger");
      break;
    case "btn-warning":
      back.className = "btn-warning";
      // background.setItem('colorFondo', "btn-warning");
      break;
    case "btn-danger":
      back.className = "btn-danger";
      // background.setItem('colorFondo', "btn-sencudary");
      break;
    case "btn-success":
      back.className = "btn-success";
      // background.setItem('colorFondo', "btn-success");
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
