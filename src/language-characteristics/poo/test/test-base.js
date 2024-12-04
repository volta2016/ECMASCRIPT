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

//class extends

/* class Animals {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sing() {
    return `${this.name} can sing`;
  }
  dance() {
    return `${this.name} can dance`;
  }
}

class Cat extends Animals {
  constructor(name, year, mustacheColor) {
    super(name, year);
    this.mustacheColor = mustacheColor;
  }

  mustache() {
    return `I have mustache color ${this.mustacheColor}`;
  }
}

let amy = new Cat("Amy", 7, "Brown");

console.log(amy.sing());
console.log(amy.dance());
console.log(amy); */

//el código anterior equivale a esto

function Animals(name, year) {
  let newAnimal = Object.create(ConstructorAnimals);
  newAnimal.name = name;
  newAnimal.year = year;
  return newAnimal;
}

let ConstructorAnimals = {
  sing: function () {
    return `${this.name} can sign`;
  },
  dance: function () {
    return `${this.name} can dance`;
  },
};

function Cats(name, year, colorMustaches) {
  let newCat = Animals(name, year); //super
  Object.setPrototypeOf(newCat, ConstructorCats);
  newCat.colorMustaches = colorMustaches;
  return newCat;
}

let ConstructorCats = {
  mustaches() {
    return `I have color mustaches ${this.colorMustaches}`;
  },
};

Object.setPrototypeOf(ConstructorCats, ConstructorAnimals);
const amy = Cats("Amy", 33, "violet");

console.log(amy.sing()); //Amy can sign
console.log(amy.mustaches()); //I have color mustaches violet
