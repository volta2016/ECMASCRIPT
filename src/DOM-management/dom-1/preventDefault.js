/*::preventDefault()::
    Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
    Evita la recarga.
    más info:
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event

    Si doy click en un elemento que esta anidado no se propaga para ningún elemento ni para arriba ni para abajo

*/

const form = document.querySelector("form"); //accedemos al tag
const ancla = document.querySelector("a");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("click");
  console.log(`click 2 ${e.timeStamp}`);
});

//Sive para cualquier comportamiento por defecto del navegador e.preventDefaul()
ancla.addEventListener("click", (e) => e.preventDefault());
