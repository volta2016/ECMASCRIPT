// ::iteradores

// Un Iterador es un mecanismo que tienen los lenguajes de 
// programación para recorrer secuencialmente distintas estructuras de datos.

// Para que un objeto sea iterable en JavaScript es necesario que:

// Implemente el tipo Symbol.iterator.
// Implemente la función next que devuelve un objeto con dos valores:
// 1-. done que indica si ha terminado de iterar y
// 2-. value que devuelve el valor actual.

// Ejemplos de Iteradores:

console.log(typeof String.prototype[Symbol.iterator]); // Imprime function
console.log(typeof Array.prototype[Symbol.iterator]); // Imprime function
console.log(typeof Map.prototype[Symbol.iterator]); // Imprime function
console.log(typeof Set.prototype[Symbol.iterator]); // Imprime function
console.log(typeof Object.prototype[Symbol.iterator]); // Imprime undefined


// Recorriendo iteradores con el bucle for...of, que permite recorrer objetos iterables:

// antes

var anArray = ['Hola', 1, true, {}],
  aString = 'Hola soy iterable';

for (var i = 0; i < anArray.length; i++) {
  console.log(anArray[i]);
}

for (var i = 0; i < aString.length; i++) {
  console.log(aString[i]);
}

// ahora
let anArray = ['Hola', 1, true, {}],
  aString = 'Hola soy iterable';

for (element of anArray) {
  console.log(element)
}

for (character of aString) {
  console.log(character);
}



