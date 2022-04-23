// Qué son  map() and forEach() ?
/*map y forEach son métodos auxiliares en una matriz para recorrer una matriz fácilmente. Solíamos recorrer una matriz, como a continuación, sin ninguna función de ayuda.*/

let array = ["1", "2", "3"];
for (var i = 0; i < array.length; i += 1) {
  console.log(Number(array[i]));
}

/*El ciclo for ha estado con nosotros desde el comienzo de la era de JavaScript. Toma 3 expresiones: el valor inicial, la condición y la expresión final.

Esta es una forma clásica de hacer un bucle en una matriz. Desde ECMAScript 5 han aparecido nuevas funciones para hacernos más felices.


## map

map hace exactamente lo mismo que hace el bucle for, excepto que map crea una nueva matriz con el resultado de llamar a una función proporcionada en cada elemento de la matriz que llama.

Toma dos parámetros: una función de devolución de llamada que se invocará más tarde cuando se llame a map o forEach, y la variable de contexto llamada thisArg que utilizará una función de devolución de llamada cuando se invoque.
*/

const arr = ["1", "2", "3"];
// callback function takes 3 parameters
// the current value of an array as the first parameter
// the position of the current value in an array as the second parameter
// the original source array as the third parameter
const cb = (str, i, origin) => {
  console.log(`${i}: ${Number(str)} / ${origin}`);
};
arr.map(cb);
// 0: 1 / 1,2,3
// 1: 2 / 1,2,3
// 2: 3 / 1,2,3

//La función de devolución de llamada se puede utilizar como se muestra a continuación.

arr.map((str) => {
  console.log(Number(str));
}); // el valor actual de una matriz como primer parámetro

//El resultado del mapa no es igual a la matriz original.

//const arr = [1]; //oroginal array
const new_arr = arr.map((d) => d); //new array
arr === new_arr; // false

// También puede pasar el objeto al mapa como thisArg

const obj = { name: "Jane" };

[1].map(function () {
  // { name: 'Jane' }
  console.dir(this);
}, obj);

[1].map(() => {
  // window
  console.dir(this);
}, obj);

/*
El objeto obj se convirtió en thisArg para map. Pero la función de devolución de llamada de flecha no puede obtener obj como thisArg.

## forEach

forEach es otra función de bucle para una matriz, pero hay una diferencia entre map y forEach en su uso. Hay dos parámetros que map y forEach pueden tomar: una función de devolución de llamada y thisArg que usan como su this.

*/

const arr2 = ["1", "2", "3"];
// callback function takes 3 parameters
// the current value of an array as the first parameter
// the position of the current value in an array as the second parameter
// the original source array as the third parameter
const cb2 = (str, i, origin) => {
  console.log(`${i}: ${Number(str)} / ${origin}`);
};
arr2.forEach(cb2);
// 0: 1 / 1,2,3
// 1: 2 / 1,2,3
// 2: 3 / 1,2,3

//Entonces, ¿ qué es diferente ?

//map devuelve una nueva matriz de su matriz original. forEach, sin embargo, no //lo hace. Pero ambos aseguran la inmutabilidad del objeto original.

[1, 2, 3].map((d) => d + 1); // [2, 3, 4];
[1, 2, 3].forEach((d) => d + 1); // undefined

//Dado que la principal diferencia entre ellos es si hay o no un valor de retorno, querrá usar map para crear una nueva matriz y usar forEach solo para mapear sobre la matriz.

const people = [
  { name: "Josh", whatCanDo: "painting" },
  { name: "Lay", whatCanDo: "security" },
  { name: "Ralph", whatCanDo: "cleaning" },
];

function makeWorkers(people) {
  return people.map((person) => {
    const { name, whatCanDo } = person;
    return (
      <li key={name}>
        My name is {name}, I can do {whatCanDo}
      </li>
    );
  });
}

<ul>makeWorkers(people)</ul>;

/*En React, por ejemplo, el mapa se usa muy comúnmente para crear elementos porque el mapa crea y devuelve una nueva matriz después de manipular los datos de la matriz original.*/

const mySubjectId = ["154", "773", "245"];

function countSubjects(subjects) {
  let cnt = 0;

  subjects.forEach((subject) => {
    if (mySubjectId.includes(subject.id)) {
      cnt += 1;
    }
  });

  return cnt;
}

countSubjects([
  { id: "223", teacher: "Mark" },
  { id: "154", teacher: "Linda" },
]);

//devuelve 1 porque include verifica si hay realmente un elemento este devuelve -> true, entonces entra al cuerpo del condicional y suma uno la variable inicializada, luego retorna el valor

//Por otro lado, forEach es útil cuando desea hacer algo con los datos sin crear una nueva matriz. Por cierto, el ejemplo podría refactorizarse usando filter.

subjects.filter((subject) => mySubjectId.includes(subject.id)).length;

/*👀 Para resumir, se recomienda usar map cuando cree una nueva matriz que usará, y use forEach cuando no necesite crear una nueva matriz, sino que quiera hacer algo con los datos.


El código se ve muy similar pero los resultados son opuestos. Algunas pruebas dijeron que forEach es más rápido y algunas dijeron que el mapa es más rápido. Tal vez se esté diciendo a sí mismo que map/forEach es más rápido que el otro, y puede que tenga razón. No estoy seguro, sinceramente. Creo que la legibilidad es mucho más importante que la velocidad entre map y forEach cuando se trata del desarrollo web moderno. Pero una cosa es segura: ambos son más lentos que la función integrada de JavaScript, for loop. 

## Conclusión 

map y forEach son funciones útiles para recorrer un objeto iterable y pueden embellecer su código y brindarle más legibilidad. Pero una nota clave realmente importante a tener en cuenta es comprender qué hace cada uno y cuándo usarlo.

map sería bueno cuando desee crear una nueva matriz que no afecte la matriz original, y forEach sería mejor cuando solo desee mapear una matriz.
*/
