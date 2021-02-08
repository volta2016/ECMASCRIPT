//***Todo sobre function y arrow function***

// sintaxys funcion normal

function myFunction() {
  return 'esta funcion pura retorna un valor'
}

myFunction()

// funcion anónima

function() {
  return 'esta funcion pura retorna un valor'
}

// la manera de ejecutar una function anónima o en caso de una arrow function 
// como la vemos en el ejemplo, seria que una función por parametro reciba otra función y la 
// auto ejecuta por ejemplo:

// cuando aplicas un Listener 

button.addEventListener('click', function() {
  // lógica
})

// aquí puedes poner una función anónima y tranquilamente esa sintaxys
// te puede funcionar

// sintaxys arrow function
// una arrow function siempre es anónima 

// sintaxys arrow function

() => {
  return 'esta es un arrow function retorna un valor'
}

// como aplicar

const mesagge = () => {
  return 'esta es un arrow function retorna un valor'
}

mesagge()

// ahora como aplicas la funcionalidad que tiene myFunction que es un funcion
// normal, se replique en una arrow function o funcion anónima de declararla a invocarla
// para esto tenemos que entrar al mundo de las expresiones

/*Expresiones 
para darle una referencia a una function 
tenemos que usar una expresion como por ejemplo esta
*/

// Exresion de función

const myFunction = function() {
  return 'esta es una expresion de función'
}

// Expresión de arrow Function

const myFunction = () => {
  return 'esta es una expresion de arrow function'
}

// Una arrow function o función de flecha es lo mas común de utilizar
// recuerda que existe let y const tu puedes poner la que quieras

// Vamos a ver las particularidades que son solo de las arrow function 

// ***Sugar syntax en Arrow function***


// 1
const myFunction = () => {
  return 'esta es una expresion de arrow function'
}


// Retorno en una linea
// cuando quieres retornar un valor lo puedes hacer en una sola linea
// no coloco las llaves, ni el return solamente el valor o la operación
// que va retornar
// ¿ puedo colocar un for o un if ? no puedo

// 2
const myFunction = () => 'esta es un arrow function retorno en una linea'

// para usar es gusto de cada uno, pero la de la sintaxis completa el ejemplo 1
// es es más expresiva se entiende, puedes debbugear y no queda en una linea 
// tan grande

// Cuando trabajas con un 1 solo parametro

const myFunction = (param) => `esta es la funcion con ${param}`

const myFunction = param =>  `esta es la función con ${param}`
// puedes evitar colocar los 2 parentesis

// Cuando no hay parametros dentro de la función

const myFunction = () => `esta es una una función sin param `

// otra forma
const myFunction = _ => `esta es una función sin param`

// quiere decir que no hay param el _

//** Hoisting **

// Las function hacen hoisting
// estoy invocando antes a name y luedo declarando la función name
// si aplica esto en la consola del navegador va correr

name()
function name() {
  return 'Kyo'
}

// hoisting o elevamiento lo que va hacer en caso de las funciones normales, va tomar esas declaraciones
// y las va poner al inicio del programa, las va elevar. Tu función que esta debajo del llamado realmente la
// va a mover a la parte superior por eso funciona eso no se ve el code, ocurre por detrás.

// > ::const o la misma funcion en version arrow function no hace hositing::
name()
const name = () => {
  return 'kyo'
}
// no puedes acceder a name ante de su inicializacion

// me evita el hoisting si ocupo arrow function
// esto pasa con var, let y const donde el hoisting se evita

// Nota: var si hace hoisting pero se coloca al inicio como un valor undefined
// es por eso que te dice que name no es una función por cuando hace hoisting y es undefined

//***This*** 
//las funciones normales declaran su propio this 
// Es buenisimo para trabajar orientado a objeto para crear seudo clases
// simplemente con funciones declara todo un contexto dentro de ella para no salirnos
// del scope

function myName(name) {
  this.name = `hola mi nombre es ${name}`
}

let user = new myName('Kyo')
//estoy haciendo un variable donde estoy guardando una instancia de mi función
// por que la estoy usando de manera de class
console.log(user.name)

// En el caso de las arrow function NO tienen this tenemos que heradar el this
// esto es algo bueno o malo dependiendo de la situación.

// no va reacionar a un contexto propio como en este caso es myName con arrow, aca lo que va hacer es tomar
// un contexto superior, en un arrow function no vamos a tener un valor ecapsulado dentro de esta
// función 

const myName = (name) => {
  this.name = `hola mi nombre es ${name}`
}

// Ejemplo Indentación de un timer

function time() {
  this.seg = 0//me va dar undefined 
  setInterval( function () {
    this.seg++//a undefined
    console.log(this.seg)
  }, 1000)
}

new time()

// esto si lo aplico dentro de la consola me va funcionar pero me va devolver un 
// NaN qu esignifica NaN not a number, por que this.seg > me va a devolver undefined.
// A undefined yo le voy querer sumar ++ time en el pilot de la consola nos dice que 
// time {seg: 0}
// ¿Por qué se debe esto ? es porque he declarado this.seg en el contexto de time.
// pero la función que esta dentro del set Interval es otro contexto, donde no he inicializado
// un numero para poder sumarle entonces que al sumarle me da undefined y no es numero por que intento
// hacer esa transformación de undefined a un numero, pero no funciona

// ***Identaciones de funciones [fix]***

function time(){
  const self = this
  self.seg = 0
  setInterval(function() {
    self.seg++
    console.log(self.seg)
  }, 1000);
}

new time()

// el mismo self hace la invocación dentro del intervalo
// como se mejoro esto gracias a la arow function deja pasar al contexto del this
// superior entonces si combinamos time con una función normalita que declara su contexto
// su this y luego al intervalo le pasamos una función pero que sea una arrow function,
// pero como deja pasar al this superior this va hacer invocación al this de time :)
// esto es mas legible


function time() {
  this.seg = 0
  setInterval(() => {
    this.seg++
    console.log(this.seg)
  }, 1000)
}

new time()
console.log(new time())

// ambos mundo puedes convivir si los entiendes
// this.seg = 0 dentro de time delclara su propio contexto su this
// en el browser this es window 

// otro ejemplo esto es algo que nos ocurre en browser todo el tiempo
// este es un listener cuando hacemos un click

const $user = document.querySelector('#user')
$user.addEventListener('click', () => {
  console.log(this.id)
})

// esto nos genera un error ya que apunta this al contexto superior

// si ponemos un arrow function > va a pasar al contexto superior
// si la ponemos en la raiz de nuestro script posiblemente va tomar >  window 
// o si estamos en cualquier otro contexto va a tomar el contexto superior
// y si a eso le ponemos this.id probablemente no los va dar el id de nuestro 
// selector nos va dar indefinido.

// **Si lo quequisiéramos cada ves que le dieramos click a ese elemento saber
// cual es su id** su clase algo particular de ese selector, es mejor crear un contexto
// SOLAMENTE EN ESO y utilizar una ::función:: y esto si me devolviera user.


const $user = document.querySelector('#user')
$user.addEventListener('click', function() {
  console.log(this.id)
})

// Esto es un ejemplo que dependiendo el caso de uso te hace aplicar una arrow function o
// una función normal

// analicemos cuando aplico el console.log($user.id) también lo llamo
// esto funciona pero esto es pensando que user es selector único.
// solamente es para este caso de uso
const $user = document.querySelector('$user')
$user.addEventListener('click', () => {
  console.log($user.id)
})


// que tal que si user es un array de elementos y a este array dinamicamente le estoy
// poniendo listener a cada uno y en vez de ponerle un id que seria un atributo único 
// mas bien estoy leyendo una clase, estas clases están condicionadas a otras cosas.
// Yo quiero evaluar ese valor dinámico para poder una condición dentro de mi listener,
// te vas poner hacer sobre ingeniería cuando realmente podrías usar solamente un
// función normal que crea su propio contexto su propio this
