//::stopPropagation::
//evita la propagación adicional del evento actual en las fases de captura y bubbling.

const boxs = document.querySelectorAll(".container div"); //obtenemos todas la cajas div
boxs.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("click");
  });
});
