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

Cuando expandas los resultados en la consola, obtendrás esto:

![prototype](./images/prototype.jpg)

¿Notas la última propiedad: **<prototype>?** Intenta expandirlo:

Verás un conjunto de propiedades en el constructor Object. Todas
estas propiedades provienen del prototipo Object global.
Si observas de cerca, también notarás nuestra propiedad hasOwnProperty.

## La propiedad <prototype>

Esto apunta al objeto que se utiliza como prototipo.

Esta es la propiedad de cada objeto que le da acceso a la propiedad
Object prototype(Prototipo de objeto).

## Modificando la propiedad <prototype>

Esta propiedad se puede modificar, indicando explícitamente
que debería referirse a otro prototipo. Se utilizan los siguientes
métodos para lograr esto:

Método Object.create():

```js
function Perro(nombre, edad) {
  let perro = Object.create(ObjetoConstructor);
  perro.nombre = nombre;
  perro.edad = edad;
  return perro;
}

let ObjetoConstructor = {
  habla: function () {
    return "¡Soy un perro!";
  },
};

let firulais = Perro("Firulais", 9);
console.log(firulais);
```

En la consola, esto es lo que tendrías:

![ObjetoConstructors](./images/ObjetoConstructors.jpg)

¿Observas la propiedad **<prototype>** y el método habla?

Object.create usa el argumento que se le pasa para convertirse
en el prototipo.

## Palabra clave new:

```js
function Perro(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Perro.prototype.habla = function () {
  return "¡Soy un perro!";
};

let bobby = new Perro("Bobby", 12);
```

La propiedad <prototype> de bobby, es dirigida al prototipo de Perro.
Pero recuerda, el prototipo de Perro es un objeto (par clave y valor),
por lo tanto, también tiene una propiedad <prototype> que se refiere al
prototipo de objeto global.

Esta técnica se conoce como **PROTOTYPE CHAINING (encadenamiento de prototipos).**

Ten en cuenta que: la palabra clave **new,** hace lo mismo que **Object.create()** pero solo
lo hace más fácil, ya que hace algunas cosas automáticamente por ti.

**Cada objeto en JavaScript tiene acceso al prototipo de Object por defecto.
Si está configurado para usar otro prototipo, digamos prototype2, entonces
prototype2 también tendría acceso al prototipo de Object por defecto, y así sucesivamente.**

## Combinación de objeto + función

Probablemente estés confundido por el hecho de que Perro es una función (function Perro(){}),
y tiene propiedades a las que se accede con una notación de puntos. Esto se conoce como una
combinación de objeto y función.

Cuando se declaran funciones, por defecto, se les asignan muchas propiedades adjuntas.
Recuerda que las funciones también son objetos en los tipos de datos de JavaScript.

# Clases

JavaScript introdujo la palabra clave **class** en ECMAScript 2015.
Hace que JavaScript parezca un lenguaje POO. Pero solo es azúcar
sintáctico sobre la técnica de creación de prototipos existente.
Continúa con la creación de prototipos en segundo plano, pero hace
que el cuerpo exterior parezca POO. Ahora veremos cómo es posible.

El siguiente ejemplo es un uso general de una **class** en JavaScript:

```js
class Animales {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }

  canta() {
    return `${this.nombre} puede cantar`;
  }

  baila() {
    return `${this.nombre} puede bailar`;
  }
}

let bango = new Animales("Bango", "Akita");
console.log(bango);
```

![class](./images/class.jpg)
