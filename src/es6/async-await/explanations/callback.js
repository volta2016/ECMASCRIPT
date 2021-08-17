//recibe como params request y response
//esta es una funcion super tipica de los servidores de node, supongamos estamos conectado
//a una base de datos y queremos consultar esa base de datos

//En node las cosas se manejan de manera async, este codigo va tomar tiempo de ejecución
//node js no espera que esto termine, Lo que hace node js es que esto va ser ejecutado
//por la base de datos, no tengo que esperar que esto termine, base de datos lo hara y cuando termine
//me va enviar una respuesta de la info y nostros como manejamos eso ? Bueno para eso existen los callbacks
//Esta función que es otro parametro lo que hace es esperar por la respuesta
// > La respuesta puede darnos 2 cosas un error o un user > el user encontrado a traves de la consulta

//Se lee de derecha a izquierda voy conultar a un usuario a traves del Id, cuando la base de dato termine
//de devolverme esta consulta, voy manejar la respuesta a traves de esta función, el código ahora
//yo no puedo escribir debajo. Node va esperar que termine va continuar con el siguiente code.
//Si yo quiero escribir un code que dependa del anterior, lo que tendria que hacer escribirlo dentro de esta función
//es por que se le llama callback por que aquí dentro tengo que continuar con la ejecución del code

//Quiero buscar otro modelo de dato que pertenece a Task > quiero buscar las tareas del usuario que encontrado hace
//un momento. Desde la base de datos busca todas las tareas que pertenecen a este usuario.
//De nuevo esta consulta va tomar tiempo y como lo manejamos a traves de una función

//es5 code

function requestHandler(req, res) {
	User.findById(req.userId, function (err, user) {
		if (err) {
			res.send(err);
		} else {
			Tasks.findById(user.tasksId, function (err, tasks) {
				if (err) {
					return res.send();
				} else {
					tasks.completed = true;
					tasks.save(function (err) {
						if (err) {
							return res.send(err);
						} else {
							res.send("Task Completed");
						}
					});
				}
			}); //
		}
	});
}
