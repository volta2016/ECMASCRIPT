# Async await

async : La declaración de función async define una función asíncrona, la cual devuelve una AsyncFunction. (async devuelve una promesa)
await : El operador await es usado para esperar a una Promise. Sólo puede ser usado dentro de una función async function.

recordemos que esta es la invocación de toda esta función que declaramos arriba

```js
findById(1)
  .then((post) => console.log(post))
  .catch((error) => console.log(error));
```

vamos a imitar lo que tenemos en findById() pero utilizando async await
los post los vamos a guardar en una constante post y esto va esperar una promesa en este caso es el findById()

- Estoy esperando que mi promesa se ejecute cuando tengo una respuesta, en este caso el post
  como esto aún no se ejecuta lo ejecuto y le mando el id correspondiente
- Para usar la palabra reservada async siempre tiene que estar dentro de un wait
- 👀 El async y el await funciona bajo promesas. No pueden hacer un await de cualquier cosa, hace el await de una promesa
  siempre y cuando tengan el resolve y el reject
- Resumen: estamos esperando un respuesta lo que se demore esta petición es la promesa.
  esperamos esa respuesta que en este caso nos va traer e post, luego lo vamos a guardar en esta constante y lo podemos
  utilizar const post = await findById(id);
- El await siempre va esperar una promesa, el await para el código

```js
const findById = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find((item) => item.id === id);
      if (post) {
        resolve(post);
      } else {
        reject("No encontrado por id: " + id);
      }
    }, 2000);
  });
```

Esto esta haciendo la simulación de que nostros consumimos algo externo que se puede demorar por ahora tenemos la data estatica

Esto es explicito lo que estamos haciendo

```js
const search = async (id) => {
  const post = await findById(id);
  console.log(post);
};

search(1);
```

¿ Como se maneja los errores con async y await ?

bloque try catch

en que caso de que nosotros intentemos mandar a la promesa, pero si nos llega pasar
esto que es un reject (recordemos que es el error que en la new Promise no encontró)
va a saltar al catch entonces yo podría pintar en un console el error

- Para el then y lo que es el bloque try catch existe el **finally** que ejecuta un código al final
  si o si independiente de que la respuesta sea satisfactoria o no
- Esta sería una forma de usar nuestro **finally cuando nosotros tenemos loading** esperamos la respuesta y
  luego en finally pasamos a false

```js
const search = async (id) => {
  let loading = true;
  try {
    const post = await findById(id);
    console.log(post);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("se ejecuta si o si");
    let loading = false;
  }
};
```

Esta solución validad solo si el post 1 depende del post 2

```js
const search = async (id) => {
  try {
    const postOne = await findById(1);
    const postTwo = await findById(postOne);
    console.log(postOne.title, postTwo.title);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("se ejecuta si o si");
  }
};
```

si mandamos el postOne como respuesta ahí si seria valido.
👀 Mucho cuidado porque el await lo que hace es esperar por lo tanto lo que esta haciendo acá:
es consultando a la promesa en 2 segundo > guarda el post 1
pero ante de llegar al console de nuevo tenemos un await > esto const postTwo = await findById(2); de nuevo
devuelve una promesa y hace de nuevo el conteo 1... 2 por lo tanto ahí tenemos los 4seg y después de estos
4seg efectivamente se pinto en consola

Es extraño anidar tanta promesas por eso decimos mi codigo es muy lento, se está demorando y puede ser por esto

```js
const postOne = await findById(1);
const postTwo = await findById(2);
```

En el caso de que el post uno no dependa de la siguiente promesa que puede ser que si traemos un id,
después estamos consultando otra base de datos de ese id es un ejemplo, ahí si es valido los 2 await

```js
const id = await findById(1);
const character = await findById(id);
```

pero en javascript tenemos la solución **Promise.all**

Vamos a crear una constante que se llama const restPosts

- Aquí si utilizan el await pero tienen algo que se llama Promise.all
- el promise.all recibe como [] la promesas que ustedes quieran ejecutar
- En este caso son las que buscan por id
- En caso de nuestras promesas no dependan de la otra promesa, acá le estamos mandando los números
  y no dependen de nada más

```js
const search = async () => {
  try {
    // const postOne = await findById(1);
    // const postTwo = await findById(2);
    // console.log(postOne.title, postTwo.title);
    const resPosts = await Promise.all([findById(1), findById(2)]);
    console.log(resPosts[0].title, resPosts[1].title);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("se ejecuta si o si");
  }
};

search();

console.log("fin del código");
```

Pero mucho cuidado si yo paso un un 4 acá

```js
const resPosts = await Promise.all([findById(4), findById(2)]);
```

nos muestra en consola.
No encontrado por id: 4

Pero que paso con el id 2 > no se va ejecutar findById(2)

va mandar las respuesta siempre y cuando todo lo que está acá
await Promise.all([findById(4), findById(2)])
**sea satisfactorio**

Si hay uno que falla va saltar al catch y no continua con nuestro código, también puede ser que eso es lo que
necesite que falle para que el cliente lo arregle o puede que no, cada vez que tengan un await y quieren hacer
otro await que no dependa utilizamos Promise.all

Si no tenemos el async dentro de nuestra función con las promesas no puede tirar un error
en consola:

Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
