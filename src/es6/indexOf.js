/* 
::::Array.prototype.indexOf()
El método indexOf() retorna el primer indice en el que  se puede encontrar un elemento
dado dentro del array retorna -1 si el elemento no se encuntra dentro del array
Sintaxis

array.indexOf(searchElement[, fromIndex])

Indica el índice por el que se comienza la búsqueda. Por defecto es 0,
por lo que se busca en todo el array. Si el índice es mayor o igual a la longitud del array, 
devuelve -1, ya que no se buscaría en el array. Si el valor es negativo, se toma restando 
posiciones desde el final del array. Hay que tener en cuenta que aunque el índice sea negativo, 
la búsqueda seguirá realizándose en un orden incremental. Si el índice calculado es menor de 0, 
la búsqueda se realizará por todo el array.
*/

// Syntax
// string.indexOf(searchvalue, start)


let str = 'Winter is coming';
let position = str.indexOf('coming');

console.log(position);

// El siguiente ejemplo usa indexof() para localizar valores en un array 

var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

// Encontrar todas las apariciones de un elemento


let indices = [];
let array = ['a', 'b', 'a', 'c', 'a', 'd'];
let element = 'a';
let idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]


// Encontrar si un elemento existe en la matriz o no y actualizar la matriz
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('La nueva colección de vegetales es: ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' ya existe en la colección de verduras.');
    }
}

let veggies = ['patata', 'tomate', 'chiles', 'pimientoverde'];

updateVegetablesCollection(veggies, 'espinaca');
// La nueva colección de verduras es : patata, tomate, chiles, pimientoverde, espinaca
updateVegetablesCollection(veggies, 'espinaca');
// La espinaca ya existe en la colección de verduras.