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
