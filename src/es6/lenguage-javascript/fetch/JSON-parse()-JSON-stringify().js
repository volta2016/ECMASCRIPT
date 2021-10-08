/*:::¿ Cómo usar JSON.parse() y JSON.stringify() ?

Introducción
El objeto JSON, que está disponible en todos los navegadores modernos, tiene dos útiles métodos para manejar 
el contenido con formato JSON: parse y stringify. JSON.parse() toma una cadena JSON y la transforma en un objeto 
de JavaScript JSON.stringify() toma un objeto de JavaScript y lo transforma en una cadena JSON.*/

// ejemplo:

const myObj = {
  name: 'Skip',
  age: 2,
  favoriteFood: 'Steak'
};

const myObjStr = JSON.stringify(myObj);

console.log(myObjStr);
// "{"name":"Sammy","age":6,"favoriteFood":"Tofu"}"

console.log(JSON.parse(myObjStr));
// Object {name:"Sammy",age:6,favoriteFood:"Tofu"}