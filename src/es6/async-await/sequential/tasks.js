//setTimeout() > esta función lo que hace es ejecutar cierto código despues de cierto intervalo de tiempo
//nostros podemos darle el intervalo de tiempo es una function async
//nostros podemos convertir esas funciones que se llaman con callback a través de un modulo de node
//util.promisify() > lo que hace es convertir funciones que se manejas con callback a funciones que se pueden manejar con
//promesas o async await

//que tenemos aquí: simplemente un modulo que tiene 2 funciones > la cual la primera función se llama 4 segundos y la segunda
//funcion se demora 2 segundo en ejecutarse

/*Que pasa si tenemos algún error en uno de estos metodos nostros podemos crear o
lanzar un error por nostros mismos utlizando una palabra llamada throw,
para la ejecución y crea un nuevo error al ejecutarse index.js trata de ejecutar tarea 1
lo primero que hace esa tarea es lanzar un error y terminar con la ejecucuón de programa
ya no se va ejecutar sleep por que le he dicho que ha ocurrido un problema y que pare con la 
ejecución si ha acabado con esto lo natural sería que este me lanze un error y continue con 
el siguiente ya que son procesos independientes, si el segundo se esta ejecutando
lo que me devolveria sería 2 segundos de ejecución > esos 4 segundo ya no va tomar tiempo
el resultado solo sería 2 segundos. No ha continuado con la tarea 2, pero no pasa eso 
lo que ha hecho es cancelar todo el programa. Vamos a manejar en cada una de esta funciones
un try catch.
El primer código que se ha ejecutado en taskOne() pero recuerda que tiene ese
error ha continuado con la siguiente tarea con la tarea 2 y es por eso que hemos
visto que ha tomado 2 segundos. Entonces aunque el primero no me ha devuelto nada por que no
se ha ejecutado solo lanza un error entonces el valor es undefinded, mietrnas que las segunda
tarea se ejecuto normalmente así obtenemos el segundo valor Estoy ejecutando código secuencial
y aunque tenga errores se va seguir ejecutando y ademas recordemos que el code principal
main también estamos ejecutando async await así que eso también podemos capturarlo.
measurung time: 2.014s
Tasks One retuned undefined
Tasks Two retuned ONE TWO
 */

const util = require("util");
const sleep = util.promisify(setTimeout); //hace los mismo que setTimeout > pero lo puede ejecutar por medio de async await
module.exports = {
	async taskOne() {
		try {
			// throw new Error("some problem");
			await sleep(4000);
			return "ONE VALUE";
		} catch (err) {
			console.log(err);
		}
	},
	async tasksTwo() {
		try {
			await sleep(2000);
			return "ONE TWO";
		} catch (err) {
			console.log(err);
		}
	},
};
