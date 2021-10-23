/* :::map:::
sirve para recorrer un arreglo y aplicar una misma función a cada uno de los 
elementos de ese arreglo > quiere decir que transformo el array. Esto lo hace sin mutar el arreglo original.*/

const frutas = ["🍌", "🍏", "🍓"];

//explicit return
// const arrayFrutas = frutas.map((fruta) => {
//   return fruta;
// });

// console.log(arrayFrutas); //[ '🍌', '🍏', '🍓' ]

//es6

const arrayFrutas = frutas.map((fruta) => fruta);
console.log(arrayFrutas); //[ '🍌', '🍏', '🍓' ]

//otro ejemplo

// const animals = ["🐻", "🐯", "🦁"];

// const arrayAnimals = animals;

// arrayAnimals.push("🐶");

// console.log(animals); //[ '🐻', '🐯', '🦁', '🐶' ] muta

// construye un nuevo array con los resultados
// esto lo hace sin mutar el arreglo original

const animals = ["🐻", "🐯", "🦁"];
const nuevoArray = animals.map((animal) => animal);
animals.push("🐶 new");

console.log(nuevoArray); //[ '🐻', '🐯', '🦁' ]
console.log(animals); //[ '🐻', '🐯', '🦁', '🐶 new' ]
