/*CALLBACKS VS PROMISES*/

/*Cual es al diferencia entre entre un callback con un promises
que tienen que ver una con la otra primero debes entender 

1- Primero debes de entender que la funciones pueden ser recibidas como parámetro  
*/

/*Aquí lo que estamos haciendo es pasarle por parámetro la operación que vamos hacer con el numero 1 o el número 2 
- Lo que estamos haciendo aquí es que ahora haga una suma o puede asignar diferentes operaciones
- le estoy pasando el primer parámetro que 1, el segundo es el número 3, acá hay que hacer un poco esfuerzo de seguir la referencia de como esta siendo el hilo de ejecución
- Acá como tercer parámetro lo que le estamos pasando justamente es una función que a su vez recibe mas parámetros que lo estamos sumando o ejecutando la operación que queramos
- Lo que hay que tener en cuenta es que esta función de aquí
(a,  b) => a + b es lo que va llegar como op
- Cuando se lame op en realidad lo que se va ejecutar es esta función de aquí le paso la a y la b > a + b
- Esto lo que estamos viendo es pasarle una función como parámetro y ejecutarla "Esto es un callback" le podemos llamar callback > no es un palabra reservada 
- ¿por qué? se le llama callback por que es una llamada de vuelta, el callback es mandar de vuelta a la llamada con la información que he calculado
- Se puede utilizar la palabra done, callback, op la que quieras.
*/

/*
const operation = (num1, num2, callback) => {
  return callback(num1, num2)
}

operation(1,3, (a,  b) => a + b)
operation(2,3, (a,  b) => a * b)
operation(1,3, (a,  b) => a - b)
*/

/*como podemos hacer esto de una forma asíncrona retornamos y aplicamos un setTimeout, recibe una función y le vamos decir cuanto tiempo debe tardar para ejecutar la función


- Después de 500 ms hemos visto el 4
- Como funciona esto al operation > le estamos pasando:
argumento 1, argumento 3 y luego el callback.
- El operation lo que hace es: esto que tiene que es un setTimeout puede ser cualquier otra cosa que es asíncrono, después de 500 ms ejecuto esto y entonces ejecuto el callback, entonces envío de vuelta la información que quieres ejecutando este callback
- Ademas el callback suele ser el último parámetro tiene sentido, si la pasamos de los primero no tiene una buena lectura
*/

const operation = (num1, num2, callback) => {
  return setTimeout(() => {
    callback(num1, num2);
  }, 500);
};

operation(1, 3, (a, b) => {
  console.log(a + b);
});

/*un ejemplo de como trabaja node js
- Esto lo hace internamente de forma asíncrona y cuando termine se ejcutara la función que es el segundo parametro
fs.stat("tmp", () => {
  
})


const doAsyncStuff = (num1, num2, callback) => {
  const resultado = num1 + num2
  return setTimeout(() => {
    callback(resultado)
  }, 500)
}

doAsyncStuff(1, 4, (result) => {
  console.log(result)
})
*/

/*para hacer esto con promesas lo que habría que hacer es envolver esto en una promesa
- la diferencia aquí es que no le pasamos un callback
const doAsyncStuffWithPromises = (numero1, numero2)
- Ahora lo que haríamos es calcular el resultado
- ahora como podemos convertir esto en una promesa
const doAsyncStuffWithPromises = (numero1, numero2)
haríamos:
return new Promise()
Con el constructor de la promesa lo que recibe el constructor de la promesa es una función que recibe como parámetro por un lado:
resolve y reject

Esto quiere decir que el "new Promise()" recibe como parámetro, una función que tiene como pámetro a su vez el ::resolve:: y el ::reject::

resolve > lo vamos llamar cuando hayamos resuelto
reject > si tenemos algún problema, este caso no tenemos un problema

- dentro del del setTimeout() lo que tenemos que hacer es resolver con el resultado

- Fijemonos en las diferencias aquí estamos llamando a un callback:
return setTimeout(() => {
    callback(resultado)
  }, 500)
y acá estamos haciendo un resolve del resultado.

- de esta droma doAsyncStuffWithPromises lo que podemos hacer es pasarle los argumento 2 y 3. Esto lo que hace es devolver una promesa, se ejecutara el resolve cuando terminen los 500ms
- Aquí podemos hacer un result con el console.log(result) y ya tenemos el resultado.
Primero esta:
- Promise { <pending> }
- 5
*/

const doAsyncStuffWithCallback = (num1, num2, callback) => {
  const resultado = num1 + num2;
  return setTimeout(() => {
    callback(resultado);
  }, 500);
};

const doAsyncStuffWithPromises = (numero1, numero2) => {
  const resultado = numero1 + numero2;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resultado);
    }, 500);
  });
};

doAsyncStuffWithCallback(1, 4, (result) => {
  console.log(result);
});

doAsyncStuffWithPromises(2, 3).then((result) => console.log(result));

/*también puedes utilizarlo con async await
const result = await doAsyncStuffWithPromises(2,3)

Conclusión el callback podrías hacerlo aunque no fuese asíncrono en react muchas veces se habla de callback cuando tu pasa una función hacia un hijo. porque lo que estás diciendo con ese callback, cuando hagas algo llama a esta función para avisarme de vuelta para yo hacer otra cosa. Por eso se llama callback porque es una llamada de vuelta, solo que a la llama de vuelta le pasas como parámetro otra cosa, al callback le estamos pasando el resultado

const doAsyncStuffWithCallback = (num1, num2, callback) => {
  const resultado = num1 + num2
  return setTimeout(() => {
    callback(resultado)
  }, 500)
}
también aveces tiene setido devolver una promesa sin devolver nada

lo que se esta pasando al map es un callback y no puedes hacer un async await dentro de un map, porque se esta ejecutando de forma que no espera,lo que espera es que se ejecute la función
*/

const iterar = [1, 2, 3, 4].map((item) => item * 2);
console.log(iterar);
