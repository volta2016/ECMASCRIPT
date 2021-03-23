//JavaScript Síncrono

/*Cada operación se hace de una vez, bloqueando el flujo de ejecución, 
el hilo es bloqueado mientras espera la respuesta, cuando esta se procesa 
pasa a la siguiente operación y así sucesivamente al terminar todas las operaciones.*/

console.log('Inicio');

function dos() {
  console.log('Dos');
}

function uno() {
  console.log('Uno');
  dos();//bloquea el hilo mientras espera la ejecución del cuerpo de la función.
  console.log('Tres');
}

uno();
console.log('Fin');

