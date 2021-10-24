/*::filter()::
el método filter() crea un nuevo array con todos los elementos que cumplan la condición
implementada por la función dada 

*/

const users = [
  { id: 1, name: "John", age: 33 },
  { id: 2, name: "Kyo", age: 22 },
  { id: 3, name: "Ameley", age: 27 },
];

//filtrar a los mayores que 25
const filterUsers = users.filter((user) => user.age >= 25);

console.log(filterUsers);

//eliminar user por id
const filterUserId = users.filter((user) => user.id !== 2);

console.log("eliminar id 2", filterUserId);
