// ::Object.getOwnPropertyNames()

/*Resumen
El método Object.getOwnPropertyNames() devuelve un array con todas las propiedades 
(numerables o no) encontradas en un objeto dado.

Object.getOwnPropertyNames devuelve un array cuyos elementos son strings correspondientes a cada una de las propiedades
encontradas directamente en obj. El orden de las propiedades numerables en el array coincide con el expuesto para for...in 
loop (o para Object.keys) con respecto a las propiedades del object. El orden de las propiedades no-numerables del array, 
y de éstas respecto a las numerables, no está definido.
*/

// Sintaxis
Object.getOwnPropertyNames(obj)


var obj = { 0: "a", 1: "b", 2: "c"};
console.log(Object.getOwnPropertyNames(obj).sort()); // imprime "0,1,2,length"

var obj = { 0: "a", 1: "b", 2: "c"};
console.log(Object.getOwnPropertyNames(obj).sort()); // imprime "0, 2, 2"

// Imprime nombres de variables y valores usando Array.forEach
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  console.log(val + " -> " + obj[val]);
});
// imprime
// 0 -> a
// 1 -> b
// 2 -> c

// aclarar dudas obj[val]

// propiedad no-numerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; }, enumerable: false } });
my_obj.foo = 1;

print(Object.getOwnPropertyNames(my_obj).sort()); // imprime "foo, getFoo"


// Si se quiere solo las propiedades numerables, ver Object.keys o usar un for...in loop 
// (aunque esto devolvería propiedades numerables no directas del objeto pertenecientes a la 
// cadena de prototype a la que pertenezca, a menos que finalmente se filtre con hasOwnProperty()).

// tems de la cadena prototype no se listan:

function ParentClass () {
}
ParentClass.prototype.inheritedMethod = function () {
};

function ChildClass () {
  this.prop = 5;
  this.method = function () {};
}
ChildClass.prototype = new ParentClass;
ChildClass.prototype.prototypeMethod = function () {
};

alert(
  Object.getOwnPropertyNames(
    new ChildClass() // ["prop", "method"]
  )
)