// 1 -¿Que es una función anónima?
// 2- ¿Cual es su diferencia con las funciones clásicas?
// ¿Les ecuentras alguna desventaja? ¿cuando las usarías?

// 1- Una función anonima es una función que no tiene nombre
// 2- La primera:  es que no tiene nombre
//  - Tecer diferencia una funcion hace hoisting una arrow function no hace hoisting en teoría
//  3 Desvantaja es que se confunden las personas tienden a confundir y no sabe su uso práctico
//  - Es bueno usarsarlas cuando tienes algo autoejecutable y depsués nunca mas
//una funcion anonima no hace hpisting
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


//Es bueno usarsarlas cuando tienes algo autoejecutable y depsués nunca mas
//ejemplo: