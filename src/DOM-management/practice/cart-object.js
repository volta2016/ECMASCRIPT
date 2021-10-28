// alert("hola ok");
//Vamos a aplicar diferentes formar de acceder al elemento que puede
//ser con dataset o con matched de js, tomar en cuenta el e.target
// propiedad del evento de destino devuelve el elemento que desencadenó el evento.

const cart = document.querySelector("#id"); //cart ul
const templatecheck = document.querySelector("#template");
const footer = document.querySelector("#foooter");
const footer_template = document.querySelector("#templateFooter");
const allButtons = document.querySelectorAll(".card .btn");

const fragment = document.createDocumentFragment();

let cartArray = [];

//delegacion de eventos > accediendo al boton agregar de la lista de productos
document.addEventListener("click", (e) => {
  // console.log(e);
  // console.log(e.target.dataset.fruit);
  // console.log(e.target.matches(".card button"));
  // if (e.target.matches(".card button")) {
  //   addCart(e);
  // }
  // //accediendo al boton de agregar del template dle check total de los productos
  // if (e.target.matches(".list-group-item .btn-succes")) {
  //   btnIcrease(e);
  // }
  // if (e.target.matches(".list-group-item .btn-danger")) {
  //   btnDecrease(e);
  // }
});

const addCart = (e) => {
  //console.log(e.target.dataset); //primero seleccionamos la fruta construimos nuestro producto que es un objeto
  const product = {
    titulo: e.target.dataset.fruit,
    id: e.target.dataset.fruit,
    count: 1,
    precio: parseInt(e.target.dataset.precio), //lo pasamos a type number
  };

  //buscamos el index
  const index = cartArray.findIndex((item) => item.id === product.id); //si es igual nos devuelve el index
  //console.log(index); //-1 por que el array esta vacío -1 es que no existe el producto

  //si no existe el index es -1 epujamos el nuevo elemento solo una vez agrego el elemento. Si el cliente vuelve agregar el mismo producto "NO" voy hacer push
  if (index === -1) {
    cartArray.push(product);
  } else {
    //caso de que exista lo contrario aumentamos su count
    cartArray[index].count++;
  }
  console.log(cartArray);

  printCart();
};

// const printCart = () => {};

allButtons.forEach((btn) => btn.addEventListener("click", addCart));
