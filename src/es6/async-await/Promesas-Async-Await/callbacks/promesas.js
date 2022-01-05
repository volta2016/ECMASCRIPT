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

//Se pueden manejar los errores en una función de callback > claro que si

//A esta funcion lo que yo quiero es enviarle un Id y que me devuelva especificamente el objeto señalado. Si le mando el id 1 > quiero que me devuelva el primer objeto

const findById = (id, callback) => {
  const post = posts.find((item) => item.id === id); // esto nos va devolver el objeto lo va a guardar

  callback(post);
};

//recordemos que esta es la invocación de toda esta función que declaramos arriba
findById(1, (post) => {
  console.log(post);
});
