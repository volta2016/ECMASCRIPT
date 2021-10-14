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

//** Element.append();

//El método inserta un conjunto de objetos Node u objetos DOMString después del último hijo del Elemento.
//Los objetos DOMString se insertan como nodos equivalentes a texto.

//El método de agregar solo nos permite agregar un nodo o texto plano(sin formato) a un elemento en el DOM

//sintaxys
// Append Something example

const app = document.querySelector("#app");
const parragrah = document.createElement("p"); //node or text plain
parragrah.textContent = "append()";
app.append(parragrah);

//Ejmplo 2
const app_2 = document.querySelector("#app2");
const langs = ["JavaScript", "TypeScript", "Css"];

const nodes = langs.map((lang) => {
	const li = document.createElement("li");
	li.textContent = lang;
	return li;
});

app_2.append(...nodes);

//otros metodos que pueden crear node(elementos del DOM)

// 1-Los nodos se crean con document.createElement () en JavaScript 1
// 2-El texto sin formato es, bueno, texto. Es texto sin formato en el sentido de que no tiene etiquetas HTML ni formato.
// 3-HTML también es texto pero, a diferencia del texto sin formato, de hecho se analiza como marcado(markup) cuando se agrega al DOM

//Si desea adjuntar detectores de eventos de inmediato, querrá trabajar con nodos porque
//llamamos addEventListener en los nodos, no en HTML.

//Ejemplo 3
/*
Supongamos que tenemos una aplicación de chat y queremos agregar un usuario, Dale, a una lista de amigos cuando inician sesión.
adjuntar Necesitamos crear un objeto de nodo que se traduzca a Dale.

append
Necesitamos crear un objeto de nodo que se traduzca en  <li><a>Dale</a></li>.
Esto resalta la versatilidad de append().
*/
const new_buddies = document.createElement("li");
const link_buddies = document.createElement("a");
const list = document.querySelector("#buddies");

const text = "Dale";
link_buddies.textContent = text; //tambien puedes abrir texto plano con append
new_buddies.append(link_buddies);

list.append(new_buddies);

/*** appendChild
appendChild es otro método de JavaScript que tenemos para agregar cosas a elementos del DOM. 
Es un poco limitado porque solo funciona con objetos de nodo, por lo que necesitaremos ayuda de 
textContent (o innerText) para nuestras necesidades de texto sin formato.*/

//Ejemplo 4
const new_buddiestwo = document.createElement("li");
const link_buddiestwo = document.createElement("a");
const listTwo = document.querySelector("#buddiesgroup");

const plain_text = "new user";
link_buddiestwo.textContent = plain_text; //también puedes abrir texto plano con append
new_buddiestwo.append(link_buddiestwo);

listTwo.appendChild(new_buddiestwo);

//Ejemplo 5
/* 
Antes de continuar, consideremos un ejemplo similar, pero con un markup más pesado.
recordemos que con .classList podemos añadir o remover una clase de la siguiente forma:

$update.classList.remove("hide");
$save.classList.add("hide");

lo que vamos a crear ahora con js:

<li class="item_user" data-tooltip="Click for Dale">
  <a id="user_123" class="def" data-user="dale">
    <img src="images/dale.jpg" alt="Profile Picture"/>
    <span>Dale</span>
  </a>
</li>
*/

const buddy_name = "Mr Elliot"; //var text

//crear li más atributos
const new_buddy = document.createElement("li");
new_buddy.className = "item_user";
new_buddy.setAttribute("data-tooltip", `Click for ${buddy_name}`);

//crear link más atributos
const link = document.createElement("a");
link.id = "user_123"; //setiando un atributo id
link.className = "def";
link.setAttribute("data-user", "date");

//crear img más atributos
const profile_img = document.createElement("img");
profile_img.src = "./images/mr-elliot.jpeg";
profile_img.alt = "Profile Picture";

//crear span node

const span = document.createElement("span");
span.textContent = buddy_name;

new_buddy.appendChild(link); //node
link.appendChild(profile_img); //node
link.appendChild(span); //node

const list_buddy = document.querySelector("#buddiesgroup");
list_buddy.appendChild(new_buddy);
