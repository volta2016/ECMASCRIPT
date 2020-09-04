//map
//Map crea un nuevo array con el resultado de la funcion indicada
//aplicada a cada uno de sus elementos
const numbers = [1,2,3,4,5];
let numMultiplicar = numbers.map(num => num * 2) 
// let numMultiplicar = numbers.map((num,index, array) => `${num} - ${index} - ${array}`)
console.log(numMultiplicar)

//filter
//crea un nuevo array con todos los elementos que cumplan la condición 
//por la función dada
const numbers = [1,2,3,4,5];
const mayorAtres =  numbers.filter(date => date >= 3);
const newArr_a = arr.filter(a => a === arr[4]);
console.log(mayorAtres);



//reduce
//ejecuta una función reductora sobre cada elemento de un array,
//devuelve como resultado un unico valor 
const numbers = [1,2,3,4,5];
//function normal
let total = numbers.reduce(function (previous, current) {
    return previous + current;
}, 0);
//es6 arrow function 
const numbers = [1,2,3,4,5];
let total2 = numbers.reduce((previous, current) => previous + current)

console.log(total2);


