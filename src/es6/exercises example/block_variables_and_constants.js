// Variables de bloque y constantes


// Variables de bloque
// En ES se agrega una nueva forma de definir variables usando la palabra let, 
// se diferencia de var en que el scope de una variable definida con let es, el bloque en 
// el cual se encuentra la variable y no la función.

let x = 'Hola naruto';

if(true) {
   let x = 'hola kenshin';
  console.log(x); // Imprime en consola Hola Jon
}

console.log(x); // Imprime en consola Hola kEnAi


for(let i = 0; i < 5; i++) {
  console.log(i);// Imprime del 0 al 4
}

console.log(i);// Imprime Uncaught ReferenceError: i is not defined