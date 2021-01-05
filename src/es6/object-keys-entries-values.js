// El método Object.keys() devuelve un array de las propiedades names de un objeto, 
// en el mismo orden como se obtienen en un loop normal

// sintaxis:
Object.keys(obj)

// example array
arrayOne = ['a', 'b', 'c'];
console.log(Object.keys(arrayOne));

// example object
let obj =  {1: 'kyo', 2: 'reita', 3: 'nosgov'};

console.log(Object.keys(obj));


// getFoo es una propiedad no enumerable
let my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 1;

console.log(Object.keys(my_obj));

// **Object.entries()**

// El método Object.entries() devuelve una matriz de pares propios de una 
// propiedad enumerable [key, value] de un objeto dado, 
// en el mismo orden que es proporcionado por for...in 
// (La diferencia es que un bucle for-in enumera las propiedades en la 
// cadena de prototipos).

// Descripción

// Object.entries() devuelve una matriz cuyos elementos son matrices correspondientes a 
// los pares de propiedades enumerables [clave, valor] que se encuentran 
// directamente sobre el objeto. El orden de las propiedades es el mismo 
// que se da al recorrer los valores de propiedad del objeto manualmente.

let number = { footer: 'rrss', list: 32}
console.log(Object.entries(number));

// array like object
let country = {0 : 'cl', 1: 'mx', 2: 'col'}
console.log(Object.entries(country))

// array like object with random key ordering

let mess = { 200: 'hard', 77: 'mid', 16: 'low' }
console.log(Object.entries(mess))

// getFoo is property which isn't enumerable
let myObj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); 

// non-object argument will be coerced to an object
console.log(Object.entries('footer'));

// iterate through key-value gracefully
let number = {a: 5, b: 7, c: 9};
for (let [key, value] of Object.entries(number)) {
    console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
}

// Or, using array extras
let number2 = {a: 5, b: 7, c: 9};
Object.entries(number2).forEach(([key, value]) => {
  console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
});

/*Converting an Object to a Map
The new Map() constructor accepts an iterable of entries. 
With Object.entries, you can easily convert from Object to Map: */

let obj = { foo: 'bar', baz: 42 };
let map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }

// *** Object.values() ***

/*El método Object.values() devuelve un array con los valores correspondientes 
a las propiedades enumerables de un objeto. Las propiedades son devueltas en 
el mismo orden a como lo haría un bucle for...in (la única diferencia es que 
un bucle for-in también enumera las propiedades en la cadena de prototipo 
de un objeto).*/

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));