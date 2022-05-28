const numeros = [1, 2, 3, 4, 5];
numeros.length = 0;
console.log(numeros); // ?

/*
El método lenght es un getter y un setter al mismo 
tiempo, esto quiere decir que podemos obtener valores 
y podemos establecer los mismos dependiendo de lo que se necesite.

En este caso usar length y "setterlo" a 0 es una buena manera de 
borrar todos los elementos de un arreglo.
*/
