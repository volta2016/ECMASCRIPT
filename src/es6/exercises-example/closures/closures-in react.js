/*::¿Por qué aprender sobre Closures para trabajar con React?::

Closures están por todas partes en React, sobre todo ahora con la existencia 
y uso de la API de hooks. Los hooks se basan fuertemente en el uso de closures, lo que permite 
que los hooks sean tan expresivos y simples.

Un problema que se presenta con este extensivo uso de closures es el de "el closure rancio" 
(stale closure) ¿WTF es esto?
*/

function contador() {
	let value = 0;
	function incrementar() {
		value++;
		console.log(value);
	}
	function decrementar() {
		value--;
		console.log(value);
	}
	const mensaje = `El valor actual es ${value}`;
	function log() {
		console.log(mensaje);
	}
	return [incrementar, decrementar, log];
}
const [incrementar, decrementar, log] = contador();
incrementar(); // logs 1
incrementar(); // logs 2
decrementar(); // logs 1
// No funciona
log(); // logs "El valor actual es 0"

//scope es statico
//no actualiza el valor original de value

//Claramente algo extraño pasa aquí, la función log nos muestra que el
//valor es 0 cuando sabemos que debe ser 1.

// Esta es un "stale closure". El closure log capturó el valor de mensaje
// en la primera ejecución de la función contador cuando el valor de value era 0.

/* ¿Cómo arreglarlo?
La solución es "sencilla". Primero debemos notar que el closure log se cerró 
sobre la variable mensaje que no es la variable que cambia. Entonces, debemos 
refactorizar este trozo de código para cerrar nuestro closure sobre la variable 
que realmente cambia */

// ...
// ...
function log() {
	const mensaje = `El valor actual es ${value}`;
	console.log(mensaje);
}
// ...
// ...

// ::¿Qué relación tiene con React?::
// Sabemos que los hooks se basan en el funcionamiento
// de las closures, y uno de los hooks más "complejos" y utilizados
// es ::useEffect. Este hook se utiliza para ejecutar efectos, es decir,
// para sincronizar el estado interno del componente con algún estado externo.

/*useEffect recibe un callback que es en efecto un closure y un arreglo de dependencias 
que le indica que "valores observar" para ejecutar el closure definido.

Si no indicas ningún valor en el arreglo de dependencias el closure usado como primer 
argumento se "cierra" sobre los valores existentes en el primer render.*/

/*Otro caso es con el hook useState. Este hook retorna una tupla con el valor del 
estado y una función que permite actualizar el estado.*/

function Contador() {
	const [count, setCount] = useState(0);

	function onClick() {
		setTimeout(() => {
			setCount(count + 1);
		}, 1000);
	}

	return (
		<div>
			{count}
			<button onClick={onClick}>+1</button>
		</div>
	);
}

/*Este simple componente renderiza un botón que al ser clickeado actualiza el estado 
añadiendo 1 al valor de count pero lo hace después de 1 segundo.

Al hacer un par de clicks en el botón (más rápido que 1 segundo) se esperaría 
que el valor de count fuese 2 pero es en realidad 1.*/
