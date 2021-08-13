// Nivel de Bloques
// En ES5 los ámbitos de declaración (scope) estaban diseñados a nivel de funciones, con 
// ES6 podemos declarar funciones a nivel de bloque.

// En ES6, como en muchos otros lenguajes de programación, el bloque se define entre llaves 
// y genera un nuevo scope (block scope).


// sin Bloques

function f() {return 1;}

console.log(f());//imrpime 1

function f() {return 2}

console.log(f());//imrpime 2

console.log(f());//imrpime 2


// con Bloques

function f() {
  return 1;
}

console.log( f(), 'here is 1');//imrpime 1

{
  console.log(f());//imrpime 2

  function f() {
    return 2;
  }

  console.log( f());//imrpime 2
}


console.log( f(), 'hola');//imrpime 1
