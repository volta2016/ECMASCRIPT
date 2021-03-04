// Plantillas de cadenas de texto
// Los template string son una forma más fácil de crear:

// * Cadenas con variables dentro (interpolación).
// * Generar cadenas multilínea.
// * Ejecutar expresiones, funciones y etiquetados.



let greeting  = 'Hola soy un template string';
console.log(greeting);

const messageBtaman = `
No es quien seas en el interior,
tus actos son los que te definen...
Batman`;

console.log(messageBtaman);

//**variables en strings (interpolación)**
let name = 'Jiraiya';
let nameGreeting = `hola ${name} que como estas?`;

console.log(nameGreeting);

// ejecutar expresiones 

console.log(`hola ${name}, tienes ${10 + 18} años`)

let seasons = ['Primavera', 'Verano', 'Otoño', 'Invierno'];

ol = `
  <ol style="color: purple;">
    ${seasons.map(season => {
      return `<li>${season}</li>`
    }).join('')
    }
  </ol>
`

const results = window.body.innerHTML = ol;
console.log(ol);
console.log(results);

