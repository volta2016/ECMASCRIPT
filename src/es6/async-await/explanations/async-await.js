//await palabra reservada > este código que continua va a tomar tiempo await User.findById(req.userId)
//es un método asincróno > diferencia en las promesa esperamos la respuesta en la función
//en async await const user = await User.findById(req.userId); este método de aquí es asincróno, pero cuando termone el
//usuario que me retorne esta consulta pues lo voy guardar en esta constante, también puedes no guardar nada.
//await solo esta disponible en las funciones que tienen una palabra async al inicio

//try { } trata de ejecutar el código en caso algo de aquí falle, pues era capturado por este catch { }
// basicamente todo lo que hacemos en el lenguaje es asincróno acá estamos consultado una base de datos
//que en este caso es mongo db pero podría cualquier otra, myslq, podría ser una consulta a una API > que también
//toma tiempo de ejecuación > puede ser una manipulación de archivo por medio de node puede que uses el fs >
//modulo fs tiene que buscar archivos modificarlos crearlos, recuerdo que el objetivo de node es tomar tareas que tomen
//bastante tiempo de procesado y no esperar por ellas, no esperar a que termienen si no delegarlas una vez termine nde
//va continuar con el code, pero nostros vamos manejar ese code por medio de promesas callbacks en este caso async await

async function completarTareas(req, res) {
	// req > request
	// res > result
	//async nos permite usar el wait dentro de la func
	//await lo que hace es decirle al code que esta promesa termine antes de continuar
	try {
		const user = await User.findById(req.userId); //esta buscando al usuario en la base de datos
		const tasks = await Tasks.finById(user.taskId);
		tasks.completed = true;
		await tasks.save(); //guardamos en nuestra base de datos
		res.send("Tasks Save");
	} catch (err) {
		res.send(err);
	}
}
