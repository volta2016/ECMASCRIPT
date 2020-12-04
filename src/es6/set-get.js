// get() set() Getters y Setters
// Es una gran utilidad que tenemos en nuestros objetos.

/* Si llamamos solo a la función sin invocarla, como una prop
 En ves de acceder  acceder al fullname 
 el formato que esperamos nos regresa la función. Por que es la prop
 actual y lo que queremos es que nos regrese el valor, lo que podemos hacer
 acá es remover esta parte de la función y tratarlo como si fuera un método
 publico del objeto y le ponemos ante aquí get y esto ya lo podemos leer.
 Como si fuera un propiedad. También existe la forma de hacerle set() a esto
 set  asocia la propiedad de un objeto a una función que será llamada cuando haya un intento de asignar valor a esa propiedad.
 */


const persona =  {
  name: 'Alex',
  lastname: 'Grey',
  // fullname: function() {
  //   return `${this.name} ${this.lastname}`
  // }
  get fullname() {
    return `${this.name} ${this.lastname}`
  },
  set fullname(fullvalue) {
    const arreglo = fullvalue.split(' ');
    this.name = arreglo[0]
    this.lastname = arreglo[1]
  }
}

const {name, lastname } = persona
// console.log(name, lastname)

// console.log(`${persona.name} ${persona.lastname}`)
console.log(persona.fullname)
persona.fullname = 'Diego Maradona'// llamado a la función
console.log(persona.fullname)
