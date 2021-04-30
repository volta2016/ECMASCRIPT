// El método splice() cambia el contenido de un array eliminando
// elementos existentes y/o agregando nuevos elementos.

/* Sintaxis
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])


start
Índice donde se comenzará a cambiar el array (con 0 como origen). 
Si es mayor que la longitud del array, el punto inicial será la longitud del array. 
Si es negativo, empezará esa cantidad de elementos contando desde el final.

deleteCount Optional
Un entero indicando el número de elementos a eliminar del array antiguo.
Si deleteCount se omite, o si su valor es mayor que arr.length - start 
(esto significa, si es mayor que el número de elementos restantes del array,
comenzando desde start), entonces todos los elementos desde start hasta 
el final del array serán eliminados.

item1, item2, ...  Optional
Los elementos que se agregarán al array, 
empezando en el índice start. Si no se especifica ningún elemento, 
splice() solamente eliminará elementos del array.
 */

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//Eliminar varios elementos a partir de una posición

//Nota:
//Con .splice() no solo se puede eliminar elementos del array, si no que también podemos
//extraerlos guardándolo en un nuevo array. ¡Ojo! que al hacer esto estaríamos modificando el array de origen.
let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria"];
console.log(vegetales);
// ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let pos = 1,
	numElementos = 2;

let elementosEliminados = vegetales.splice(pos, numElementos);
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales);
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"

let foo = ["thumb-1", "thumb-2", "thumb-3", "thumb-4"];

function removeItemFromArr(arr, item) {
	let i = arr.indexOf(item);

	if (i !== -1) {
		arr.splice(i, 1);
	}
}

removeItemFromArr(foo, "picture-1");
console.info(foo);
// ["thumb-1", "thumb-2", "thumb-3", "thumb-4"]

removeItemFromArr(foo, "thumb-2");
console.info(foo);
// ["thumb-1", "thumb-3", "thumb-4"]

// No está mal; es una opción válida. Podemos formatear un poco la función para que tenga
// mejor aspecto sin alterar su comportamiento:

let removeItemFromArr = (arr, item) => {
	var i = arr.indexOf(item);
	i !== -1 && arr.splice(i, 1);
};

// Otro problema que podemos encontrar ahora es el de la no inmutabilidad:
// la función anterior toma un array y lo modifica, haciendo imposible volver a su estado original.
// En ciertos escenarios y paradigmas, como bajo la Programación Funcional, el concepto de mutabilidad no está permitido.
// Propongamos una primera versión inmutable de nuestra función utilizando
// para ello el método Array.filter():

function removeItemFromArr(arr, item) {
	return arr.filter(function (e) {
		return e !== item;
	});
}

var newFoo = removeItemFromArr(foo, "thumb-2");

console.info(foo);
// ["thumb-1", "thumb-2", "thumb-3", "thumb-4"]

console.info(newFoo);
// ["thumb-1", "thumb-3", "thumb-4"]
