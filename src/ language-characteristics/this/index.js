const url = "https://jsonplaceholder.typicode.com/todos/";

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

const getPokemens = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    const PokemonNames = data.results.map((poke) => poke);
    console.log(PokemonNames);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finalizo");
  }
};

getPokemens();
