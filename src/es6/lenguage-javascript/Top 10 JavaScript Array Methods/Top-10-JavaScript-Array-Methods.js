// 1. forEach()

// This method can help you to loop over array’s items.

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((item) => console.log(item));

// 2. includes()

// This method check if array includes the item passed in the method.

const arr2 = [1, 2, 4, 5, 7];

console.log(arr2.includes(1)); //true
console.log(arr2.includes(8)); //false

// 3. filter()

// This method create new array with only elements passed condition inside the provided function.

const arr3 = [1, 2, 3, 4, 5, 7, 9, 10];

// item(s) greater than 3
const filtered = arr3.filter((num) => num >= 3);
console.log(filtered);

// 4. map()

// This method create new array by calling the provided function in every element.

const numbers = [1, 2, 3, 4, 5, 7, 9, 10];

const oneAdded = numbers.map((num) => num + 1);
const mapear = numbers.map((num, index) => num + " " + "index:" + index);
const mapear2 = numbers.map((num, index) => `${num}  ${index}`); //es6
console.log("hola 0", oneAdded, "hola2", mapear);

// 5. reduce()

// The reduce() method applies a function against an accumulator
// and each element in the array (from left to right) to reduce it to a single value

const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((total, value) => total + value, 0); //always starts at 0, accu + sum
console.log(sum); // 21

//6. some()

//This method check if at least one of array’s item passed the condition. If passed, it return ‘true’ otherwise ‘false’.

const arr = [1, 2, 3, 4, 5, 6];
// at least one element is greater than 4?
const largeNum = arr.some((num) => num > 4);
console.log(largeNum); // output: true

const smallNum = arr.some((num) => num < 0);
console.log(smallNum);

//7. every()

//This method check if all array’s item passed the condition. If passed, it return ‘true’ otherwise ‘false’.
const arr = [1, 2, 3, 4, 5, 6];
const greaterFour = arr.every((num) => num > 4);
const greaterFour2 = arr.every((num) => (num) => 4); // see case
console.log(greaterFour, greaterFour2);

const lessTen = arr.every((num) => num > 10);
console.log(lessTen);

// 8. sort()

// This method used to arrange/sort array’s item either ascending or descending order.

const arr = [1,2,3,4,5,6];
const alpha = ['e', 'a', 'c', 'u', 'y']

// sort in descending order
  descOrder = arr.sort((a, b) => a > b ? -1 : 1);
  console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]


// sort in ascending order
ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']

const newOder = arr.sort()
console.log()

const  frutas = ['guindas', 'manzanas', 'bananas'];
console.log(frutas.sort()); // ['bananas', 'guindas', 'manzanas']

/*Si se provee compareFunction, los elementos del array son ordenados de acuerdo al valor que retorna dicha función de comparación. Siendo a y b dos elementos comparados, entonces:

Si compareFunction(a, b) es menor que 0, se sitúa a en un indice menor que b. Es decir, a viene primero.
Si compareFunction(a, b) retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes. Nota: el estandar ECMAscript no garantiza este comportamiento, por esto no todos los navegadores (p.ej.  Mozilla en versiones que datan hasta el 2003) respetan esto.
Si compareFunction(a, b) es mayor que 0, se sitúa b en un indice menor que a.
compareFunction(a, b) siempre debe retornar el mismo valor dado un par especifico de elementos a y b como sus argumentos. Si se retornan resultados inconsistentes entonces el orden de ordenamiento es indefinido.
Entonces, la función de comparación tiene la siguiente forma:*/

function compare(a, b) {
  if (a es menor que b según criterio de ordenamiento) {
    return -1;
  }
  if (a es mayor que b según criterio de ordenamiento) {
    return 1;
  }
  // a debe ser igual b
  return 0;
}

// 9. Array.from()

// This change all thing that are array-like or iterable into true array especially when 
// working with DOM, so that you can use other array methods like reduce, map, filter and so on.

const name = "frequency";
const nameArray = Array.from(name);

console.log(name, nameArray)


// working with DOM

// I assume that you have created unorder list of items in our html file.

const lis = document.querySelectorAll('li');
const lisArray = Array.from(document.querySelectorAll('li'));
// is true Array?
console.log(Array.isArray(lis));// output: false
console.log(Array.isArray(lisArray));// output: true


// 10. Array.of()

// This create array from every arguments passed into it.

const nums = Array.of(1, 2, 3, 4, 5, 6);
console.log(nums); // output: [1, 2, 3, 4, 5, 6]

const numbers = [1, 4, 9];
const raiz = numbers.forEach(num => {
  console.log(Math.sqrt(num))
});

//Math.sqrt()//devueleve la raiz
console.log('aqui undefined', raiz)

determina si un valor pasaso es un array

Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false

