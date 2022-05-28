# Spread syntax o la sintaxis de expansion

para que nosotros podemos entender cómo y cuándo utilizar spread sintax
tenemos que introducir el concepto de iterable, decimos que un objeto es iterable
en Javascript cuando puede ser separado y recorrido en partes.

Cuando pensamos en iterable lo primero que se nos viene a la mente son los
arreglos. Son un claro ejemplo de iterables, están compuesto por elementos,
cada elemento lo podemos recorrer del 0 al 100. Pero también hay otros iterables
menos conocidos, las cadenas, los objetos, map y set. Hay varios iterables en javascript

Las sintaxis de expansión como la conocemos spread operator o spread sintax
-> nos permite expandir los elementos que hay en un iterable, para que lo podemos
utilizar en distintas operaciones -> estas operaciones pueden ser clones, combinados
iterables entre si y otras operaciones que vamos a ver.

Esta sintaxis por ejemplo puede ser utilizada para expandir un iterable en forma
de argumentos para una función

```js
function add(a, b) {
  return a + b;
}

let number = [10, 20];

let result = add(...number); //esto es igual a -> add(10, 20)
console.log(result);
```

podemos realizar copias y ambos son iguales

```js
let number = [1, 2, 3, 4];

let numberCopy = [...number]; //1,2,3,4 -> si modifico la copia no afecta al original

console.log(number, numberCopy);
```

otro escenario es si queremos combinar 2 arreglos

```js
const number = [1, 2, 3, 4];

const fruits = ["apple", "mango"];

const combination = [...number, ...fruits];
console.log(combination);
```

## Esto mismo también se puede realizar en objeto

Esto es una copia profunda que no guarda relación entre si, por lo tanto si yo
modifico la copia no se modifica el original

```js
let user = { name: "Kyo" };
let userCopy = { ...user };
console.log(user, userCopy);
```

En el caso de una matriz, tenemos un arreglo con un arreglo

```js
const matrix = [1, 2, [1, 2]];

console.log(...matrix); //En esta caso conservó el arreglo [1,2]
```

combinar obje†os

```js
let user = { name: "kyo" };
let score = { scores: [7, 4, 6] };

let combination = { ...user, ...score };
console.log(combination);
```

Estas sintaxis es útil:

- para enviar un iterable en forma de argumentos
- para clonar iterable
- para combinar iterable
