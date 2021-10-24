/*
::find::
El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.*/

const users = [
  { id: 1, name: "John", age: 33 },
  { id: 2, name: "Kyo", age: 22 },
  { id: 3, name: "Ameley", age: 27 },
];

const findKyo = users.find((user) => user.id === 2);
console.log(findKyo);

//utilizando destructuring
const { age, id } = users.find((user) => user.id === 2);
console.log(age, id);
