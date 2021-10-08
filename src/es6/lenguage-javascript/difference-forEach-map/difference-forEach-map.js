/*Diferencia en entre map y forEeach
- ambas forman part de las funciones que podemos aplicarle a un array
- las 2 cumplen con el proposito de iterar un arreglo nos permite hacer operaciones
por cada uno de los elementos que permite nuestro array
¿cual es la diferencia entre ellos ? la respuesta radica en que si vamos a utlizar 
el resultado que entrega mas delante o no?
*/

const numeros = [1, 2, 3, 4, 5];
//ambos iteran cada elemento
numeros.forEach((x) => {
	console.log("forEach", x);
});

numeros.map((x) => {
	console.log("map", x);
});

//ejemplo 2:
const numerosTwo = [1, 2, 3, 4, 5];

//forEach si lo que necesitamos es recorrer nuestro arreglo y hacer operaciones temporales, pero que no se regresen que no podamos
//almacenarlas para posterior utlizarlas lo unico que vamos a utlizar es forEach > pensemos en el escenario que es como for tradicional
const mutiplicar = numerosTwo.forEach((x) => x * 5);
console.log(mutiplicar); //forEach no permite almacenar el valor de la operaciones

//el escenario de map es regresar un arreglo completamente nuevo > con las operaciones aplicadas
const mutiplicar2 = numerosTwo.map((x) => x * 5);
console.log(mutiplicar2); //podemos ver que si me esta devolviendo un nuevo array aplicando la operación [5, 10, 15, 20, 25];
//
