/*Diferencia en entre map y forEeach
- ambas forman part de las funciones que podemos aplicarle a un array
- las 2 cumplen con el proposito de iterar un arreglo nos permite hacer operaciones
por cada uno de los elementos que permite nuestro array
¿cual es la diferencia entre ellos la respuesta radica en que si vamos a utlizar 
el resultado que entrega mas delante o no?
*/

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((x) => {
	console.log("forEach", x);
});

numeros.map((x) => {
	console.log("map", x);
});
