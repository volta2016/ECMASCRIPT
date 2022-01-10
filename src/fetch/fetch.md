# fetch API

## TIP

- **fetch:** La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red).
  Resultará familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto de características más potente y flexible.
- El método fetch() toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar.

- **Devuelve una Promise** que resuelve en Response a esa petición, sea o no correcta.

- Una vez que Response es recuperada, hay varios métodos disponibles para definir cuál es el contenido del cuerpo y como se debe manejar.

- jsonplaceholder [jsonplaceholder.](https://jsonplaceholder.typicode.com/) es una api que nos devuelve efectivamente respuestas

la API nos devuelve

Resources
JSONPlaceholder comes with a set of 6 common resources:

/posts 100 posts
/comments 500 comments
/albums 100 albums
/photos 5000 photos
/todos 200 todos
/users 10 users

- post 1

JSON en un esyandar una forma de transferencia en donde nostros nos estamos comunicando con esta API que nos devuelve un array, pero lo devuelve el json y nosotros lo vamos a transformar

fetch recibe > una url como primer argumento de forma obligatoria
fetch no devuelve una promesa un ejemplo es como si fuera esto:

```js
const findById = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find((item) => item.id === id);
      if (post) {
        resolve(post);
      } else {
        reject("No encontrado el id: " + id);
      }
    }, 2000);
  });
```

1.  Primera tecnica que vamos aplicar es con then

si aplicamos este código vamos a ver que tengo la Response

```js
fetch("https://jsonplaceholder.typicode.com/todos/").then((res) =>
  console.log(res)
);
```

consola:

Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos/', redirected: false, status: 200, ok: true, …}
body: (...)
bodyUsed: false
headers: Headers {}
ok: true
redirected: false
status: 200
statusText: ""
type: "cors"
url: "https://jsonplaceholder.typicode.com/todos/"
[[Prototype]]: Response

de acuerdo a ese response nostros tenemos métodos disponibles para definir cual es el contenido del cuerpo

Lo que vamos hacer cuando utilicemos el .then()
vamos a retornar > aquí el return va estar de forma implicita

> vamos a retornar esa respuesta en json - **res.json()**

```js
const url = "https://jsonplaceholder.typicode.com/todos/";

//vamos a trababajar con get

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
```

resumen:

De esta url estoy recibiendo un respuesta que tengo que formatiar como se que esa respuesta viene en json > yo la formateo a json

- recibo la respuesta la trasnformo y la devuelvo es como cuando aplicamos promesas encadenadas
- luego data se va comporta con la respuesta en json
- Voy obtener todos los post
