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

Parallel:
Promis.all([]) > dentro de este método vamos a darle un arreglo
es decir que código quiero ejecutar de manera paralela
en mi caso le voy a dar await ya no a cada uno de los metodos si no a toda
la promesa. Es decir lo que estoy diciendo en este caso es lo siguiente
quiero ejecutar de manera paralela tanto la tarea 1 como la tarea 2 
> va tomar tiempo de ejecución estas tareas cuando termine quiero almacenar
los posibles resultados que me retorne por que recuerda que cada una de estas 
funciones me retorna algo me retorna value 1 y value 2.
> results lo que me esta ejecutando también es un arreglo de los posible valores
que me retornen estos 2 métodos taskOne() > me rotorna un valor y se va almacenar
Estoy haciendo lo mismo que solo que ahora ya no se va ejecutar de manera secuencial.
Las 2 tareas se va ejecutar al mismo tiempo
> al final como las 2 tareas se ejecutan al mismo tiempo me va tomar tan solo 4seg
ya que las 2 tareas inician la mismo tiempo entonces tan solo veo la tarea que se demora
más en ejecutarse.
measurung time: 4.005s
Tasks One retuned ONE VALUE
Tasks Two retuned ONE TWO
*/
const { taskOne, tasksTwo } = require("./tasks");

async function main() {
	try {
		console.time("measurung time");
		const results = await Promise.all([taskOne(), tasksTwo()]);

		console.timeEnd("measurung time");

		console.log("Tasks One retuned", results[0]);
		console.log("Tasks Two retuned", results[1]);
	} catch (err) {
		console.log(err);
	}
}

main();
