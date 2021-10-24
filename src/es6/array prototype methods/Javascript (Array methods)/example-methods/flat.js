/*flat() 
Experimental: Esta es una tecnología experimental
El método flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.*/

//Aplanar matrices anidadas #03:

const arrayNumeros = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const flatSingle = arrayNumeros.flat();
console.log(flatSingle); //[ 0, 1, 2, 3, 4, 5 ]

const arrayNumerosDos = [1, 2, [3, 4, [5, 6]]];

const arrayPlano = arrayNumerosDos.flat(2);
console.log(arrayPlano); //nueva matriz con todos los elementos [ 1, 2, 3, 4, 5, 6 ]
