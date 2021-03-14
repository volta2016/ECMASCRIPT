//::Object.values()

/*El método Object.values() devuelve un array con los valores correspondientes a las 
propiedades enumerables de un objeto. Las propiedades son devueltas en el mismo orden 
a como lo haría un bucle for...in (la única diferencia es que un bucle for-in también 
enumera las propiedades en la cadena de prototipo de un objeto).*/

// Sintaxis
Object.value(obj);

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]


// Ejemplos
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array como objeto
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array como objeto con una ordenación aleatoria de las claves
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo no es una propiedade enumerable, por lo que como se observa, no se devuelve
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// parámetros que no son Objetos se fuerzan a que se comporten como tal
console.log(Object.values('foo')); // ['f', 'o', 'o']
