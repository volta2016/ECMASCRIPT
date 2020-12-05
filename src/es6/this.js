/* this
El hoisting ¿que es el hoisting?
Es el comportamiento por defecto de Javascript de mover todas las declaraciones
de funciones y variables declaradas con VAR al inicio de SCOPE
*/

console.log(this);

// function callThis() {
//   console.log(this);//this en este contexto apunta a nuestro objeto global
// }
// callThis();


// // function expressions 
// let callThis = function() {
//   console.log(this);//this en este contexto apunta a nuestro objeto global
// }
// callThis();

// where is this object
// This el objetoc contexto de javascript en donde se esta ejecutando el contexto actual
let character = {
  name : 'Kilua',
  id: 202090,
  activo: function() {
    this.name = 'Gon'//etos modificando el value
    console.log(this)//this pertenece a este objeto
  }
}

console.log(character.activo());


// con el método el filter voy a escuchar el eventoChange de ese selector
// Lo coloco como función normal para invocar a su this por que quiero hacerle referencia a el mismo
// example 1
filter.addEventlistener('chage', function() {
	
})

// example 2
search.addEventListener('submit', function(event) {
  const formData = new FormData(this)
  const title = formData.get('title')
})

// example 3
video.addEventListener('click', function() {
  this.classList.add('hidden')
  console.log('click')
  import('./player.js').then()
})


// ::::caso de arrow function:::::

//En el caso de las arrow function no hay un this, tenemos que heredar el this.
//esto es algo bueno malo dependiendo de las situacion. 

const myFunction = (name) => {
  this.name = `${name} :)`
}

// No va a tomar un contexto propio como este caso que vimos con myFunction 
// pero con new instanciado, acá lo que va hacer es tomar un contexto superior (f() 
// window o node )esta arrow function esta metida dentro de otro callback dentro de otra función normalita como por ejemplo esta:

// las funciones tienen su propio this
function name(name) {
  return this.name = `${name} :)`
}

var user = new name('Kyo')

// O vas llegar al contexto global de window o de node pero en un arrow no vamos a 
// tener un this no vamos a tener un valor encapsulado { } dentro de las arrow function
