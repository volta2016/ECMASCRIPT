// alert("hola ok");
//Vamos a aplicar diferentes formar de acceder al elemento que puede
//ser con dataset o con matched de js, tomar en cuenta el e.target
// propiedad del evento de destino devuelve el elemento que desencadenó el evento.

const cart = document.querySelector("#cart"); //cart ul
const template = document.querySelector("#template");
// console.log(template_checkout);
const footer = document.querySelector("#footer");
const footer_template = document.querySelector("#templateFooter");
const allButtons = document.querySelectorAll(".card .btn");

const fragment = document.createDocumentFragment(); //node vacío NO pertenece al DOM

let cartArray = [];

//delegacion de eventos > accediendo al boton agregar de la lista de productos
// allButtons.forEach((btn) => btn.addEventListener("click", addCart));

document.addEventListener("click", (e) => {
  if (e.target.matches(".card .btn-outline-primary")) {
    //pasa si nos da true
    addCart(e);
  }
  if (e.target.matches("#cart .list-group-item .btn-success")) {
    btnAdd(e);
  }
  if (e.target.matches("#cart .list-group-item .btn-danger")) {
    btnSubtract(e);
  }
});

const addCart = (e) => {
  //console.log(e.target.dataset); //primero seleccionamos la fruta construimos nuestro producto que es un objeto por eso es que necesito e.target.dataset
  const product = {
    title: e.target.dataset.fruit,
    id: e.target.dataset.fruit,
    count: 1,
    price: parseInt(e.target.dataset.price), //lo pasamos a type number
  };
  console.log(product);
  //buscamos el index
  const index = cartArray.findIndex((item) => item.id === product.id); //si es igual nos devuelve el index
  //console.log(index); //-1 por que el array esta vacío -1 es que no existe el producto

  //si no existe el index es -1 epujamos el nuevo elemento solo una vez agrego el elemento. Si el cliente vuelve agregar el mismo producto "NO" voy hacer push

  if (index === -1) {
    cartArray.push(product);
  } else {
    //caso contrario  que existe aumentamos su count
    cartArray[index].count++; //accedemos al objeto en su indice específico
    // cartArray[index].price = cartArray[index].count * product.price;
  }
  console.log(cartArray);

  printCart();
};

const printCart = () => {
  cart.textContent = "";
  cartArray.forEach((item) => {
    const clone = template.content.cloneNode(true); //aplico la clonación del template
    clone.querySelector(".text-white .lead").textContent = item.title; //al template modifico su title
    clone.querySelector(".badge").textContent = item.count; //empujo la cantidad
    clone.querySelector("div .lead span").textContent = item.price * item.count;

    clone.querySelector(".btn-danger").dataset.id = item.id;
    clone.querySelector(".btn-success").dataset.id = item.id;
    fragment.appendChild(clone); //todo lo agrego al fragment para evitar el reflow
  });

  cart.appendChild(fragment);

  // printFooter();
};

const printFooter = () => {
  cart.textContent = "";
  const total = cartArray.reduce(
    (acc, current) => acc + current.count * current.price,
    0 //lo que vamos devolver es un number por eso 0 como segundo param
  );
  const clone = footer_template.content.cloneNode(true);
  console.log(clone);
  clone.querySelector("span").textContent = total;

  footer.appendChild(clone);
};

const btnAdd = (e) => {
  console.log("me diste click ", e.target.dataset.id);
  cartArray = cartArray.map((item) => {
    if (item.id === e.target.dataset.id) {
      item.count++;
    }
    return item;
  });
  printCart();
};

const btnSubtract = (e) => {
  console.log("me diste click ", e.target.dataset.id);

  cartArray = cartArray.filter((item) => {
    if (item.id === e.target.dataset.id) {
      if (item.count > 0) {
        item.count--;
        if (item.count === 0) return;
        return item;
      }
    } else {
      return item; //los otros item siguen tal cual
    }
  });
  printCart();
};
