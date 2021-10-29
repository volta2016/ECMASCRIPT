# Variables y operaciones

## ¿Qué es una variable y para qué sirve?

Una variable es un tipo de dato la cual almacenamos en memoria

## ¿Cuál es la diferencia entre declarar e inicializar una variable?

Una variable se declara para reservar su espacio de memorio, se inicializa para guardar info en ese espacio.

```js
let name; // declarar una var solo le doy un nombre su espacio en mem

let name = "kyo"; // declaro su nombre y le paso su valor eso es iniciaizar una var;
```

## 1️⃣ ¿Cuál es la diferencia entre sumar números y concatenar strings?

La diferencia es que sumar con el operador lógico aplicas una operación
entre numeros que sumar ambos numeros para obtener un resultado.

Concatenar es unir cadenas con diferentes valores para mostrar un resultado.

## ¿Cuál operador me permite sumar o concatenar?

el signo +

## 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre
Apellido
Nombre de usuario en Platzi
Edad
Correo electrónico
Mayor de edad
Dinero ahorrado
Deudas

## 3️⃣ Traduce a código JavaScript

```js
let nombre = "Kyo";
let apellido = "Kimura";
let mombreDeUsuarioEnPlatzi = "kyodev";
let edad = 22;
let correoElectrónico = "kyo@dev.com";
let MayorDeEdad = true;
let dineroAhorrado = 1000000;
let deudas = 5000;
```

## 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

```js
let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

let dineroReal = dineroAhorrado - deudas;
console.log(dineroReal);
```

# Funciones

## 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

## ¿Qué es una función?

Una funcion es un trozo de código la cual puede ejecutar ciertas tareas
o nn bloque de código que hace una serie de procedimientos

## ¿Cuándo me sirve usar una función en mi código?

- Cuando necesisito resolver tareas especificas para retornar resultados de dichas tareas.
- Cuando se repite varias lineas de codigo en el proyecto

## ¿Cuál es la diferencia entre parámetros y argumentos de una función?

Los paramemtros son los nombres que podemos pasar al cuerpo de la función.
Los argumentos son los valores que pasamos cuando ejecutamos la función.

Parametro es una variable que está en la definición de una función, argumento son los datos que se le pasan a los parametros de una función

## 2️⃣ Parametro es una variable que está en la definición de una función, argumento son los datos que se le pasan a los parametros de una función:

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + " " + lastname;
const nickname = "juandc";

console.log(
  "Mi nombre es " +
    completeName +
    ", pero prefiero que me digas " +
    nickname +
    "."
);
```

results 1:

```js
const nombreCompleto = (fullName, nick) => {
  return `Mi nombre es ${fullName}, pero prefiero que me digas ${nick}`;
};

console.log(nombreCompleto(completeName, nickname));
```

results 2:

```js
const miFuncion = (name, lastName, nickname) => {
  let fullName = `${name} ${lastName}`;
  return `Mi nombre es: ${fullName}, pero prefiero que me digas ${nickname}`;
};
console.log(miFuncion("Juan David", "Castro Gallego", "juandc"));
```

# Condicionales

## 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

## ¿Qué es una condicional?

Es un bloque de codigo que se ejecuta en caso de que se cumpla una condicion o pregunta lógic

## ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

if, else if, switch, ternario

## ¿Puedo combinar funciones y condicionales?

si

## 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}
```

respuesta:

```js
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
```

3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```js
const tipoSuscripcion = (suscripcion) => {
  var respuesta =
    suscripcion === "Basic"
      ? "Puedes tomar casi todos los cursos de Platzi durante un mes"
      : suscripcion === "Expert"
      ? "Puedes tomar casi todos los cursos de Platzi durante un año"
      : suscripcion === "Expert+"
      ? "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
      : "Solo puedes tomar los cursos gratis";
  console.log(respuesta);
};

tipoSuscripcion("Basic");
```

Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional.

```js
const tipoDeSuscripcion = "Free";

const Suscripciones = ["Free", "Basic", "Expert", "Expert+"];
const Respuestas = [
  "Solo puedes tomar los cursos gratis",
  "Puedes tomar casi todos los cursos de Platzi durante un mes",
  "Puedes tomar casi todos los cursos de Platzi durante un año",
  "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
];

// indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
let index = Suscripciones.indexOf(tipoDeSuscripcion);
if (index == -1) {
  console.error("No exisite este plan u.u");
} else {
  console.log(Respuestas[index]);
}
```

otro ejemplo:

```js
const tipoDeSuscripcion = "ExpertPlus";
const Suscripciones = [
  ["Free", "Solo puedes tomar los cursos gratis"],
  ["Basic", "Puedes tomar casi todos los cursos de Platzi durante un mes"],
  ["Expert", "Puedes tomar casi todos los cursos de Platzi durante un año"],
  [
    "ExpertPlus",
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
  ],
];

for (const suscripcion of Suscripciones) {
  if (suscripcion[0] == tipoDeSuscripcion) {
    console.log(suscripcion[1]);
  }
}
```

# Ciclos

## 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

## ¿Qué es un ciclo?

Un bloque de codigo que se repite n cantidad de veces

## ¿Qué tipos de ciclos existen en JavaScript?

for, for of, for in, while, do-while

## ¿Qué es un ciclo infinito y por qué es un problema?

Es un ciclo que nunca se va a detener, puede causar que nuestro navegador se quede pegado sin poder ejecutar ninguna acción

## ¿Puedo mezclar ciclos y condicionales?

Si se puede

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}
```

```js
//jecutamos antes al console para leer la base del numero
let i = 0;

while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

i = 7;
while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}
```

## 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

Pista: puedes usar la función prompt de JavaScript.

```js
let response = prompt("cuanto es 2 + 2 escribe tu respuesta");

if (4 === parseInt(response)) {
  alert("felicitaciones tu respuesta es correcta");
} else {
  alert("tu respuesta es incorrecta");
}
```

otro ejemplo;

```js
function juego() {
  let resultado;
  do {
    resultado = parseInt(prompt('¿Cuál es el resultado de "2 + 2". R: '));
  } while (resultado !== 4);
  if (resultado === 4);
  return console.log("¡Eres un GENIO!");
}

juego();
```

# Listas

## 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array?
Conjunto de valores del mismo tipo almacenados en una sola variable.

¿Qué es un objeto?

Un objeto es una colección de propiedades.

¿Cuándo es mejor usar objetos o arrays?

depende de la necesidad del problema podemos optar por uno u otro e incluso
mezclar estos.

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Si se pueden mezclar.

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

base:

```js
const books = ["bookbase", "book1", "book2"];
const printFirstArray = books.find((book) => book === "bookbase");
console.log(printFirstArray);
```

respuesta:

```js
const books = ["bookbase", "book1", "book2"];

const printFirstArray = function (array) {
  console.log(array[0]);
};
console.log(printFirstArray(books));
```

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
const users = [
  { id: 1, name: "John", age: 33 },
  { id: 2, name: "Kyo", age: 22 },
  { id: 3, name: "Ameley", age: 27 },
];

const printUsers = (array) => {
  array.forEach((elem) => {
    console.log(elem);
  });
};

printUsers(users);
```

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

trucazo para iterar objetos:
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values

```js
const users = { 1: "kyo", 2: "reita", 3: "nosgov" };

const printOject = (object) => {
  Object.values(object).forEach((element) => {
    console.log(element);
  });
};

printOject(users);
```
