/*
::some():::
comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada
*/

const users = [
  { id: 1, name: "John", age: 33 },
  { id: 2, name: "Kyo", age: 22 },
  { id: 3, name: "Ameley", age: 27 },
];

const exist = users.some((user) => user.id === 2);

console.log(exist); //true
