/*::preventDefault()::
    Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
    Evita la recarga.
    más info:
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event


*/

const form = document.querySelector("form"); //accedemos al tag

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("click");
  console.log(`click 2 ${e.timeStamp}`);
});
