/*Voy a manejar el req y el res con una promesa quiero consultar al usuario con finById > buscar por id
ahora ya no lo voy manejar con un callback, si no con una promesa:
User.finById(req.userId) > cuando termine de ejecutarse esa operación yo voy manejear ese fin de ejecución
.then > sería como entonces cuando termine de jecutarse esta operación User.finById(req.userId)
voy a manejar ese fin de ejecución con una función también > Esta función solo puede recibir las cosas buenas
cuando el proceso vaya bien lo que tendria que recibir si estoy buscando un user > user.
Caso contrario podria capturar algún error
.catch(function (err) {
			res.send(err);
		});
De esta manera estoy manejando el error

método .then > cuando todo va bien es el dato que esperamos
.catch ocurre cuando pasa algún error 
nostros podriamos validarlo enviar una respuesta del err
el catch va capturar los errores de la primera consulta como también de la segunda
*/

function completarTareas(req, res) {
	//acción asincrónica
	User.finById(req.userId)
		.then(function (user) {
			return Taks.findById(user.taskId);
		})
		.then(function (tasks) {
			tasks.completed = true;
			return Taks.save();
		})
		.then(function () {
			res.send("Task complete!");
		})
		.catch(function (err) {
			res.send(err);
		});
}
