// ::Object.keys()::

/*Resumen
El método Object.keys() devuelve un array de las propiedades names de un objeto, en el mismo 
orden como se obtienen en un loop normal */

// Sintaxis

Object.keys(obj)

/*::Parámetros
obj
El objeto cuyas propiedades enumerables serán devueltas.

::Valor de retorno
Un array de strings que representan toda las propiedades  del objeto*/

var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// arreglo como objeto
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// arreglo como objeto con nombres ordenados aleatoriamente
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

// getFoo es una propiedad no enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // console: ['foo']



