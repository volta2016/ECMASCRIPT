/*
La delegación de eventos es básicamente un patrón para manejar eventos de manera eficiente.

En lugar de agregar un detector de eventos a todos y cada uno de los elementos similares, podemos agregar un detector de eventos a un elemento principal y llamar a un evento en un objetivo en particular utilizando la propiedad .target del objeto de evento.

Así evitamos la propagación 👌
*/
// alert("hola");
const container = document.querySelector(".container");
console.log(container);

container.addEventListener("click", (e) => {
  console.log(e.target);
});
