//::Question 4: Artificial method

//How can you call logMessage function so that it logs "Hello, World!"?


/*const object = {
  message: 'Hello, World!'
};

function logMessage() {
  console.log(this)
  console.log(this.message); // "Hello, World!"
}

logMessage();*/

/* bueno nos dice a ver si eres capas que este this console.log(this.message) sea el del object.
Bueno hay varias formas de resolver esto:
1-una de esta seria con el bind, que es lo que pasa que esto no devuelve una nueva función así que tendria que volver a ejecutarla.
Esto obviamente no es lo ideal hay otra forma de hacer lo mismo y llamar la función directamente.
*/

/*const object = {
  message: 'Hello, World!'
};

function logMessage() {
  console.log(this)
  console.log(this.message); // "Hello, World!"
}

logMessage.bind(object)();*/


/*2- Tendríamos el apply y tendríamos el .call 
la diferencia entre call y apply que son casi o mismo la diferencia es que call acepta una lista de argumetos mientras que apply acepta un simple array array con los arguentos
*/

const object = {
  message: 'Hello, World!'
};

function logMessage(parametroA, parametroB) {
  console.log({parametroA, parametroB})
  console.log(this.message); // "Hello, World!"
}

logMessage.apply(object, ['facebook', 'instagram']);
//logMessage.apply(object, 'facebook', 'instagram';
//logMessage.apply(object)('facebook', 'instagram');

/* si ahora llamo a call va detectar al parametroA directamente y el b como undefined*/

/* con call cada argumento se le va a pasar como parametro, cada argumento debe ir separado con , esa sería un poco la diferencia*/













