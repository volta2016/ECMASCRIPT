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
