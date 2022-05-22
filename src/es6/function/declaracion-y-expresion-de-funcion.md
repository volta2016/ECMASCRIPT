# Funciones

Hay 2 formas de declarar una función

## Declaración de función (function statement)

Una de las principales entre ellas es que el nombre es obligatorio
en declaración de función (tiene que estar presente el nombre)

```js
function saludar() {}
```

## Expresiones de función

Cuando usamos expresión de función el nombre es opcional de alguna manera es hasta irrelevante

```js
let a = function () {};

let f = function suma() {};
f();
```

en este contexto la declaración suma no existe, ejecutamos el JavaScript nos dice que suma no está definido. Nos está diciendo que cuando la función se declara a través de una función el intérprete no se va quejar que haya un nombre de una función en este caso suma, pero lo va ignorar y el nombre final de la función va ser el que está a la izquierda en la expresión

Cómo se cuando es una declaración de función y cuando es una declaración de expresión ?

Porque la declaración de expresión siempre empieza con la palabra reservada function, cuando la primer palabra de la línea de código es **function**
las reglas que se aplican son la de **declaración de función** y cuando es cualquier otra palabra como una variable o cualquier otra cosa entonces la reglas que aplica son las de expresión

Una de las cosas que pasa con la funciones es que JavaScript mueve la declaraciones de las funciones y de las variables a lo más alto del alcance

### JS Mueve la declaración de funciones y variables a los más alto del alcance este es un proceso que se llama HOISTING

En termino prácticos que significa que se muevan las declaraciones al tope del alcance

Muchos lenguajes de programación primero tienen que estar las declaraciones y después podemos utilizar la función

```js
function saludar() {
  console.log("hola");
}
saludar();
```

en JS gracias al HOISTING yo podría utilizar la función si incluso ante de haberla declarado en el código

```js
saludar();

function saludar() {
  console.log("hola");
}
```

el proceso de HOISTING sucede solamente cuando usamos declaraciones de funciones, en expresión de funciones el proceso de hoisting no aplica

```js
saludar();

let saludar = function () {
  console.log("hola");
};
```

en este caso las reglas que aplica ya son distinta no va mostrar hola en la consola

- Cuando estamos utilizando expresión de función podemos estar utilizar una sintaxis alternativa que se llaman **funciones de flecha** algo que podemos concluir que cuando vemos aplicado **funciones de flecha** podemos asumir que son las reglas de expresión de función. Las **funciones de flecha** no existen en la declaración de función.

Aunque el nombre en expresión de función es opcional, si podemos asignar el nombre a una expresión de función cuando la guardamos en una variable

```js
saludar();

let saludar = function () {
  console.log("hola");
};
```

podemos entender que el nombre de esta función es **saludar**

```js
function saludar() {}
```

solamente que está escrito de una manera distinta a que yo hiciera esto, además de que está escrito distinto, ya vimos que aplica distintas reglas el HOISTING, el nombre como se asigna es diferente

- Las expresiones de función pueden o no tener nombre
- Las expresiones de función sin nombre, se conocen como funciones anónimas
- Las expresiones de función pueden usar la sintaxis de flecha
