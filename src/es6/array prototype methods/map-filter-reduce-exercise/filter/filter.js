/*Tenemos a filter >  que srive para filtrar algunos elementos de ese arreglo
exclusion > filtra según una condición
vamos ausar el ejemplo anterior:*/

const edadesPersonas = [5, 7, 22, 30, 44];

const edadesPerros = edadesPersonas.filter((edad) => {
	return edad < 35;
});

console.log(edadesPerros, "perros menores a 35");

/*En la vida real se ocupa todo el tiempo cuando tenemos buscadores
buscadores donde tienes que escribir para buscar alguna pelicula en específico, un producto,
filtros por categoría

*/
