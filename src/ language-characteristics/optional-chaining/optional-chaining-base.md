# Optional Chaining ?.

Es muy similar al operador de encadenamiento que ya conocemos y hemos
utilizado bastante que es el del punto (.)

Este punto me permite acceder a la propiedad de un objeto

```js
//Optional Chaining (?.) / Chaining (.)

let user = { name: "kyo" };

console.log(usuario?.name);
```

La principal diferencia entre estos 2 operadores, es que cuando usas
el operador de encadenamiento opcional, "no es necesario verificar si algunas
de las referencias son nulas

```js
//Optional Chaining (?.) / Chaining (.)

let user = { name: "kyo" };

console.log(user.grades.math);
```

la propiedad math no puede ser leída de grades, ya que grades es undefined
TypeError: Cannot read properties of undefined (reading 'math')

```js
//Optional Chaining (?.) / Chaining (.)
let user2 = { name: "kyo" };

console.log(user2?.grades?.math); //udedined
```

en cambio si uso el optional chaining no va haber ningún error simplemente el
resultado va ser undefines. Simplemente toda la expresión retorna udenfined.

Si en un punto tú estás seguro que si la propiedad va existir o si es udenfined
a partir de ahí vas usar el optional chaining. Es muy util cuando estamos accediendo
a una estructura, la cual no conocemos su estructura completa y algunos de los elementos
pueda ser udefined y en cuyo caso no deseamos que arroje un error.

```js
//Optional Chaining (?.) / Chaining (.)
let user = { name: "kyo" };

user.subscribe?.(); // si la función existe no pasa nada
```
