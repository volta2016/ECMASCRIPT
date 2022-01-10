const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

/*Se pueden manejar los errores en una función de callback > claro que si
usualmente los callback como nomenclatura:
1- Siempre se envía como primer argumento el error > null
2- Después la respuesta satisfactoria > mensaje
Por lo tanto cuando cuando definimos nuestro segundo parámetro que es el callback pasamos err, post > como argumento
Por ahora estamos trabajando con array de objeto con fines prácticos
*/

//A esta función lo que yo quiero es enviarle un Id y que me devuelva específicamente el objeto señalado. Si le mando el id 1 > quiero que me devuelva el primer objeto

/*
Ahora vamos a retornar una nueva promesa que recibe 2 parámetros:
- La respuesta satisfactoria se llama > resolve
- Respuesta negativa (no es satisfactoria) > reject

Estamos haciendo la misma operación de los callback pero ahora instanciando una new Promise
"ahora recibimos solamente el id ahora es mucho más ordenado, no tenemos que enviar otra función"
Invoco mi función pero se que esto es una promesa findById(1);
> Por lo tanto vamos aplicar el .then que como:
tráeme la respuesta satisfactoria de esa promesa y después vamos a ver la respuesta que no es satisfactoria
> Que recibe mi respuesta satisfactoria en este caso el post

"Es mucho más ordenado trabajar con las promesas que con los callback que se van anidando"
Recapitulando:
> Nuevamente recibimos el id que queremos buscar
> luego hacemos la lógica para que encuentre nuevamente ese post
> luego retornamos una promesa, las promesas recibe 2 parámetros:
- respuesta satisfactoria y la respuesta errónea
> si mandamos la respuesta satisfactoria le pasamos a resolve el post
> caso contrario pasamos a reject con el mensaje de error
> then entrega el resultado satisfactorio
> en caso erróneo (negativo) vamos a utilizar el catch > el catch una vez
los then todo los que quieras
OJO > hay que tener cuidado con el ; en el then puede que no se ejecute
acá un ejemplo de como debe quedar
findById(1)
  .then((post) => console.log(post))
  .catch((error) => console.log(error));

También esta el hell con las promesas
hell
findPostById(1)
    .then((post) => {
        console.log(post.title);
        return findPostById(2);
    })
    .then((post) => {
        console.log(post.title);
        return findPostById(3);
    })
    .then((post) => {
        console.log(post.title);
        return findPostById(4);
    })
    .then((post) => console.log(post.title))
    .catch((e) => console.log(e));

cuando ejecutamos el programa primero tenemos esto en consola
console.log("fin del código");
Por qué ? pasa esto las promesas ya es asíncrono se va empezar a ejecutar pero no quiere decir que nuestro código se va a detener.
Cuando esto se ejecuta findById(1) > va seguir esperando la promesa que esta caso demora 2ms simulado, nosotros podemos seguir con el transcurso del programa

Ya con las promesas nuestro código comienza a ser asíncrono osea que se puede ejecutar de forma paralela a algo que va estar esperando la promesa mientras podemos continuar ejecutando otras tareas

Tenemos que tomar esto en cuenta con las promesas ya estamos ejecutando código que es async
*/

/*
const findById = (id) => {
  const post = posts.find((item) => item.id === id); // esto nos va devolver el objeto lo va a guardar si no undefined

  //devolver la promesa
  return new Promise((resolve, reject) => {
    if (post) {
      resolve(post);
    } else {
      reject("No encontrado por id: " + id);
    }
  });
};
*/

//podemos ahorra código de esta forma
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

//recordemos que esta es la invocación de toda esta función que declaramos arriba

const search = async () => {
  try {
    // solo en el caso que no dependan una de la otra
    const resPosts = await Promise.all([findById(1), findById(2)]);
    // console.log(rePosts);
    // console.log(resPosts[0].title, resPosts[1].title);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("se ejecuta si o si");
  }
};

search();

console.log("fin del código");
