# Inmutabilidad

Inmutabilidad es el concepto con que nos referimos a un objeto que no
puede modificar su valor.

Cualquier arreglo o objeto enviado a una función, se envía por referencia y por
lo tanto puede ser modificado.

## ¿Sabías que antes ya has trabajado con objetos inmutables?

si has programado en javascript ya has ocupado inmutabilidad antes.

- Los tipos primitivos como cadenas y números en Javascript son inmutables
- En un sistema inmutable, los valores pueden ser remplazados, pero la estructura
  no debe ser modificada

```js
let nombre = "code";
nombre = "machine learning"; //remplaza a la cadena code

nombre[1] = "X"; // no lo modifica, las cadenas son inmutables

console.log(nombre);
```

los objetos y los arreglos no son inmutables, son estructuras mutables y su estructura puede
ser modificada

```js
let usuario = { nombre: "Kyo" };
usuario.edad = 29; //Mutación
```

const por ejemplo, que yo lo aplique n significa que sea inmutable, son 2 cosas
diferentes. const simplemente el intérprete lo protege, pero son conceptos diferentes.
**const simplemente protege la re asignación**

```js
const usuario = { nombre: "Kyo" };
usuario.edad = 29; //Mutación
console.log(usuario); //modifico la estructura pero const no se queja
```

Los primitivos independientemente si están con var, let o const son inmutables y los objetos
y los arreglos independientemente con que se declaró la variable donde se guarda son mutables.

Estas estructuras **no son inmutables**

```js
// importante no debo tocar el objeto original
let edades = [10, 20, 30];
edades[1] = 50;
edades.push(70);

console.log(edades);
```

Si me piden que no mute al usuario, pero que agregue una propiedad como tal.
Aquí lo que estoy haciendo es remplazar el objeto original con un nuevo que conserve las
propiedades originales utilizando el operador de spread y además que agregue una propiedad

```js
let usuario = { nombre: "Kyo" };
usuarioConEdad = { ...usuario, edad: 21 }; //aplico spread
console.log(usuarioConEdad, usuario);
```

vamos a ver la misma operación pero de una forma distinta aplicada a un arreglo

```js
let numeros = [10, 20, 30];
let numerosModificados = numeros.map((numero, posicion) =>
  posicion == 1 ? 5 : numero
);
console.log(numeros);
```

```js
let numeros = [70, 90];

function addNumeros(arreglo, numero) {
  return [...arreglo, numero];
}

let numerosNuevos = addNumeros(numeros, 2);
console.log(numeros); //[ 70, 90 ]
console.log(numerosNuevos); //[ 70, 90, 2 ]
```
