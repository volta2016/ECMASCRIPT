// **Funciones flecha**
// Es una nueva forma de definir funciones, hay distintas variantes en la sintaxis:

// Función de un solo parámetro
// Al crear una arrow function de un solo parámetro no es necesario escribír los paréntesis, tampoco 
// es necesario escribír las llaves, esto se puede cuando la función es de una sola línea y devuelve un valor.

// antes

let greeting = function(name) {
  return `hola ${name} bienvenido`
}

console.log(greeting('Uzumaki'));

// ahora es6

let greeting = name => `hola ${name} bienvenido`;
console.log(greeting('shin-shan'));//imprime hola shin-shan bienvenido

let add = function(a, b) {
  return a + b
}
console.log(add(2,7));

let add = (num1, num2) => num1 + num2;
console.log(add(5,2))


// **Función sin parámetros**
// Cuando la función no reciba parámetros también son necesarios los paréntesis.
let greeting = function() {
  return `hola a tod@s`
}

console.log(greeting());//Imprime Hola a tod@s



let greeting = () => `hola a tod@s`;
console.log(greeting());//Imprime Hola a tod@s


// **Función con cuerpo**
// Cuando la función tiene más de una línea 
// (o no devuelve ningún valor) es necesario utilizar las llaves.
let date = new Date(),
    hours = date.getHours();

  

let greeting = function(hr) {
  if (hr <= 5) {
    return 'estamos cerca de las 5'
  } else if(hr >= 6 && hr <= 11) {
    return 'Buenos días !!!';
  } else if(hr >= 12 && hr <= 18) {
    return 'Buenas tardes!!!';
  } else {
    return 'buenas noches'
  }
}

console.log(greeting(hours));//Imprime el saludo dependiendo la hora del día

// ahora es6
let date = new Date(),
    hours = date.getHours();

let greeting = (hr) => {
  if (hr <= 5) {
    return 'estamos cerca de las 5'
  } else if(hr >= 6 && hr <= 11) {
    return 'Buenos días !!!';
  } else if(hr >= 12 && hr <= 18) {
    return 'Buenas tardes!!!';
  } else {
    return 'buenas noches'
  }
}

console.log(greeting(hours));//Imprime el saludo dependiendo la hora del día


let numbers= [1, 2, 3, 4];


numbers.forEach(function(num) {
  console.log(num);//Imprime el número del index del array
  console.log(num * 10);//Imprime el número dek index que itera por 10
});
let numbers= [1, 2, 3, 4];


numbers.forEach((num) => {
  console.log(num);//Imprime el número del index del array
  console.log(num * 10);//Imprime el número dek index que itera por 10
});

// foreach() no muta/modifica el array desde el que es llamado (aunque callback, si se invoca, podría hacerlo)

