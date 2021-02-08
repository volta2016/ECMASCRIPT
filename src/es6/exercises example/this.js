// **Contexto Léxico de this**

// Las arrow functions tienen la capacidad de capturar el objeto this del 
// contexto donde la arrow se ejecuta y así utilizarlo dentro de su bloque de sentencias.

// El problema de this Antes

function Persona(nombre) {

  //El constructor Persona() define `this` como una instancia de él mismo
  this.nombre = nombre,
  this.edad = 0;

  setInterval(function()  {
    //La función anónima define `this` como una instancia de ella misma
    this.edad++;
  }, 1000);
}

let zelda = new Persona('Zelda');
console.log(zelda);//Imprime la edad en 0 por cada segundo que pasa no le suma

//La solución al problema de `this` Antes
function Persona(nombre) {
  //Se declara una variable self (algunos prefieren that) para guardar el `this` del constructor Persona()
  let self = this;
  self.nombre = nombre;
  self.edad = 0

  setInterval(function() {
    //La función anónima define su propio `this` pero el valor que aumenta es edad del `this` de Persona()
    self.edad++;
  }, 1000);
}


let zelda = new Persona('Zelda');
console.log(zelda);//Imprime el valor de edad más uno por cada segundo que pasa



// function masGrandeQue(n) {
//   return (m) => m > n;
// }

// const masGrandeQue10 = masGrandeQue(10);
// const masGrandeQue20 = masGrandeQue(20);

// console.log(masGrandeQue10(12)); 
// console.log(masGrandeQue20(12)); 


//La solución al problema de `this` Ahora es6
function Persona(nombre) {
  //El constructor Persona() define `this` como una instancia de él mismo
  this.nombre = nombre,
  this.edad = 0

  setInterval(() => {
    this.edad++
  }, 1000);
}

let zelda = new Persona('Zelda')
console.log(zelda); //Imprime el valor de edad más uno por cada segundo que pasa
console.log(zelda.edad); //Imprime la edad

// La solución es mezclar los 2 mundo conociendo como se compoarta this dentro de cada función 😄