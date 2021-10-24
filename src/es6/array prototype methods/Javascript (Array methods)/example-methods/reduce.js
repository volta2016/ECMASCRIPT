/*::reduce()::
El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.*/

const numeros = [1, 2, 3, 4, 5];

//Sumar todos los números:

const sumarNumeros = numeros.reduce((acc, current) => acc + current);

// const sumarNumeros = numeros.reduce((acc, current) => {
//   return acc + current;
// }, 0);

console.log(sumarNumeros);

/*
si proporcionas un valorInicial, el resultado sería como este:

[0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
  return valorAnterior + valorActual;
}, 10);

// Primera llamada
valorAnterior = 10, valorActual = 0, indice = 0

// Segunda llamada
valorAnterior = 10, valorActual = 1, indice = 1

// Tercera llamada
valorAnterior = 11, valorActual = 2, indice = 2

// Cuarta llamada
valorAnterior = 13, valorActual = 3, indice = 3

// Quinta llamada
valorAnterior = 16, valorActual = 4, indice = 4

// el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]

// Valor Devuelto: 20
*/

//Aplanar matrices anidadas #01:

const arrayNumeros = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const soloNum = arrayNumeros.reduce((acc, curr) => acc.concat(curr));
console.log("array de solo numeros", soloNum);

//Aplanar matrices anidadas #02:

const flatSingle = [].concat(...arrayNumeros);
