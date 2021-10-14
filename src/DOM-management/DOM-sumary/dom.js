//consultar obtener elementos del DOM
//exiten todas estas formas de acceder a elementos del DOM
const element = document.querySelector("#box");
const element_two = document.getElementById("box");
const element_three = document.getElementsByClassName("group")[0];
//sintaxis mas corta llamo directamente al id del button sin almacenar en una var
window.button.addEventListener("click", () => {
	alert("button ok!");
});
console.log(element);
console.log(element_two, element_three);

//getElementbyClass retorna un array ya que puedes hacer multiples match con elementos del DOM  HTMLCollection(3)
const elementClass = document.getElementsByClassName("number");
console.log(elementClass);

//Element.append();

//El método inserta un conjunto de objetos Node u objetos DOMString después del último hijo del Elemento.
//Los objetos DOMString se insertan como nodos equivalentes a texto.

//sintaxys
// Append Something example
const app = document.querySelector("#app");
const parragrah = document.createElement("p");
parragrah.textContent = "append()";
app.append(parragrah);

//example 2
const app_2 = document.querySelector("#app2");
const langs = ["JavaScript", "TypeScript", "Css"];

const nodes = langs.map((lang) => {
	const li = document.createElement("li");
	li.textContent = lang;
	return li;
});

app_2.append(...nodes);
