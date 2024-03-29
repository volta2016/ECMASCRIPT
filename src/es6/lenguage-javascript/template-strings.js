// Plantillas de cadenas de texto
// Los template string son una forma más fácil de crear:

// * Cadenas con variables dentro (interpolación).
// * Generar cadenas multilínea.
// * Ejecutar expresiones, funciones y etiquetados.

let greeting = "Hola soy un template string";
console.log(greeting);

const messageBtaman = `
No es quien seas en el interior,
tus actos son los que te definen...
Batman`;

console.log(messageBtaman);

//**variables en strings (interpolación)**
let name = "Jiraiya";
let nameGreeting = `hola ${name} que como estas?`;

console.log(nameGreeting);

// ejecutar expresiones

console.log(`hola ${name}, tienes ${10 + 18} años`);

let seasons = ["Primavera", "Verano", "Otoño", "Invierno"];

ol = `
  <ol style="color: purple;">
    ${seasons
      .map((season) => {
        return `<li>${season}</li>`;
      })
      .join("")}
  </ol>
`;

const results = (window.body.innerHTML = ol);
console.log(ol);
console.log(results);

//otros ejemplos:

const firstName = "JavaScript";
const lastName = "Livecript";

const fullName = firstName + " " + lastName + " creado por Brendan Eich";

console.log(fullName, "frase");

let nameOne = "kyo";
let nacimiento = 1990;
let template = `hola ${20 + 20} soy ${nameOne} y tengo ${
  2022 - nacimiento
} años`;
console.log(template); // hola 20 -> string se evalua la expresión

function obserbador(cadenas, ...expresiones) {
  console.log(cadenas);
  console.log(expresiones);
  return cadenas;
}

let nameTwo = "Kari";
let birth = 1993;

let template2 = obserbador`Hello my name is ${nameTwo} my date of birth is ${birth}`;
