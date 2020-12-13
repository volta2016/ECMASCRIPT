/*Un constructor es una función se jecuta cuando se crea un objeto de la 
class
*/
// /example 1_______/ 
class Person {
  constructor(name, year) {
    this.name = name
    this.year = year
  }
  greeting() {
    return `Hola mi nombre es : ${this.name} 
    mi edad es: ${this.year}
    `
  }
}

let tutor = new Person('Kyo', 22)
let tutor2 = new Person('Mike', 28)

console.log(tutor2.name, tutor2.year)
console.log(tutor.greeting())


// /example 2 Métodos Estáticos_______/

/* Son llamados sin la necesidad de llamar la clase, lo cual es de muchisima
utilidad para crear un metodo Estático usamos la palabra reservada static,
seguida del nombre que va recibir la funcion.

de esta forma no podemos acceder
tutor.definition()
pero de la siguiente si:
Persona.definition()
*/

class Person {
  constructor(name, year) {
    this.name = name
    this.year = year
  }
  greeting() {
    return `Hola mi nombre es : ${this.name} 
    mi edad es: ${this.year}
    `
  }
  static definition() {
    console.log(`Una persona es = a un ser humano`)
  }
}

let tutor = new Person('Kyo', 22)
Person.definition()

// /example 2 Métodos Herencia_______/

/* si yo no tengo un constructor definido en mi clase que hereda de Persona
o (sub class) podemos usar el constructor de la class persona.
*/

class Person {
  constructor(name, year) {
    this.name = name
    this.year = year
  }
  greeting() {
    console.log(`Hola mi nombre es : ${this.name} mi edad es: ${this.year}`) 
  }
  static definition() {
    console.log(`Una persona es = a un ser humano`)
  }
}

class Developer extends Person {
  
  greetingDev() {
    this.greeting()
    console.log('Soy un desarrollador de sofware')
  }
}

let dev = new Developer('Ema', 24)
dev.greetingDev()

Developer.definition()

// /example 2 Métodos Constructor_______/

/*
Vamos a construcuir el construcor para Developer pero aun vamos 
seguir usando el de Person, para eso vamos aplicar 
super()
nos va permitir obtener las propiedades de la class la cual estamos
heredando
estamos heredando
super() resumen:
nos permite usar el constructor de la class padre en una class heredada o subclass.
this.greeting() va buscar el saludar de su propio contexto que es greeting()
de las sub class
*/


class Person {
  constructor(name, year) {
    this.name = name
    this.year = year
  }
  greeting() {
    console.log(`Hola mi nombre es : ${this.name} 
    mi edad es: ${this.year}`) 
  }
  static definition() {
    console.log(`Una persona es = a un ser humano`)
  }
}

class Developer extends Person {
  
  constructor(name, year, tipe) {
    super(name, year)
    this.tipe = tipe
  }

  greetingDev() {
    this.greeting()
    // super.greeting()//va apuntar al metodo de la class padre contexto superior
    console.log(`Soy un ${this.tipe} developer`)
  }
  greeting(){
    console.log('hola desde sub class')
  }
}

let dev = new Developer('Ema', 24, 'frontend')
dev.greetingDev()