# Pase por valor y pase por referencia

En javascript un argumento puede ser enviado por argumento o por referencia

- Decimos que un valor ha sido enviado por referencia, cuando el parámetro apunta a la misma dirección que el argumento original

- Decimos que pasamos por valor cuando el argumento enviado es copiado en una dirección distinta para el parámetro

```js
function imprimir(nombre) {
  console.log(nombre);
}

imprimir("kyo");
```

- un **parámetro** es lo que nosotros definimos aquí en la declaración de la función y que eventualmente va a recibir un valor

- el argumento es lo que nosotros le enviamos en la ejecución de la función,
  **entonces un argumento eventualmente termina siendo almacenado en un parámetro**

## Los objetos y los arreglos son enviados por referencias

## Todo lo demás es enviado por valor

```js
function imprimir(nombre) {
  nombre = "kenshin";
  console.log(nombre);
}
let n = "kyo";
imprimir(n);
console.log(n);
```

resulta que yo puedo modificar un parámetro y eso no va afectar su valor fuera de la ejecución de la función y esto es porque este parámetro esta siendo enviado por valor, n cuando yo lo envío por argumento a esta función se envia por valor y aquí lo que se guarda ya no es la variable n, si no solamente es el valor que tiene la variable en ese momento que ese caso sería kyo

```js
function imprimir(nombre = "kyo") {
  nombre = "kenshin";
  console.log(nombre);
}
```

entonces cuando yo realizo la modificación, no hay ninguna conexión entre este parámetro y la variable que se envio como argumento.

Pero que pasa si n se convierte en un arreglo

```js
function imprimir(arreglo) {
  //arreglo | numeros apunta a la misma dirección de memoria
  arreglo[0] = 100;
  console.log(arreglo);
}

let numeros = [0];

console.log(numeros); //[0]
imprimir(numeros); //[100]
console.log(numeros); //[100]
```

al ser modificado dentro de la función también aquí conservo esos cambios.
esto pasa porque la variable se pasa por referencia, cuando yo le envío la variable como argumento al parámetro de función ambos arreglos y numeros estan apuntando a la misma dirección de memoria, no le pase este arreglo si no le pase la direccion en memoria que es la misma que tiene números. Cuando arreglo modifica lo que esta en esa dirección de memoria. Números como sigue apuntando a esa misma dirección de memoria también recibe la actualización

## Esto también aplica para los objetos

```js
function modificador(obj) {
  obj.nombre = "himura";
}

let objeto = {};

modificador(objeto);

console.log(objeto);
```

## resumen

si envio un objeto o arreglo por parámetro si se modifican. también se modifican afuera porque se están pasando por referencia, en cambio si tengo una función que recibe una cadena y tengo una variable cadenaFuera, la paso por parámetro y la vuelvo a llamar a afuera este cambio no persiste, **En este caso el argumento se está enviando por valor,** aunque cadena se está pasando a la función -> cadena y cadenaFuera están apuntando a diferente dirección de la memoria.

```js
function modificador2(cadena) {
  cadena = "hola";
}

let cadenaFuera = "Cody";

modificador2(cadenaFuera); //se esta enviando por valor la cadena

console.log(cadenaFuera);
```

## Por qué esto es importante?

Durante tu trabajo con React aprenderás del concepto de **efectos secundarios** y lo valores pasarlos por referencia son una puerta a que una función produzca efectos secudarios.
