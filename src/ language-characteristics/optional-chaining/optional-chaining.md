# Optional chaining

## Práctica

Muchas veces has tenido que hacer esto

```js
var street = user.address && user.address.street;
```

Aqui buscas si, el objeto usuario tiene dentro un key llamado address, entonces pon
dentro de la variable street - user.address.street

puedes que te toque hacer esto en tu día a día, pero el código no es tan fácil
de leer, hasta puede ser redundante

que tal si cambiamos esta línea:

```js
var street = user.address && user.address.street; //super explicito
```

por esta línea:

```js
var street = user.address?.street;
```

- Las líneas de código anterior son exactamente lo mismo

con este operador al **user.address** le estamos devolviendo lo mismo que es
pero para el segundo elemento, solo le aplicó el signo de interrogación, el punto
y lo siguiente que va llevar?.street

con **optional chaining** queda más legible, si queremos saber si algún objeto existe, luego
quiero saber si algún elemento dentro de ese objeto existe, recién asigna algún valor o hace algún cambio
dentro de mi lógica de JavaScript

## Acceso profundo de propiedades nested

```js
const = {
  foo: {
   bar: {
     baz: 42
   },
  },
}

const baz = obj?.foo?.bar?.baz:

const safe = obj?.qux?.baz: //undefined
```

para ejecutar nuestro ejercicio

```bash
yarn add @babel/cli @babel/core @babel/plugin-proposal-optional-chaining -E

```

//bundle de babel

```bash


npx babel app.js -o bundle.js
```

```js
const user = {
  name: "leonidas",
};

if (user?.name) {
  console.log("existe user.name");
}
```

esto es lo que hubiésemos hecho a mano si no tuviéramos el optional
chaining

vemos a lo que nos transpila

```js
if (user !== null && user !== void 0 && user.name) {
  console.log("existe user.name");
}
```

con este comando lee lo que hay dentro de **bundle.js**

```bash
npx babel --plugins @babel/plugin-proposal-optional-chaining app.js -o bundle.js && node bundle.js
```
