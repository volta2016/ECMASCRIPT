//Coerción

// La coerción es la conversión automática o implicita de valores de un tipo de dato a otro (Ejemplo: de cadena de texto a número). La conversión es 
// similar a la coerción porque ambas convierten valores de un tipo de dato a otro pero con una diferencia clave - la coerción es implícita mientras 
// que la conversión puede ser implícita o explícita.
// Ojo: que el lenguaje hace esta transforación  implicita naturalmente.

const valueOne = '5';
const valueTwo = 9;

const suma = valueOne + valueTwo;

console.log(suma);
console.log(typeof suma);


// En el ejemplo anterior, JavaScript ha coercido el 9 de nùmero a cadena de texto y luego ha concatenado 
// los dos valores resultando en una cadena de texto de 59. JavaScript tuvo la opción de coercer a cadena de 
// texto o número y decidió usar número.

// El compilador pudo haber coercido el 5 a un número y retornar el valor de 14, pero no lo hizo. Para retornar 
// ese resultado, tendrías que convertir explícitamente el 5 a un número usando el método Number():

sumar = Number(valueOne) + valueTwo

console.log(sumar);

const newNumber = '520'

aNumber = Number(newNumber)

console.log(aNumber)


true  + false // 1
"2"  - 3 // -1
Number([""]) // 0
String(-0) // 0 UPS!

a = "2"
a++ // 2