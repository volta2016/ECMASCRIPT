/*join()
 el método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
*/

const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split("");
console.log(arrayMeses);

const nuevamenteString = arrayMeses.join("-");
console.log(nuevamenteString);
