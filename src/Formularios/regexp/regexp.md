# Expresiones Regulares

Regular Expressions (opens new window): Las expresiones regulares (a menudo llamadas RegExp o RegEx) son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas.

Fuente #02 (opens new window): Son un sistema para buscar, capturar o reemplazar texto utilizando patrones.
Estos patrones permiten realizar una búsqueda de texto de una forma relativamente sencilla y abstracta, de forma que abarca una gran cantidad de posibilidades que de otra forma sería imposible o muy costosa.

```js
/patron/flags
// notación literal
const regExpLiteral = /bluuweb/i

// notación de objeto
const regExpObjeto = new RegExp("bluuweb", "i")
```

# Flags de una RegExp

i Toma mayúsculas y minúsculas. Se suele denominar insensible a mayús/minús.
g Búsqueda global. Sigue buscando coincidencias en lugar de pararse al encontrar una.
m Multilínea. Permite a ^ y $ tratar los finales de línea \r o \n.

# Métodos de RegExp

El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.
Retorna true si existe una coincidencia entre la expresión regular y la cadena especificada; de lo contrario retorna false.
Use test()cuando desee saber si existe la ocurrencia de un patrón en una cadena

```js
console.log(regExpLiteral.test("Bluuweb")); // true
console.log(regExpLiteral.test("bluweb")); // false`
```

# Carácteres especiales

[ ] Rango de carácteres. Cualquiera de los caracteres del interior de los corchetes.
| Establece una alternativa: lo que está a la izquierda o lo que está a la derecha.

```js
const regExpLiteral = /[ue]/gi;

console.log(regExpLiteral.test("bluuweb"));
console.log(regExpLiteral.test("ignacio"));
const regExpLiteral = /bluweb|bluuweb/gi;
const str = "bluuweb";

console.log(regExpLiteral.test(str));
```

- [0-9] Un dígito del 0 al 9.
- [A-Z] Letra mayúscula de la A a la Z. Excluye ñ o letras acentuadas.
- [a-z] Letra minúscula de la a a la z. Excluye ñ o letras acentuadas.
- [A-Za-z0-9] Carácter alfanumérico (letra mayúscula, minúscula o dígito).

```js
const regExpLiteral = /[0-9]/gi;
const str = "234";

console.log(regExpLiteral.test(str));
const regExpLiteral = /[a-z]/gi;
const str = "bluuweb13";

console.log(regExpLiteral.test(str));
```

Solo números:

```js
const regExpLiteral = /^\d+$/gi;
const str = "bluuweb123";

console.log(regExpLiteral.test(str));
```

Solo letras (sin tildes):

```js
const regExpLiteral = /^[a-zA-Z ]*$/;
const str = "bluuweb";

console.log(regExpLiteral.test(str));
```

Solo letras (con tildes):

```js
/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
```

Validar email:

```js
/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
```
