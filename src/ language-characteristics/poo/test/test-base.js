let names = {
  firstName: "Kyo",
  lastName: "Rioku",
};

//console.log(names.firstName);
//console.log(names.hasOwnProperty("secondName"));
//console.log(names);

function Perro(nombre, edad) {
  let perro = Object.create(ObjetoConstructor);
  perro.nombre = nombre;
  perro.edad = edad;
  return perro;
}

let ObjetoConstructor = {
  habla: function () {
    return "¡Soy un perro!";
  },
};

let firulais = Perro("Firulais", 9);
console.log(firulais);

//class

class Animales {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }

  canta() {
    return `${this.nombre} puede cantar`;
  }

  baila() {
    return `${this.nombre} puede bailar`;
  }
}

let bango = new Animales("Bango", "Akita");
console.log(bango);
