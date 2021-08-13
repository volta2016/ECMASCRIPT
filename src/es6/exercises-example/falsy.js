/*Falsy
Un valor falso (a veces escrito falsey) es un valor que se considera falso cuando se encuentra en un contexto booleano.

JavaScript utiliza la conversión de tipos para convertir cualquier valor en booleano en 
contextos que lo requieran, como condicionales y bucles.
*/

false == 0//true
false == -0//

//El BigInt cero y cero negativo
false == 0n//true
false == -0n//true

false == ''//true
false == ""//true
false == ``//true

null = //the absence of any value.//
udefined = //the primitive value.
NaN = //not a number.


//Ejemplos de falsy value en JavaScript
//que se coaccionan a falso en contextos booleanos y, por lo tanto, omiten el bloque if

if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")


// The logical AND operator, &&

// si el primer objeto es falso, retorna ese objeto
false && "dog"
//->false
0 && "dog"
//-> 0


