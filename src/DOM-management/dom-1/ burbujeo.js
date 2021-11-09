/* Javascript (DOM #02) Práctica
El **burbujeo y la captura** de eventos son dos mecanismos que describen lo que sucede cuando dos controladores del mismo tipo de evento se activan en un elemento.

Fase de burbuja (bubbling): Se propaga desde el elemento hijo hasta el padre. (comportamiento por defecto)
podemos ver este comportamiento en consola
*/

const primary = document.querySelector(".border-primary");
const secondary = document.querySelector(".border-secondary");
const danger = document.querySelector(".border-danger");

//Fase de captura: Se propaga desde el elemento padre hasta el hijo.

primary.addEventListener("click", (e) => console.log("primary"));
secondary.addEventListener("click", (e) => console.log("secondary"));
danger.addEventListener("click", (e) => console.log("danger"));

//hastas el momento si damos click en el evento padre solo nos manda el log de ese elemento pero si entro a al hijo y bajo un nivel más me va mostrar todos los log en consola:
// danger
// secondary
// primary
