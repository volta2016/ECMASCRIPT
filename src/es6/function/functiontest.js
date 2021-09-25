// 1 -¿Que es una función anónima?
// 2- ¿Cual es su diferencia con las funciones clásicas
// ¿Les ecuentras alguna desventaja cuándo las usarías

// 1- Una función anónima es una función que no tiene nombre
// 2- La primera:  es que no tiene nombre
//  - Tercer diferencia una funcion hace hoisting una arrow function no hace hoisting en teoría
//  3 Desventaja es que se confunden las personas tienden a confundir y no sabe su uso práctico
//  - Es bueno usarsarlas cuando tienes algo autoejecutable y depsués nunca mas
//una funcion anonima no hace hoisting
// normal function o funciones delcarativas
function greetings(name, years) {
	return `Hola mi nombre es ${name} mi edad es ${years}`;
}

greetings("kio", 7);

// como usas una funcion anonima, puede ser mediante una IFE

(function (name, years) {
	alert(`Hola mi nombre es ${name} y mi edad es ${years}`);
})("kio", 7);

// function de expresion o expresión de funcion


console(tiempo)
const tiempo = function (tiempo) {
	return `el tiempo de es es ${tiempo}`;
};

tiempo("4:30");


console.log("funcion greeting: \n\n":, greetings, "\n\n  function anonima", tiempo)


//Es bueno usarsarlas cuando tienes algo auto ejecutable y después nunca más
//ejemplo:

(function() {
  console.log("ejecutando")
}())

//también el caso de callback

const numbers = [1,2,3,4]

function elevarAlCuadrado(numeror) {
  return numero * numero
}

//no se pasa de una la función para que te eleve al cuadrado
numbers.map(numero => numero * numero)
numbers.filter(numero => numero%2==1)//impares
numbers.filter(numero => numero%2==0)//pares 