/*Reduce nos va servir para reducir todos los valores de ese arreglo
a un unico valor que puede ser que puede ser un numero, un objeto, un array */

const edadesPersonas = [5, 7, 22, 30, 44];

const totalEdades = edadesPersonas.reduce((acumulator, element) => {
	return (acumulator += element);
}, 0);

console.log(totalEdades, "Suma de edades");
