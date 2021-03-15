Object.prototype.hasOwnProperty

/*Resumen
El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada.
*/

// Sintaxis
obj.hasOwnProperty(prop)

o = new Object();
o.prop = 'exists';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');   // returns true
changeO();
o.hasOwnProperty('prop');   // returns false

// El siguiente ejemplo diferencia entre propiedades directas y propiedades heredadas a través de la cadena prototype:

o = new Object();
o.prop = 'exists';
o.hasOwnProperty('prop');             // returns true
o.hasOwnProperty('toString');         // returns false
o.hasOwnProperty('hasOwnProperty');   // returns false

// ::Ejemplo: Iterando sobre las propiedades de un objeto
// El siguiente ejemplo muestra como iterar sobre las propiedades de un objeto sin ejecutar 
// sobre propiedades heredadas. Observe que el bucle for..in ya está no solo iterando elementos enumerables, por 
// consiguiente uno no debería asumir que basado en la falta de propiedades no numerales mostrando en el 
// bucle que hasOwnProperty por si misma no está solo es estrictamente para iterar elementos numerados 
// (como con Object.getOwnPropertyNames()).


var buz = {
  fog: 'stack'
};

for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
      alert("this is fog (" + name + ") for sure. Value: " + buz[name]);
  }
  else {
      alert(name); // toString or something else
  }
}


// ::Ejemplo: hasOwnProperty como una propiedad
// JavaScript no protege el nombre de la propiedad hasOwnProperty; en consecuencia, si existe 
// la posibilidad  de que un objeto pudiera tener la propiedad con ese nombre, es necesario usar 
// un externo hasOwnProperty para obtener los correctos resultados:

var foo = {
  hasOwnProperty: function() {
      return false;
  },
  bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // always returns false

// Use another Object's hasOwnProperty and call it with 'this' set to foo
({}).hasOwnProperty.call(foo, 'bar'); // true

// It's also possible to use the hasOwnProperty property from the Object property for this purpose
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true



