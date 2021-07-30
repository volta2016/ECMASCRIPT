// desestrcuturación de objetos
const personajes = ["Kakashi", "Yiraija", "Uzumaki"];

console.log(personajes[0]); //existe un camino mas corto que llamarlo 1 x 1

// const [p1, p2, p3] = personajes;
//desestrcuturación de objetos llamando a los 3 elementos del array

//también podemos hacer que ignore al primero y al segundo
const [, , p3] = personajes;
console.log(p3);

const retornaArrelgo = () => {
	return ["ABC", 123];
};

// const arr = retornaArrelgo();//de esta forma puedo accedera la funcion que retorna al arreglo
//pero al grupo de array no a cada elemento del array

//pero para acceder a cada elemento mejor usamos la desestructuracion:
const [letras, numero] = retornaArrelgo();

console.log(letras, numero);

const movie = [
	"Harry Potter",
	"best movie",
	"9.0",
	"Harry",
	"Jermione",
	"Jagrid",
];

const [title, category, rating, ...characters] = movie; //aca ocupamos rest
console.log(title, category, rating);

//tarea
//1. El primer valor del array se llamara nombre
//2. El segundo se llamara set nombre
const useState = (value) => {
	return [value, () => console.log("Hola mundo")];
};

// esto parece etraño pero sigue siendo un arreglo

//opcion 1 tarea
const [nombre, setNombre] = useState("Minato");
console.log(nombre);
setNombre();
//esto es más lógico y ordenado

//opción 2
//const [nombre, setNombre ] = useState('Minato');
//const arr = [nombre, setNombre ]
//console.log(arr[0], arr[1]);
//esto es muchos pasos, pero ambos funcionan

//es util que ocupemos la desestructuración en vez de llamar a las const arr
//si guardo va llamar a la function por que estoy retornando este valor.
//y estoy llamando esa funcion con parentesis que es el segundo elemento del array
//si quisieramos llamar a la function() las sintaxys es extraña // arr[1]();

/*Si tengo una función donde le paso una cantidad de horas y la quiero transformar
en cosas distintas que sean los second, minutos y días puedo cuando ejecuto la  función 
desestrcuturarlo directamente*/

function convertHours(hours) {
	const hoursConverted = {
		seconds: hours * 3600,
		minutes: hours * 60,
		days: hours / 24,
	};
	return hoursConverted;
}

const { seconds, minutes, days } = convertHours(48); //cuando ejecuto la función puedo desestructurarlo
//directamente

console.log(seconds, minutes, days);
