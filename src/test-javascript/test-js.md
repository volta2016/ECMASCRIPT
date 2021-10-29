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
