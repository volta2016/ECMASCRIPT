# El alcance o escope

El scope es una colección de variables, funciones y objetos, que están a tu alcance en algún punto de tu código

En JavaScript existen 2 tipos comunes del alcance

- Scope global
- Scope local

## Scope global

El alcance global es todo aquello que no ha sido declarado dentro de un bloque o una función

Globales -> se usan en cuerpo principal,
Se usan en funciones

## Scope local

El alcance local hace referencia a todos los elementos disponibles solo para una función, **se crea un alcance local para esta función**

## Locales

Solo en función declarada

```js
let name = "kyo"; //alcance global

function salute() {
  let year = 29; //alcance local fuera de esta función no se puede utilizar
  console.log(name, year);
}
saludar();
```

esto que nos demuestra, que la variable que estaba afuera, que es del alcance global está disponible dentro de la función y la variable que esta dentro de la función, que es de scope local también está disponible.

Pero que pasa si ahora queremos utilizar esas variables aquí afuera

```js
let name = "kyo"; //alcance global

function salute() {
  let year = 29; //alcance local fuera de esta función no se puede utilizar
  console.log(name, year);
}
salute();

console.log(name, year);
```

la variable que tiene un alcance local year no la podemos utilizar fuera de la función

```js
let name = "kyo"; //alcance global

function salute() {
  let year = 29; //alcance local fuera de esta función no se puede utilizar
  console.log(name, year);
}
salute();

console.log(name, year);
```

**una variable declarada dentro del cuerpo de una función solamente está disponible ahí, fuera de esa función esa variable ya no existe**

Cuál es el problema del alcance global?

El problema de abusar del alcance global es que todos dependemos de los mismos elementos, se traduce en código más complejo si algún elemento falla, no puedes saber porque fallo, donde fallo o como reemplazarlo ya que muchos están interactuando con las mismas cosas, por ejemplo si una función está bien hecha y solamente utiliza su alcance local y la función falla, sabes que el problema tiene que estar en el cuerpo de esa función, porque no está utilizando nada más

**Una función debe operar solo con la información del alcance local y todo aquello que necesita del exterior debe comunicarse por argumento. Todo lo que necesita comunicar hacia el exterior debe ser vía retorno.**

## Resumen:

- Tenemos dos tipos de alcance: Local y global

- El global recuerda que está disponible en todas las partes del código, pero no es recomendable abusar de su uso

- El local es el que se crea para cada función cuando esta se ejecuta

- De ser posible, se recomienda que prefieras colocar tus elementos en el scope local de una función y no en el global

```js
function Presentacion(nombre, admin) {
  if (admin) {
    let rol = "administrador";
  } else {
    rol = "Usuario";
  }

  console.log("Soy " + nombre + "y mi rol es " + rol);
}

Presentacion("Uriel", true);
```

vamos a tener el siguiente error si usamos let:

"error"
"ReferenceError: rol is not defined

estos sucede porque:

los que usan let y const tienen alcance de bloque no tienen el mismo alcance que las var, que quiere decir que tienen alcance de bloque

```js
if (admin) {
  let rol = "administrador";
}
```

al menos esta variable va estar disponible únicamente en esta sección del código, recordemos que en este lenguaje un bloque es un conjunto de instrucciones delimitadas por una llave que la abre y una llave que cierra, entonces la variable definida con let solamente existe en ese bloque.

## caso sin error

```js
function Presentacion(nombre, admin) {
  if (admin) {
    var rol = "administrador";
  } else {
    rol = "Usuario";
  }

  console.log("Soy " + nombre + "y mi rol es " + rol);
}

Presentacion("Uriel", true);
```

en este caso funciona por los elementos declarados con var, tienen alcance de función no de bloque. Esto quiere decir que una variable como esta que ha sido declarada su alcance es de toda la función nos referimos a este bloque de código.

```js
function Presentacion(nombre, admin) {
  //alcance de var todo bloque de la función
  if (admin) {
    var rol = "administrador";
  } else {
    rol = "Usuario";
  }

  console.log("Soy " + nombre + "y mi rol es " + rol);
}
```

a pesar de que yo la haya declarado dentro de un bloque, var siempre va ir al alcance local,

- si declaras un variable con let o const dentro de un ciclo o una condición, esta no va estar disponible fuera de este bloque

## HOISTING

Hoisting es el concepto por el que la declaración de funciones y la declaración de variables, se mueven al inicio del alcance

## HOISTING DE VARIABLE

Vamos a ver de manera práctica

```js
console.log(x);
var x = 20; //undefined
```

que imprime ahora si utilizamos let

```js
console.log(x);
let x = 20; //error no podemos acceder a x antes de la inicialización
```

el comportamiento que acabamos de ver se explica de la siguiente manera, independientemente su utilizamos var o let, el proceso de HOISTING solamente se lleva la **declaración** al principio del alcance, pero lo la **asignación**. Esto que quiere decir después del proceso que haga el intérprete con estas operaciones, nuestro código quedaría de la siguiente manera.

Esto lo hace internamente el lenguaje:

```js
var x;
console.log(x);

x = 20;
```

Esto al principio nos da undefined y después conserva en su lugar la asignación **ese el proceso de HOISTING ya visual** solamente esto lo hace el lenguaje internamente, no lo hacemos nosotros

esto

```js
var x = 20;
```

es igual a esto

```js
var x;
console.log(x);

x = 20;
```

lo ideal es no hacer esto, nunca tratar de utilizar una variable que no ha sido primeramente inicializada

## Resumen

var siempre se aloja en el scope local dentro de una función o en el global fuera de una función

let | const puede alojarse en el scope, local, de bloque y global, según sea declarada en una función, en un bloque o fuera de ambos

```js
function saludar()
let x 10
```

aqui la variable x esta en alcance global puede usarse en cualquier parte de la funcion

```js
function saludaer()
    let x 10
```

esta dentro de este bloque y no puede usarse fuera de este bloque, el resto del cuerpo de funcion no se va poder utilizar. Si esta dentro del bloque le pertenece al bloque

El valor para una variable con var, que no ha sido asignada, es undefined

El valor para una variable con let, que no ha sido asignada es unitialized

Las variables tambien son alojadas al tope del scope, sin embargo si intentas usar una variable no inicializada, recibiras un error
