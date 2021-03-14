// ::Array.prototype.sort()

/* El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. 
La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición 
del valor del string de acuerdo a su valor Unicode.ç

Parámetros
compareFunction
Opcional. Especifica una función que define el modo de ordenamiento. Si se omite, el array 
es ordenado atendiendo a la posición del valor Unicode de cada caracter, según la conversión 
a string de cada elemento.

Valor devuelto
El array ordenado.

Descripción
Si no se provee compareFunction, los elementos son ordenados convirtiéndolos a strings y comparando 
la posición del valor Unicode de dichos strings. Por ejemplo, "Cherry" viene antes que "banana"  
(porque las mayúsculas van antes que las minúsculas en la codificación Unicode) . En un ordenamiento numérico, 
9 está antes que 80, pero dado que los números son convertidos a strings y ordenados según el valor Unicode, 
el resultado será "80" antes que "9".
*/


var frutas = ['guindas', 'manzanas', 'bananas'];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

var puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

var cosas = ['word', 'Word', '1 Word', '2 Words'];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.

/*Si compareFunction(a, b) es menor que 0, se sitúa a en un indice menor que b. Es decir, a viene primero.
Si compareFunction(a, b) retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a 
todos los elementos diferentes. Nota: el estandar ECMAscript no garantiza este comportamiento, por esto 
no todos los navegadores (p.ej.  Mozilla en versiones que datan hasta el 2003) respetan esto.
Si compareFunction(a, b) es mayor que 0, se sitúa b en un indice menor que a.
compareFunction(a, b) siempre debe retornar el mismo valor dado un par especifico de elementos a y b 
como sus argumentos. Si se retornan resultados inconsistentes entonces el orden de ordenamiento es indefinido.
Entonces, la función de comparación tiene la siguiente forma:*/

function compare(a, b) {
  if (a es menor que b según criterio de ordenamiento) {
    return -1;
  }
  if (a es mayor que b según criterio de ordenamiento) {
    return 1;
  }
  // a debe ser igual b
  return 0;
}
Para comparar números en lugar de strings, la función de comparación puede simplemente restar b de a. La siguiente función ordena el array de modo ascendente:

function compareNumbers(a, b) {
  return a - b;
}
El metodo sort puede ser usado convenientemente con function expressions (y closures):

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]

// Los objectos pueden ser ordenados por el valor de una de sus propiedades.

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});


/*Ejemplos
Ordenando un array
Un array de elementos string, sin especificar una función de comparación:*/

var arr = [ 'a', 'b', 'Z', 'Aa', 'AA' ];
arr.sort();  //[ 'AA', 'Aa', 'Z', 'a', 'b' ]
Un array de elementos numéricos,  sin función de comparación:

var arr = [ 40, 1, 5, 200 ];
arr.sort();  //[ 1, 200, 40, 5 ]
Un array de elementos numéricos, usando una función de comparación:

var arr = [ 40, 1, 5, 200 ];
function comparar ( a, b ){ return a - b; }
arr.sort( comparar );  // [ 1, 5, 40, 200 ]
Lo mismo pero usando una función anónima normal:

var arr = [ 40, 1, 5, 200 ];
arr.sort(function(a,b){return a - b;});  // [ 1, 5, 40, 200 ]
Lo mismo escrito más compacto mediante una función flecha:

var arr = [ 40, 1, 5, 200 ];
arr.sort((a,b)=>a-b);  // [ 1, 5, 40, 200 ]






