# export e import

- Lo primero que debes hacer para acceder a las funciones del módulo es exportarlas
- Esto se hace usando la declaración export
- Puedes exportar funciones, var let const
- Deben ser elementos de nivel superior: no puedes usar export dentro de una función, por ejemplo
- Esto se conoce como **exportaciones con nombre**

```html
<script src="js/app.js"></script>
```

```js
export const sandia = "🍉";
```

```js
import { sandia } from "./persona.js";
console.log(sandia);
```

WARNING

Uncaught SyntaxError: Cannot use import statement outside a module

si no aplicamos que el archivo app.js sea de type="module" no va a funcionar

```js
<script src="js/app.js" type="module"></script>
```

## Alternaiva 1

- archivo frutas.js

```js
export const sandia = "";
export const kiwi = "🥝";

export function guinda() {
  console.log("🍒");
}

export function frutilla() {
  console.log("🍓");
}
```

- archivo app.js

```js
import { sandia, kiwi, guinda, frutilla } from "./frutas";

console.log(sandia);
console.log(kiwi);

guinda();
frutilla();
```

## Alternativa 2

```js
const manzana = "🍎";
const banana = "🍌";

function guinda() {
  console.log("🍒");
}

const frutilla = () => {
  console.log("🍓");
};

export { manzana, banana, guinda, frutilla };
```

## export default

- También hay un tipo de exportación llamado exportación predeterminada
- 👀 **Solo se permite un exportación predeterminada por módulo**

```js
export default function () {
  console.log("🍒");
}

import guinda from "./frutas.js";
guinda();
```

## arrow function

```js
export default () => {
  console.log("🍏");
};

//note que se puede utilizar cualquier nombre
import appleGreen from "./frutas.js";

appleGreen();
```

## export con alias

- archivo frutas.js

```js
const manzana = "🍏";
const banana = "🍌";

function guinda() {
  console.log("🍒");
}

export default () => {
  console.log("🥭");
};

export { manzana, banana, guinda };
```

- archivo app.js

```js
import {
  manzana as manazaVerde,
  banana as platano,
  guinda as cereza,
} from "./frutas.js";

import mango from "./frutas.js";

console.log(manzanaVerde);
console.log(platano);
guinda();
mango();
```
