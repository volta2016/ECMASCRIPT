/*
Spread Operator
permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde son esperados.
*/

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

const array3 = [...array1, ...array2];

console.log(array3);
