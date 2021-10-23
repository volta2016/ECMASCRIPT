/*Reduce nos va servir para reducir todos los valores de ese arreglo
a un unico valor que puede ser que puede ser un numero, un objeto, un array 

El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante.



*/

const edadesPersonas = [5, 7, 22, 30, 44];

const totalEdades = edadesPersonas.reduce((acumulator, currentValue) => {
	return (acumulator += currentValue);
}, 0);

console.log(totalEdades, "Suma de edades");
