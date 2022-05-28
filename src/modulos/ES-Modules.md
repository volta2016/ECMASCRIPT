Es Modules

Un modulo nos permite dividir la funcionalidad
del codigo en piezas mas pequeñas que sean mas faciles de mantener

- Un modulo es una manera mas de seperar nuestro código

## Una cosa que hacen interezante a los modulos es que introducen su propio alcance el llamado module scope

Como explica Link Clark. Los módulos nos permiten abstraer lógica y comunicarla
con otros modulos sin usar el scope.

Que es lo que hace que un archivo de JS sea un modulo, como puedo
decir yo que un archivo se convierta en modulo

Si tu archivo exporta variables o importa de otro modulo, eso automaticamente
lo convierte en un módulo, tanto el archivo que esta exportando datos, como el
que lo este importando de otros se convierten automaticamente en modulos

modulos.js

```js
let numeros = [1, 2, 3, 4, 5]; // solo puedo acceder a ella dentro del módulo
export const name = "Kyo";

export function greetings() {
  console.log("hola");
}

export default {
  name,
  greetings,
};
```

index.js

```js
import mod from "./module"; //import default
import { name, greetings } from "./module"; // import by name
import * as modu from "./module"; //import all

console.log(modu);
```
