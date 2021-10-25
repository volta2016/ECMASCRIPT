/*::split::
 El método split() divide un objeto de tipo String en un array, mediante un separador.

 Syntax
string.split(separator, limit)

Separador: Es una cadena usada para separar cada uno de los elementos del arreglo. El separador es convertido a una cadena si es necesario. Si este se omite, los elementos del arreglo son separados con una coma (",").
*/

const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split("-");
console.log(arrayMeses);
