/*
:::map:::
sirve para recorrer un arreglo y aplicar una misma función a cada uno de los 
elementos de ese arreglo > quiere decir que transformo el array
*/

const edadesPersonas = [5, 7, 22, 30, 44];

const edadesPerros = edadesPersonas.map((edad) => {
	return edad * 7;
});

console.log(edadesPerros);

/*si lo queremos ver este ejemplo en una pagina web puede ser netflix donde tenemos todos los componente
con las muestras de peliculas disponibles o series que tiene un diseño especifico, eso se hace un arreglo
y se mapea los datos para que aparezca así en la web*/
