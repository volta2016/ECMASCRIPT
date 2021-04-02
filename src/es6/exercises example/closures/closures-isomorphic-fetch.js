require('isomorphic-fetch');

/*Voy crear una función que me permita a mi recibir el dominio el cual
yo quiero ir a realizar consultas a través de una API y también yo quiero que este reciba el 
recurso o la ruta la cual yo quiero ir a consumir estos recursos

vamos hacer un especie de crud que nos permita a nosotros conectarnos a distintas APIS 
para eso nosotros vamos a necesitar isomorfic fetch, te permite utilizar la API  de fetch, también
en node


Cuál es la diferencia entre isomorphic-fetch and fetch?

FETCH es polyfill para navegadores que no tienen función de recuperación (caniuse.com/#search=fetch). 
Agregará la función de recuperación al objeto de la ventana de su navegador.

Mientras que isomorphic-fetch es la implementación de fetch tanto para node.js como para el 
navegador, construido sobre fetch polyfill.



Voy devolver un método el cual va tener un objeto de crear y también quiero 
que tenga un metod de get() para que vaya a buscar > en este caso el método de get
yo lo que quiero es que utilice fetch > donde yo quiero que utilice la url con
el dominio y también con el recurso, AHora lo que tengo que hacer es utulizar este
cruder pero con el dominio, pero para esto vamos a utilizar la API  de json
placeholder > es un servicio completamente gratuito al cual tu puedes realizar 
consultas.
De nuestro cruder creamos una base y con nuestra base tenemos un objeto de todos
todos. > nos va devolver create() y también get()

::Ahora yo pudo usar esta misma base 
const todos = base('todos')
para crear otros que no sea de todos
Vemos también que tan solo con unas pocas lineas me trajo también un objeto de usuario
por lo cual yo pude hacer uso de la técnica de los clousure, para poder construir
este objeto create() el cual me permitió a mi crear una interfaz donde yo puedo
buscar todos y lo mismo con los usuarios y aquí con la ayuda de la base que hemos creado
en conjunto los closures donde esta url esta viva siempre para base:
const base = cruder('https://jsonplaceholder.typicode.com') > esto quiere decir que dominio
siempre va ser esta url > y esto me va devolver una función recurso >  en esta caso esta
función va tener el valor del dominio que es esta url cruder('https://jsonplaceholder.typicode.com')
::Por lo cual podemos nosotros ir asignando al recurso de todos y users pero sin embargo el
dominio va ser siempre el mismo para estas veces de esta manera nosotros podemos hacer
una generalización donde escribiendo solamente una vez este code después podemos ir re utlilizando
con la ayuda de isomorphic-fetch con la ayuda de clousure y la interfaz que hemos creado
*/

/*Resumen Closures 
son una forma de composición que podemos utlizar en js, closures es el alcance lexico que tiene
una función al momento de nosotros ejecutarla, nosotros vamos a poder acceder al alcance de la var
que se encuentra la parte superior de la función y en base eso vamos a poder construir más funciones
utilizando los closures que a nosotros nos van ayudar para poder generalizar y poder construir más rápido
nuestras app
*/


const cruder = dominio => recurso => {
  const url = `${dominio}/${recurso}`

  return ({
    create: (x) => fetch(url, {
      method: 'POST',
      body: JSON.stringify(x)
    }).then(x => x.json()),
    get: () => fetch(url).then(x => x.json())
  })
}

const base = cruder('https://jsonplaceholder.typicode.com')
const todos = base('todos')
const users = base('users')

// todos.get().then(console.log)//aca podemos ver el listado completo de los todo
//todos.get().then(x => console.log(x[0]))//solo muestra el 1
users.get().then(x => console.log(x[0]))//solo muestra el 1