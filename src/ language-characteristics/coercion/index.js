/*0 == "0"; //true

0 == []; //true

"0" == []; //false*/

const messageKyleSimpson =
  "I don’t think anyone ever really knows JS, not completely anyway.";

//Panel 1 - Introducción a la Coerción

0 == "0"; //true

/*
Si corres en la consola del navegador 0 == "0"; //true 
¿ por qué da verdadero ? 
1- el primer 0 es de type number
2- el segundo 0 es de type "string"
Nunca deberían ser eso en la mayoria de lenguajes se respeta eso
Por ejemplo en JAVA:
Java, for example, returns this:
error: incomparable types: int and String
Esto tiene mucho sentido. Si desea comparar un int y String en Java, primero debe convertirlos al mismo tipo.


::Cuando compara dos valores a través de ==, uno de los valores puede sufrir coerción::

Coerción: cambiaa automáticamente un valor de un tipo a otro.

Esto conviene si lo estas aplicando a proposito, pero es potencialmente dañino si no conoces sus implicaciones

0 == "0" // true
¡El segundo 0 se convirtió en un número!
entonces 0 es igual a 0 es true
Extraño, ¿verdad? Bueno, acostúmbrate,

secretamente el 0 en string se convertio a numero
*/

//Panel 2 - Las matrices también hacen ceorción

0 == []; // true
