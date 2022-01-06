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
*/

//A esta función lo que yo quiero es enviarle un Id y que me devuelva específicamente el objeto señalado. Si le mando el id 1 > quiero que me devuelva el primer objeto

/*Recapitulando: 
- Creamos nuestra función findById recibe un callback
- Buscamos el post de acuerdo a un Id > si ese Id existe efectivamente como error no mandamos nada pasamos null y como segundo argumento parámetro le pasamos el post en específico
- En caso de error yo mando el mensaje
- Para invocar findById no pide un id > mandamos el 4
- Luego el segundo parámetro es la función de callback > que recibe la función de callback recibe: 
1- el error 
2- el post 
- en caso de que exista el error retorno el error
- en caso de que exista el post lo muestro en consola
*/

const findById = (id, callback) => {
  const post = posts.find((item) => item.id === id); // esto nos va devolver el objeto lo va a guardar si no undefined

  //manejar error
  if (post) {
    callback(null, post);
  } else {
    //en el error
    callback("no se encontro el post con id " + id);
  }
};

//recordemos que esta es la invocación de toda esta función que declaramos arriba
findById(4, (err, post) => {
  if (err) return console.log(err);

  console.log(post);
});
