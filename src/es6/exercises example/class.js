//::Clases::
// En ES se incorporan al lenguaje clases para poder hacer Programación Orientada a Objetos más 
// facilmente (sin prototipos), soportan herencia, polimorfismo, superclases, instancias, métodos estáticos, 
// constructores, setters y getters.

// Definición de clase, constructor e instancia de objetos:


class Animal {
  //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, edad, genero) {
    this.nombre = nombre,
    this.edad = edad,
    this.genero = genero
  }

  // metodos públicos de la clase
  comunicar() {
    alert('Me comunico con sonidos')
  }
  comer() {
    console.log('Ingiero alimentos')
  }
  respirar() {
    console.log('Respiro oxígeno')
  }
}




let leon = new Animal('Dalto', 30, 'macho')
let leonaKimba = new Animal('Dalto', 20, 'hembra')
console.log(leon, leonaKimba)

leon.comunicar();
leon.comer();
leon.respirar();