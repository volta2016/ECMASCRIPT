# Rest operator

Da alguna manera puedes pensar en el operador rest como el inverso de spread.
Lo que rest nos permite es agrupar normalmente los sobrante en una operación,
para una función.

Igual que el spread syntax usa los 3 puntos

//Operador rest {...} -> Spread syntax {...}

Pero su comportamiento es diferente y como se como es el Operador Rest y Cuando
es el de expansión, dependiendo en que escenarios se están utilizando

El operador rest si yo lo coloco en los argumentos de una función
lo que va pasar es que para los 2 primeros argumentos que existen parámetros
se guardan correctamente, si paso 10 y 20 estos se van a guardar en a y en b
y todos los demás se van contraer en un iterable con el nombre otros.

Todos los que no están definidos, se contraen en este elemento

```js
let numeros = [10, 20, 100, 3, 20, 15];

let [primero, segundo, ...otros] = numeros;

console.log(otros);
```

Este operador rest también funciona con objetos

```js
let object = { name: "kyo", years: 20, location: "Canada" };

let { name, ...others } = object;
console.log(others);
```

👀 ojo que hay otras formas de convertir un objeto hacia un arreglo (o aplanarlo)
pero no con esa sintaxis, el rest operator lo que va hacer es conservar
la misma estructura, los restante de un objeto se guardan en un objeto,
los restante de una arreglo se guardan en un arreglo.

⭐ Con el rest operator yo puedo hacer referencia a todo lo que sobra a todo los demás
y lo que se va a guardar en esta variable, son todas la propiedades que no están listadas
acá.

Por ejemplo si quiero sacar location, lo puedo hacer con esta sintaxis
del rest operator. Esto me sirve si me dicen necesito un objeto, pero sin una
propiedad en específico, yo puedo combinar desestructuración y el operador
rest para sacar esta propiedad, hacia una variable nueva y todo lodemáss
guardarlo en un nuevo objeto

```js
let object = { name: "kyo", years: 20, location: "Canada" };

let { location, ...newObject } = object;
console.log(newObject); //{ name: 'kyo', years: 20 }
```

🔴 Una confusión que se puede generar es que ambos utilizan 3 puntos, pero el
lugar en que se utilizan es diferente.

Del en 100 en adelante van terminar en la variable otros (se contraen)

```js
function suma(a, b, ...otros) {
  console.log(otros);
}

suma(10, 20, 100, 3, 4, 20, "apple");
```

## Vamos a identificar con algunos ejercicios

```js
//que es en el parámetro de la función ? -> aquí es rest
function test(...numerosDos) {
  console.log();
}

let numeros = [1, 2, 3];
test(...numeros); // ¿Que es?
```

Respuesta: Spread
En este caso cuando es un estructura ya existente y la colocó como argumento de
una función, lo que hace es expandir

👀 dentro de la declaración de la función en el parámetro -> lo que va hacer
es tomar toda la lista de argumentos y juntarla en un arreglo

👁️ En desestructuración cuando aparece como parte de la desestructuración
siempre es rest.

```js
let numeros = [1, 2, 3];
let numerosDos = [10, 20];

let [...restantes] = [...numeros, numerosDos];
```

- El lado izquierdo estamos usando el operador Rest -> para tomar todos en un
  nuevo arreglo que se se llame restantes
- Del lado derecho estamos usando Spread -> expandir una estructura que ya existe
  dentro de la declaración de un arreglo, en este caso para combinar 2 arreglos

¿Por qué es importante aprender spread?

Como aprendimos pase por valor y pase por referencia. Muchas veces no deseamos
que una estructura como un arreglo o como un objeto sean enviados como referencia a
una función, porque si recibimos una arreglo o un objeto en una función y lo modificamos
dentro de la función -> Estaríamos también modificando por fuera entonces en muchas
ocasiones lo que necesitamos es hacer un copia de un objeto o un arreglo para trabajar
dentro de una función y entonces no modificar el original. En todos esos
casos usamos alguna combinación del spread, desestructuración y rest. Para crear nuevas
estructuras, para poder duplicar, incluso para poder eliminar y eso es común en React
