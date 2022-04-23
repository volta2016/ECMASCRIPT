// Qué son  map() and forEach() ?
/*map y forEach son métodos auxiliares en una matriz para recorrer una matriz fácilmente. Solíamos recorrer una matriz, como a continuación, sin ninguna función de ayuda.*/

let array = ["1", "2", "3"];
for (var i = 0; i < array.length; i += 1) {
  console.log(Number(array[i]));
}

/*El ciclo for ha estado con nosotros desde el comienzo de la era de JavaScript. Toma 3 expresiones: el valor inicial, la condición y la expresión final.

Esta es una forma clásica de hacer un bucle en una matriz. Desde ECMAScript 5 han aparecido nuevas funciones para hacernos más felices.


## map

map hace exactamente lo mismo que hace el bucle for, excepto que map crea una nueva matriz con el resultado de llamar a una función proporcionada en cada elemento de la matriz que llama.

Toma dos parámetros: una función de devolución de llamada que se invocará más tarde cuando se llame a map o forEach, y la variable de contexto llamada thisArg que utilizará una función de devolución de llamada cuando se invoque.
*/

const arr = ["1", "2", "3"];
// callback function takes 3 parameters
// the current value of an array as the first parameter
// the position of the current value in an array as the second parameter
// the original source array as the third parameter
const cb = (str, i, origin) => {
  console.log(`${i}: ${Number(str)} / ${origin}`);
};
arr.map(cb);
// 0: 1 / 1,2,3
// 1: 2 / 1,2,3
// 2: 3 / 1,2,3

//La función de devolución de llamada se puede utilizar como se muestra a continuación.

arr.map((str) => {
  console.log(Number(str));
}); // el valor actual de una matriz como primer parámetro

//El resultado del mapa no es igual a la matriz original.

//const arr = [1]; //oroginal array
const new_arr = arr.map((d) => d); //new array
arr === new_arr; // false

// También puede pasar el objeto al mapa como thisArg

const obj = { name: "Jane" };

[1].map(function () {
  // { name: 'Jane' }
  console.dir(this);
}, obj);

[1].map(() => {
  // window
  console.dir(this);
}, obj);

/*
El objeto obj se convirtió en thisArg para map. Pero la función de devolución de llamada de flecha no puede obtener obj como thisArg.

## forEach

*/
