//::Clases::
// En ES se incorporan al lenguaje clases para poder hacer Programación Orientada a Objetos más 
// facilmente (sin prototipos), soportan herencia, polimorfismo, superclases, instancias, métodos estáticos, 
// constructores, setters y getters.

// Definición de clase, constructor e instancia de objetos:


class Animal {
  //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
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


// ::::Herencia, polimorfismo, métodos estáticos, setters y getters::::


//con la palabra extends la clase Humano hereda de Animal
class Humano extends Animal {
   //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, edad, genero) {
    //con el método super() se manda a llamar el constructor de la clase padre
    super(nombre, edad, genero) 
    this.razonar = true;
    this._nacionalidad = 'Terrestre'
    this._ciudad = 'London'
  }


  //un método estático se pueden ejecutar sin necesidad de instanciar la clase
  static saludar() {
    console.log('Hola soy humano');
  }

    //Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
  set nacionalidad(pais) {
    this._nacionalidad = pais;
  }

  get nacionalidad() {
    return this._nacionalidad;
  }

  set ciudad(city) {
    this._ciudad = city;
  }

  get ciudad() {
    return this._ciudad; 
  }

  //métodos públicos de la clase redefinidos gracias al polimorfismo
  comunicar() {
    console.log('Me comunico hablando')
  }

  comer() {
    console.log('Como de todo soy omnívoro')
  }

  respirar() {
    console.log('Respiro oxigeno con ayuda de mis pulmones')
  }

  reproducir() {
    console.log('Me reproduzco sexualmente, soy mamífero y vivíparo')
  }

  pensar() {
    console.log('Pienso por que tengo intelecto')
  }
}

Humano.saludar()

let john = new Humano('John Lenon', 30, 'Maculino');
console.log(john)
john.comunicar()
john.comer();
john.respirar();
john.reproducir();
john.pensar();
john.nacionalidad = 'Reino Unido';
john.ciudad = 'Liverpool';
console.log(john.nacionalidad, john.ciudad);
console.log(john);

// todo el el code corre ok 😄