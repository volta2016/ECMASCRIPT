# JavaScript no es un lenguaje orientado a objetos basado en clases. Pero todavía tiene formas de usar la programación orientada a objetos (POO).

Según Wikipedia, la programación basada en clases es:

"...un estilo de programación orientada a objetos (POO), en el que
la herencia se produce mediante la definición de clases de objetos, en lugar de
que la herencia se produzca únicamente a través de los objetos..."

El modelo más popular de POO está basado en clases.

**Pero JavaScript no es un lenguaje basado en clases, es un lenguaje
basado en prototipos.**

"Un lenguaje basado en prototipos toma el concepto de objeto prototípico, un objeto
que se utiliza como una plantilla a partir de la cual se obtiene el conjunto inicial
de propiedades de un nuevo objeto."

Vamos analizandoo código

```js
let names = {
  firstName: "Kyo",
  lastName: "Rioku",
};
console.log(names.firstName);
console.log(names.hasOwnProperty("secondName"));
// Resultado esperado:
// Kyo
// false
```

El objeto de la variable names solo tiene dos propiedades: firstName y lastName. Ningún método en absoluto.

Entonces, ¿de dónde viene hasOwnProperty?

Bueno, viene del prototipo Object.

```js
console.log(nombres);
```
