/*


El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
*/

const users = [
  { id: 1, name: "John", age: 33 },
  { id: 2, name: "Kyo", age: 22 },
  { id: 3, name: "Ameley", age: 27 },
];

const isTrue = users.findIndex((user) => user.id === 4);
