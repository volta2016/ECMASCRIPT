/*
Mi programa principal importa 2 métedos, estos lo vou ejecutar 1 x 1, si son métodos async vamos a 
necesitar async await > para que este código continue tome cierto tiempo y luego continue con el siguiente código
pero recordemos que await funciona dentro funciones que tienen la palabra clave async.
Como quiero la información de cuanto demora el código voy agregar una medida de tiempo en js podemos medir cuanto tiempo
toma cierto code en ejecutarse > para eso vamos a utlizar un metodo llamado console.time() > console.endTime() mide cuando acaba el código
de las tareas. Como quiero saber cuando demora en ejecutarse lo voy colocar dentro de estos console.time y console.endTime >
que lo que hace es medir el tiempo


Recuerda que la primera tarea toma 4seg y la segunda 2seg, si se estan ejecutando de manera 
secuencial ambos tiempos sumados me darian 6 segundos. Es lo que obtenemos en la consola
measurung time: 6.012s
Tasks One retuned ONE VALUE
Tasks Two retuned ONE TWO
esto es código secuencial


*/
const { taskOne, tasksTwo } = require("./tasks");

async function main() {
	try {
		console.time("measurung time");
		const valueOne = await taskOne();

		const valueTwo = await tasksTwo();
		console.timeEnd("measurung time");

		console.log("Tasks One retuned", valueOne);
		console.log("Tasks Two retuned", valueTwo);
	} catch (err) {
		console.log(err);
	}
}

main();
