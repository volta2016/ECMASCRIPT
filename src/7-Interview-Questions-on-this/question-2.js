//::Question 2: Cat name

function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}

const cat = new Pet('Fluffy');

console.log(cat.getName());

const { getName } = cat;

console.log(getName());

/*si los desestructura es una invocación o no aquí ante igual tenemos el contexto de ejecución 
Cuando tu ejecutas cat.getName() va aquí  this.getName = () => this.name; ese es una arrow fuction por lo tanto este this.name 
no se esta ejecutando en este contexto de ejecución o sea este this no existe en la arrow function, es un this lexico es un scope lexico, el this 
que tenemos aquí no viene dado por la ejecución de este método.
Si no que siempre este this se va a referir al del scope superior, basicamente se refiere a este this que tenemos en la función constructora
:::los arrow function no bindean el valor de this por lo tanto este this no bindea el contexto de ejecución, si no que viene por el scope superior. Las arrow function no tienen this.
::Ojo la arrow function no recuerda ningún contexto de ejecución
*/

//::si aplicamos un widow.name = ''

function Pet(name) {
  this.name = name;
  this.getName = function() {
    return this.name
  };
}

const cat = new Pet('Fluffy');

console.log(cat.getName());//contexto de ejecución es la función de la instancia
console.log(window.name);
const { getName } = cat;

console.log(getName());// como esto ya no es una ejecución sobre el objeto este this > return this.name
// no va recuperar al de afuera, si no que va a bindear al contexto de ejecución de afuera que es window
//cuando haces la desestructuración no estas invocando el método desde el cat por lo tanto el this ahora es
//el window > cuando aplicas con arrow function el this lo esta buscando en la clousure

