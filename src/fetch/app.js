const url = "https://jsonplaceholder.typicode.com/todos/";

// fetch("https://jsonplaceholder.typicode.com/todos/").then((res) =>
//   console.log(res)
// );

//vamos a trababajar con get

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finalizo"));

//async await

// la traformamos en .json - ya viene en ese formato pero la documentación dice que debemos aplicar ese método res.json()

const findPostById = async (id) => {
  try {
    const res = await fetch(`${url}${id}`);
    const post = await res.json();
    console.log(post);
  } catch (error) {
    console.log(error);
  }
};

findPostById(50);
