/** ::"Hoisting":: es un concepto fundamental del lenguaje JavaScript debido a que te ayuda a entender cómo tu código 
es ejecutado y por ello, es uno de los temas que se preguntan con frecuencia en las entrevistas (en serio) .

Aunque el concepto es muy sencillo, la mayoría de las veces se malinterpreta. En este artículo vas a aprender 
qué es hoisting con la ayuda de algunos ejemplos.

Lo que vas a aprender
Después de leer este artículo vas entender:

El contexto de ejecución y sus fases.
Cómo funciona el hoisting con variables (var) y funciones (function)
Casos especiales de hoisting (const y let).
Qué es la Temporal Dead Zone.**/

var source = "https://github.com/volta2016";
console.log(source);

function printSource() {
	console.log(`"from printSource:" ${source}`);
}

printSource();

//salida:
/*https://github.com/volta2016
desde print: https://github.com/volta2016

El código se ejecuta línea por línea.

Echemos un vistazo a lo que sucede:

Se crea la variable source y se le asigna un valor a https://github.com/volta2016 .
Se encuentra la línea de código console.log y el valor de source se imprime en la consola: https://github.com/volta2016.
Del mismo modo, la siguiente línea es la definición de la función printSource. Seguido de la llamada real a la función printSource(). 
Esto resulta en las declaraciones dentro de la función que se ejecuta y la cadena desde print: https://github.com/volta2016se 
imprime en la consola.
Pero, ¿es realmente tan sencilla la ejecución de código en JavaScript?

Echa un vistazo a esta variación del mismo ejemplo:

*/

console.log(source);
printSource();

function printSource() {
	// definición de la función
	console.log(`"from printSource:" ${source}`);
}

var source = "https://github.com/volta2016";
printSource();

/*Resultado:

undefined
desde print: undefined
desde print: https://github.com/volta2016

Hoisting en JavaScript te permite acceder a funciones y variables antes de que hayan sido creadas.

::Contexto de Ejecución:: ⏰

El contexto de ejecución es el entorno que prepara el motor de JavaScript para ejecutar el código que escribimos.
En pocas palabras, es la información necesaria para ejecutar el código.
El contexto de ejecución se crea en dos fases:


1 - ::Fase de creación:: 🤞


- El código es escaneado/parseado para las variables y funciones.
- Se reserva espacio para las variables en memoria.
- Las definiciones de las funciones se cargan en la memoria.



2- ::Fase de ejecución:: ⏏️

- El código se ejecuta línea por línea con la información de la fase de creación.
- Se asignan valores a las variables.
- Se ejecutan las funciones.


vamos a ver otro ejemplo de contexto de ejcución
*/

source = 5
console.log(source)
printFinal()
var printFinal = function print() {
	console.log(`desde la funcion: ${source}`)
}

var source;

/*
* El valor 5 se asigna a source.
* 5 se imprime en la consola.
* Se llama a printFnExp. Sin embargo, arroja un error - Uncaught TypeError: printFnExp no es una función.

Para solucionar este error, vea los cambios en el código que aparecen a continuación:

*/


source = 5
console.log(source)
var printFinal = function print() {
	console.log(`desde la funcion: ${source}`)
}
printFinal()

var source;


/*Salida:

5
desde la función: 5


Casos Excepcionales
- var se inicializa con undefined
- en el caso de let y const el valor se inicializa solo durante la fase de ejecución


*/

console.log(source);
print();
function print() {
  console.log("desde print: " + source);
}
let source = "@volta2016";

//Salida:

//Uncaught ReferenceError: source is not defined

//ahora vamos aver el uso correcto de let:


let source = "@volta2016";

console.log(source);

function print() {
	console.log("desde print: " + source);
}
print();


//Durante la fase de ejecución, si no se proporciona ningún valor junto con la declaración, el valor se considera undefined.

//Veamos el siguiente ejemplo

let source; // declaración
console.log(source);
source = "@volta2016"; // inicialización
function print() {
  console.log("desde print: " + source);
}
print();


//Salida:

//undefined
//from print: @volta2016


/* Ejemplo con const 

*/

const source;
console.log(source)


//Salida:

//Uncaught SyntaxError: Missing initializer in const declaration

//Una const indica un valor constante. Este valor no puede ser cambiado durante la ejecución del código. Por lo tanto, tiene sentido que requiera un valor inicializador en el momento de la declaración.
//Uso correcto de const:

const source = "@volta2016";
console.log(source);


/* resumen:

"Hoisting es cuando las funciones y las variables se almacenan en 
memoria para un contexto de ejecución antes de ejecutar nuestro código." */
