// Closures:
// Tienes una closure cuando una función cualquiera accede a una variable fuera de su contexto.
/*
En Javascript un closure es creado cada vez que una función es creado, y dado que este 
tipo de funciones pueden acceder a valores fuera de su propio contexto, el uso de closures 
permite crear y manejar el concepto de estado o variables privadas que pueden ser accesibles 
incluso cuando la función padre dejo de existir después de su invocación.
*/

function exterior() {
	const mensaje = "Hola mundo";//local var
  // closure
	function interior() {
    //closure
		return mensaje;
	}
	return interior;
}

const foo = exterior();
foo(); //retorna el mensaje "Hola mundo"

/*Aquí tenemos la variable mensaje dentro de la función exterior. 
Es una variable local y no puede ser accedida desde fuera de la 
función, pero si desde el interior de la función en la función interior.

Cuando asignamos la función exterior a la variable foo lo que ocurre es lo siguiente:*/

/* *::La función exterior se ejecuta una vez y foo se convierte ahora en la 
declaración de una función (se le asigna el "valor" de lo que retorna 
exterior que en este caso es interior).

*::La variable foo tiene acceso a la función (closure) interior y desde ahí a la variable mensaje.

En javascript los closures son creados con toda la información del entorno donde fueron creadas. 
La función foo tiene una referencia al closure interior, el que fue creado durante la ejecución 
de la función exterior. La función interior (el closure) mantiene la información de su ambiente: 
La variable mensaje.
*
