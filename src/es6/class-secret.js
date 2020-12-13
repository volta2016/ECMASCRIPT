/* Una class no es mas que una funcion - es una forma de trabajar con 
prototipos y su herencia.
En realidad no existen la clases, si no existe una forma sintaxtica agradable
para trabajar con herencia de prorotipos
*/

/*Vamos a ir un paso mas aya y vamos a mostrar que si hay herencia 
de prototipo de una forma mas cruda */

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
  // greeting(){
  //   console.log('hola desde sub class')
  // }
}

// let dev = new Developer('Ema', 24, 'frontend')
// dev.greetingDev()

// console.log(typeof Developer)
// Developer.prototype.greeting()//podemos acceder a greeting de Person gracias
// a la herencia de prototipos no es un herencia orientada a objetos

// __herencia de prototype con bind()___
// lo que voy hacer es pasarle contexto al método con bind()

Developer.prototype.greeting.bind({
  name: 'Ema',
  year: 24
})()