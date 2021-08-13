Object.entries()

/*El método Object.entries() devuelve una matriz de pares propios de una propiedad 
enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado 
por for...in (La diferencia es que un bucle for-in enumera las propiedades en la 
cadena de prototipos).*/


// Sintaxis
Object.entries(obj)

/*::Parámetros
obj
The object whose enumerable own property [key, value] pairs are to be returned.

::Valor de retorno
An array of the given object's own enumerable property [key, value] pairs.*/

// Ejemplos
let obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
let an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
let my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.entries(my_obj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo'), 'hey'); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// iterate through key-value gracefully
let obj2 = {a: 5, b: 7, c: 9};
for (let [key, value] of Object.entries(obj2)) {
    console.log(key + ' ' + value + ' for of'); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
    console.log(key + ' ' + value + ' ok'); // "a 5", "b 7", "c 9"
});
