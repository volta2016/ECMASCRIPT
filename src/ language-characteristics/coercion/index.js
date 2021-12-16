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

Coerción: cambia automáticamente un valor de un tipo a otro.

Esto conviene si lo estas aplicando a proposito, pero es potencialmente dañino si no conoces sus implicaciones

0 == "0" // true

¡El segundo 0 se convirtió en un número!
entonces 0 es igual a 0 es true
Extraño, ¿verdad? Bueno, acostúmbrate,

secretamente el 0 en string se convertio a numero
*/

//Panel 2 - Las matrices también hacen ceorción

0 == []; // true
//¿Qué ha pasado ?

//Coerción de nuevo

//1. Si, los arrays son objects

//2. El array vacío se convierte en un string vacío

//Nuevamente, de acuerdo con la especificación, JS primero busca el método toString de un objeto para coaccionarlo.

[1, 2, 3].toString() // "1,2,3"
['hello', 'world'].toString() // "hello,world"

//Dado que nuestra matriz está vacía, ¡no tenemos nada a lo que unirnos! Por lo tanto...

[].toString() // ""

//Un array vacío hace coerción para un string vacío

//ToPrimitive de la especificación convierte a esta matriz vacía en una cadena vacía

//3. El string vacío luego se convierte en 0 

//No puedes inventar estas cosas. Ahora que hemos aplicado coerción a la matriz a "", volvemos al primer algoritmo

//Dado que 0 es Número y "" es Cadena, devuelve 0 == ToNumber ("")

//ToNumber("") retona 0.

//Por lo tanto, 
0 == 0 //una vez más


//Panel 3 Resumen rápido 

//Esto es true

0 == "0" // true

//Porque la coerción convierte esto a number


//Esto es true

//Porque coerción corre 2 veces:


//1-ToPrimitive ([])// "" da una cadena vacía 
//2- Entonces ToNumber ("") da 0


//¡FALSO! Correcto. Esta parte tiene sentido si entendiste las reglas.

"0" == [] // false


//Si x es String o Number e y es Object, devuelve x == ToPrimitive (y)

//Eso significa...

//Como "0" es String y [] es Object, devuelve x == ToPrimitive ([])


"0" == ""

"0" y "" 
//son cadenas, por lo que JavaScript dice que no se necesita más coerción. Es por eso que nos devuelve false.

//conclusión:
"0" == ""    
false
"0" == []
false

//javascript devuelve falso
//cero "string" no el igual a un string vacio 
//cero "string" no es igual a un array vacio

//no puedes hacer ceorción si tu ocupas === triple igual




0 === "0" // false
0 === [] // false
"0" === [] // false
