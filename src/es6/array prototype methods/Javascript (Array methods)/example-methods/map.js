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

//ejercicios:

const users = [
  { name: "John", age: 33 },
  { name: "Kyo", age: 22 },
  { name: "Ameley", age: 99 },
];

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Devolver solo el name en un nuevo array
const newUser = users.map((user) => user.name);
console.log(newUser);

// Devolver nuevo array con numeros * 2

const multiplicar = numeros.map((number) => number * 2);

console.log(multiplicar);
