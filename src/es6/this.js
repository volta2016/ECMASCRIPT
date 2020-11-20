/* this
El hoisting ¿que es el hoisting?
Es el comportamiento por defecto de Javascript de mover todas las declaraciones
de funciones y variables declaradas con VAR al inicio de SCOPE
*/

console.log(this);

// function callThis() {
//   console.log(this);//this en este contexto apunta a nuestro objeto global
// }
// callThis();


// // function expressions 
// let callThis = function() {
//   console.log(this);//this en este contexto apunta a nuestro objeto global
// }
// callThis();

// where is this object
// This el objetoc contexto de javascript en donde se esta ejecutando el contexto actual
let character = {
  name : 'Kilua',
  id: 202090,
  activo: function() {
    this.name = 'Gon'//etos modificando el value
    console.log(this)//this pertenece a este objeto
  }
}

console.log(character.activo());

