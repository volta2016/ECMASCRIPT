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

console.log(position);//10

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


// otros ejemplos

let str = 'Winter is coming';
let position = str.indexOf('coming');

console.log(position);//10

// El método indexOf distingue entre mayúsculas y minúsculas. Por ejemplo, la siguiente expresión devuelve -1.

let str = 'Winter is coming';
let position = str.indexOf('winter');

console.log(position);

// no está presente en la Cadena. Entonces volverá a la posición -1.


const str = 'Winter is coming';
let count = 0;
let position = str.indexOf('i');

while (position !== -1) {
  count++;
  position = str.indexOf('i', position + 1);
}

console.log(count);//3 veces i dentro de str

// Use indexOf () para contar las apariciones de una letra en 
// String Cuentemos el número de apariciones de la letra b en la Cadena.
// recuerda que este method es case sensitive

const str = 'Millie Bobby Brown';
let count = 0;
let position = str.indexOf('b');

while (position !== -1) {
  count++;
  position = str.indexOf('b', position + 1);
}

console.log(count);//2


const str = 'Millie Bobby Brown';
if (str.toLowerCase().indexOf("millie bobby brown") === -1) { 
  console.log('Match Not found');
}
else {
  console.log('Match found')
}
// Match found

// Javascript includes() vs. indexOf()
/* La diferencia entre el método includes () y el método indexOf () 
es que el método Javascript string includes () determina si una 
cadena puede encontrarse dentro de otra cadena, devolviendo verdadero 
o falso según corresponda. El método indexOf () devuelve un index dentro 
del objeto String que llama de la primera aparición de un valor especificado, 
comenzando la búsqueda en fromIndex ().*/

// String indexOf() function with regex

// Veamos el ejemplo anterior, y si encontramos la coincidencia, imprimirá la coincidencia encontrada, de lo contrario no.

const str = 'Millie Bobby Brown';
if (!/millie/i.test(str)) {
  console.log('Match Not found');
}
else {
  console.log('Match found')
}
// output Match Not found

// Difference between String indexOf() and search()

// Javascript search() function takes the regular expression, which allows you to match 
// against more sophisticated patters, case-insensitive strings, etc.

// An indexOf simply matches the literal String. However, indexOf also allows you to specify 
// a beginning index.

/*Conclusion
El método Javascript String indexOf () devuelve la posición de 
la primera aparición de un valor especificado en una cadena o una
matriz. Si desea encontrar la posición de un valor especificado en String, 
utilice el método Javascript String indexOf (). Si desea encontrar un índice del 
elemento en particular en la matriz, utilice el método indexOf () de la matriz de Javascript.*/

