# El alcance o escope

El scope es una colección de variables, funciones y objetos, que están a tu alcance en algún punto de tu código

En JavaScript existen 2 tipos comunes del alcance

- Scope global
- Scope local

## Scope global

El alcance globale es todo aquello que no ha sido declarado dentro de un bloque o una función

Globales -> se usan en cuerpo principal,
Se usan en funciones

## Scope local

El alcance local hace referencia a todos los elementos disponibles solo para una función, **se crea un alcance local para esta función**

## Locales

Solo en función declarada

```js
let name = "kyo"; //alcance global

function salute() {
  let year = 29; //alcance local fuera de esta función no se puede utlizar
  console.log(name, year);
}
saludar();
```

esto que nos demuestra, que la variable que estaba afuera, que es del alcance global esta disponible dentro de la función y la variable que esta dentro de la función, que es de scope local tambien esta disponible.

Pero que pasa si ahora queremos utlizar esas variables aquí afuera

```js
let name = "kyo"; //alcance global

function salute() {
  let year = 29; //alcance local fuera de esta función no se puede utlizar
  console.log(name, year);
}
salute();

console.log(name, year);
```

la variable que tiene un alcance local year no la podemos utlizar fuera de la función

```js
let name = "kyo"; //alcance global

function salute() {
  let year = 29; //alcance local fuera de esta función no se puede utlizar
  console.log(name, year);
}
salute();

console.log(name, year);
```

**una variable declara dentro del cuerpo de una función solamente esta disponible ahí, fuera de esa función esa variable ya no existe**

Cuál es el problema del alcance global?

El problema de abusar del alcance global es que todos dependemos de los mismos elementos, se traduce en código mas complejo si algún elemento falla, no puedes saber porque fallo, donde fallo o como remplazarlo ya que muchos están interactuando con las mismas cosas, por ejemplo si una función esta bien hecha y solamente utliza su alcance local y la función falla, sabes que el problema tiene que estar en el cuerpo de esa función, porque no esta utlizando nada mas

**Una función debe operar solo con la información del alcance loca y todo aquello que necesite del exterior debe comunicar hacia el exterior debe ser vía retorno.**
