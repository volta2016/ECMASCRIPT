//::Question 2: Cat name

function Pet (name) {
  this.name = name;
  this.getName = () => this.name;
}

const cat = new Pet('Fluffy');

console.log(cat.getName());

const { getName } = cat;

console.log(getName());

/*si los desestructura es una invocación o no aquí ante igual tenemos el contexto de ejecución 
Cuando tu ejecutas cat.getName() va aquí  this.getName = () => this.name; ese es una arrow fuction por lo tanto or lo tanto este this.name no se esta ejecutando en este contexto de ejecución o sea este this no existe en la arrow function, es un this lexico es un scope lexico, el this que tenemos aquí no viene dado por la ejecución de este método.
Si no que siempre este this se va a referir al del scope superior, basicamente se refiere a este this que tenemos en la función constructora
:::los arrow function no bindean el valor de this por lo tanto este this no bindear el contexto de ejecución, si no que viene por el scope superior. Las arrow function no tienen this.
*/

//::si aplicamos un widow.name = ''

function Pet (name) {
  this.name = name;
  this.getName = function() {
    return this.name
  };
}

const cat = new Pet('Fluffy');

console.log(cat.getName());
console.log(window.name);
const { getName } = cat;

console.log(getName());

