const url = "https://jsonplaceholder.typicode.com/todos/";

//vamos a trababajar con get

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
