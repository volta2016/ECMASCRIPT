// ::Símbolos
/*Un Símbolo es un tipo de datos único e inmutable, puede ser utilizado 
como un identificador para las propiedades de los objetos.

Son útiles cuando queremos agregar métodos o atributos propios a objetos 
nativos del lenguaje o a los de alguna librería de terceros para evitar que, si existiése algún método o atributo con el nombre del que queremos crear evitar que el original se sobre escriba con esto se evita un antipatrón.

Cuando se recorran las propiedades de un objeto, las que sean definidas 
como símbolo no aparecerán.

Recorriendo los elementos de un Objeto:*/

let anObject = {
  name: 'Kyo',
  age: 37,
  email: 'contacto.kyo@gmail.com'
}


//Un símbolo se instancia sin new, porque no es un objeto y por tal no tiene constructor
email = Symbol('email');

//Asignación de un símbolo en un objeto
anObject[email] = 'hola.kyo@gmail.com';//evita que se sobre escriba 

// for (let item of anObject ) {
//   console.log(item);//Uncaught TypeError: anObject[Symbol.iterator] is not a function
// }

// VM118:12 Uncaught TypeError: anObject is not iterable
// si aplico el for in después del object corre:

for( let item in anObject ) {
  console.log(item); //Imprime name, age, email, recorre el objeto
}

console.log( Object.keys(anObject) ); // Imprime ["name", "age", "email"]
console.log( Object.getOwnPropertyNames(anObject) ); // Imprime ["name", "age", "email"]
console.log( Object.getOwnPropertySymbols(anObject) ); // Imprime [Symbol(email)]

console.log(
  anObject, //Imprime Object {name: "Kyo", age: 36, email: "contacto.kyo@gmail.com", Symbol(email): "contacto.kyo@gmail.com"}
  anObject.name, //Imprime "Kyo"
  anObject.age, //Imprime 36
  anObject.email, //Imprime "contacto.kyo@gmail.com"
  anObject[email] //Imprime "hola.kyo@gmail.com"
);

// Convirtiéndo un Objeto en Iterable:

let iterable = {
  0: 'Kyo',
  1: 37,
  2: 'hola.kyo@gmail.com',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};

for (let item of iterable) {
  console.log(item); //Imprime Jonathan, 36, jonmircha@gmail.com
}