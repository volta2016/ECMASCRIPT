let names = ['Naruto', 'Sasuke', 'Orochimaru', 'Itachi', 'Hinata', 'Sakura', 'Obito', 'Madara', 'Kurama']


//for clasico 
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

//imprime cada uno de los elementos de nuestro array
//podemos utilizar nativas del loop como el break y el continuo para detener el loop o saltar
//elementos del loop

//::for clasico con break y continue
let names = ['Naruto', 'Sasuke', 'Orochimaru', 'Itachi', ];

for(let i = 0; i < names.length; i++) {
    if(names[i] === 'Orochimaru') {
        break;//llega al elemento sale del loop
    }
    console.log(names[i]);
}


for(let i = 0; i < names.length; i++) {
    if(names[i] === 'Orochimaru') {
        continue;//salta elemento y continua loop
    }
    console.log(names[i]);
}

// ::forEach
// ::Sintaxys:::
// arr.forEach(function callback(currentValue, index, array) {
//     // tu iterador
// }[, thisArg]);


/*Tenemos que pasarle un array (una lista) ante del forEach para que funcione y como parametro tenemos que
pasarle una funcion > a esa funcion como parametro tienes que pasarle el elemento el nombre del elemento
que se va utilizar para iterar los elementos del array

forEach() ejecuta la función callback una vez por cada elemento presente en el array en orden ascendente.
 No es invocada para índices que han sido eliminados o que no hayan sido inicializados (Ej. sobre arrays sparse)

callback es invocada con tres argumentos:

el valor del elemento
el índice del elemento
el array que está siendo recorrido
también podemos iterar nodeList
*/

let names = ['Naruto', 'Sasuke', 'Orochimaru', 'Itachi' ];

names.forEach((name, index, array) => {
    console.log(name, index, array);
});

// retorno implicito de arrow function 

names.forEach(name => console.log(name));

names.forEach(function(item, index, array){
    if (item === 'Sasuke'){
        item = item.toUpperCase()
    } else {
        item = item.toLowerCase()
    }
    console.log(index, item,)
})

function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
// Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
[2, 5, , 9].forEach(logArrayElements);

let obj = {
    first: "John",
    last: "Doe"
}
  
// ES6
Object.keys(obj).forEach(key => console.log(key, obj[key]))
  
// ES5
Object.keys(obj).forEach(function(key) {
console.log(key, obj[key])
})

//::forEach con nodeList::
let nodo = document.createElement("div");
let infante1 = document.createElement("p");
let infante2 = document.createTextNode("hey");
let infante3 = document.createElement("span");

nodo.appendChild(infante1);
nodo.appendChild(infante2);
nodo.appendChild(infante3);

let list = nodo.childNodes;

list.forEach(
  function(currentValue, currentIndex, listObj) {
    console.log(currentValue + ', ' + currentIndex + ', ' + this);
  },
  'miEsteArg'
);

// '[object HTMLParagraphElement], 0, miEsteArg'
// '[object Text], 1, miEsteArg'
// '[object HTMLSpanElement], 2, miEsteArg'



// ::for in::
// ::Sintaxis::
// for (variable in objeto)
//   instrucción

/*
 Un bucle for...in solo itera sobre propiedades enumerables que no son símbolo. Los objetos creados a 
 partir de constructores integrados como Array y Object han heredado propiedades no enumerables de Object.prototype 
 y String.prototype, como el método indexOf() de String o el método toString() de Object. El bucle iterará 
 sobre todas las propiedades enumerables del objeto en sí y aquellas que el objeto hereda de su cadena de 
 prototipos (las propiedades de los prototipos más cercanos tienen prioridad sobre las de los prototipos 
 más alejados del objeto en su cadena de prototipos).


Utilizamos el index como elemento para iterar sobre el array names
si necesitas el index este for loop te va ser de gran ayuda
names.nivel = 10 podemos agregar propiedades de esta forma
*/

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`)
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"


/*¿Por qué usar for...in?
Dado que for...in está construido para iterar propiedades de objeto, no se recomienda 
su uso con ("arreglos") = [] y opciones como Array.prototype.forEach() y existe for...of, ¿cuál podría ser el uso de for...in?*/

// Iterar propiedades directas
// La siguiente función ilustra el uso de hasOwnProperty() — las 
// propiedades heredadas no se muestran.

var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Produce:
// "obj.color = red"







let nombres = ['Valentina', 'Alicia', 'Gabriel', 'Pedro']
//acá estamos agregando una propiedad de numeros al array de nombres el for in busca tambien a los elementos que 
//fueron agregados al array al prototipo, cualquier elemento que este modificando al prototipo en este caso una propiedad
nombres.numero = 10 
//::esto sería solo para el for in

// ::for of::


/*
La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como 
lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), TypedArray, Map, Set e 
iterables definidos por el usuario.

Lo primero que podemos obserbar es que ya no se encuentra el 10 y es que el 
for of no me muestra los elementos que se agregar al prototype ni porpiedades extras
que no esten en array original. 
Si solo quieres iterar sobre el array y ya va ser de gran ayuda, puedes usar continue y break
*/

let names = ['Naruto', 'Sasuke', 'Orochimaru', 'Itachi' ];
names.nivel = 10 
for (const name of names) {
    if(name === 'Sasuke') {
        continue
    }
    console.log(name);
}

// Sintaxis
// for (variable of iterable) {
//   statement
// }


let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31

// ::Iterando un String
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"

// ::Iterando un TypedArray
let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
  console.log(value);
}
// 0
// 255

// ::Iterando un Map
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3

// ::Iterando un Set
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3

// ::Iterando un objeto arguments
(function() {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);

// 1
// 2
// 3

// ::Iterando una colección del DOM

/*Iterando colecciones del DOM como un NodeList: el siguiente ejemplo añade la clase "read" 
a los párrafos (<p>) que son descendientes directos de un (<article>):*/
// let articleParagraphs = document.querySelectorAll("article > p");
// for (let paragraph of articleParagraphs) {
//    paragraph.classList.add("read");
// }



// :::Resumen:::

nombres.forEach((nombre) => {
    console.log(nombre)
})



// forEach nos permite iterar de la siguiente manera le tienes que pasar un array una lista ante del 
// array.forEach(() => { }) para que este funcione y como parametro tienes que pasarle una funcion,
// y como parametros a la funcion le tienes que pasarle el elemento el nombre del elemento.
// que se va utilizar para iterar sobre cada uno de los elementos del array. en este caso voy utilizar nombre
// en sentido singular que es lo que tiene sentido en mi ç
//si el if stasment tiene solo una linea podemos omitir los {}
//for in: sytanxys es limpia sigue los lineamientos de los nuevos for loop que tenemos en ECMASCRIPTS
//vemos que estamos utilizando index como elemento para iterar sobre el array nombres 

//for in contra: si quiere iterar directamente sobre los elementos del loop esto es una contra por que tienes 
//que ultizar el index y  el array para poder iterar sobre estos elementos, pero si necesitas el index este
//for loop te va ser de gran ayuda.
//otra cosa sobre el for in. estamos agregando la propiedad de numero al array del nombres que va a pasar como
//nos damos cuenta el esta agregando ahora  el elemento 10 el numero 10, a pesar de que no este dentro de array
//tiembién itera los elementos que fueron agregados al prototipo del array que esta modificando el protipo y
//cualquier otro elemento que este modificando el array original como en este caso una propiedad es pro y contra
//al mismo tiempo, puedes utilizar continuo y break 
//el in utiliza el index para iterar
// for(const index in nombres) {
//     console.log(nombres[index])
// }
// con for in si se ven la propiedades que agregas al prototype

//for of: utilizamos nombre para iterar y ya no necesitariamos el index, for of no muestra los elementos 
//que se agregan que se agregan al prototipo o ni propiedades extras que esten dentro del array original, si solo quiere 
//iterar sobre lo elementos y ya este for of te va ser de gran 
//ayuda en muchos casos de la vida cotindiana te va tocar iterar sobre listas elementos continuo o break se puede usar
//no me agrega propiedades como el index
// for(const nombre of nombres) {
//     if (nombre === 'Gabriel') {
//         continue
//     }
//     console.log(nombre)
// }
 