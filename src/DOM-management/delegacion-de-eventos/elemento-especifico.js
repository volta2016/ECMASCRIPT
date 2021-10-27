/* 
¿ cómo activo un evento para un elemento en específico?

matches (opens new window): El método matches() comprueba si el Element sería seleccionable por el selector CSS especificado en la cadena; en caso contrario, retorna false.
dataset


TIP

Puedes seleccionar todo el document, así no tienes que estar detectando el componente principal 🤙

document.addEventListener()
*/

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  // console.log(e.target.id);
  if (e.target.id === "father") {
    console.log("You clicked on the father");
  }

  // console.log(e.target.matches(".border-danger"));
  if (e.target.matches(".border-secondary")) {
    console.log("You clicked on the son");
  }

  // data-set
  // console.log(e.target.dataset["div"]);
  // console.log(e.target.dataset.div);
  if (e.target.dataset["div"] === "div-grandson") {
    console.log("You clicked on the grandson");
  }
});
