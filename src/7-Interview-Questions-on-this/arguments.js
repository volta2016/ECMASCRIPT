/*
Uno acá dice a mi me gustaria un segundo mensaje que pasa ahora que también
tienes que añadir el mensaje 2, pero hay un tercero no sabes el numero de de parametro 
que vas a pasar aveces le puede llagar 3 2 o 15, entonces lo que mejor puedes hacer es olvidarte
de los parametros. Por lo tanto ya no tiene el parametro pero si hay una plabra clave dentro 
que se llama arguments
*/

function printMessage(msg) {
  //console.log(msg, msg2)
  if (arguments.length === 1) console.log(msg);

  console.log(arguments.length); // yo puedo acá repcuperar siempre todos los argumentos que le
  //hemos pasado a un método
  for (const arg of arguments) {
    console.log(arg);
  }
}

printMessage("Hola mundo", "Adios a todos");

/*lo que devuelve es un iterable
[Arguments] { '0': 'Hola mundo', '1': 'Adios a todos' }
podemos saber cuanto parametros le estamos pasando pese a tener un solo
parametro. 
Es un iterable pero no se puede hacer un forEach, lo que si puedes hacer es 
iterarlo de otra forma con for of para cada arg que tenemos en el iterable
no es un array es un iterable
*/

const sum = () => {
  let results = 0;
  for (const arg of arguments) {
    results += arg;
  }
  return results;
};

sum(2, 3, 4, 7);

/* el valor de this es statico a una arrow function no puedes hacer el bind de this y
tampoco tendrias arguments si intentas hacer algo así pues te va petar */
sum.bind(this);

//solución: para hacer este tipo de funcionalidad y que tenga arguments
//debe hacer un tipo de función normal y corriente

function sum() {
  let results = 0;
  for (const arg of arguments) {
    results += arg;
  }
  return results;
}

sum(2, 3, 4, 7);

// o puede ser una expresión de función

const sum = function sum() {
  let results = 0;
  for (const arg of arguments) {
    results += arg;
  }
  return results;
};

sum(2, 3, 4, 7);

// Para que claro entre expresión y declaración
const sum = function () {}; //expresion
function sum() {} //declaración

//para resolverlo con arrow function

const sum = (...args) => {
  let results = 0;
  for (const arg of args) {
    results += arg;
  }
  return results;
};

sum(2, 3, 4, 7);

//usando arguments en el día a día
Math.max(2, 4, 5);
