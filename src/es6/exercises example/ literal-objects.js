// **Objetos Literales**
Atajos en la escritura

// antes 

let nombre = 'Doki',
  edad  = 4;

let perro = {
  nombre: nombre,
  edad: edad,
  ladrar : function() {
    alert('guau guau!');
  }
};

console.log(perro)
console.log(perro.ladrar())

// ahora shorhand property name es6

let nombre = 'Dalto',
  edad  = 8;

let canino = {
  nombre,
  edad,
  ladrar() {
    alert('guau guau!')
  }
}

console.log(canino);
canino.ladrar();


// **Nombres de atributos y métodos calculados (o computados):**
let nombreAtributo = 'nombre',
  nombreOtroAtributo = 'ad',
  nombreMetodo = 'ladrar';

const dog = {
  [nombreAtributo] : 'Dalto',
  [`ed${nombreOtroAtributo}`] : 4,
  [nombreMetodo]() {
    alert('guau guau!!!');
  }
};

console.log(dog); //Imprime Object {nombre: "kEnAi", edad: 4}
dog.ladrar(); //Manda alerta