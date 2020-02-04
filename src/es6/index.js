function newFunction (name, age, country ) {
    var name = name || 'kyo';
    var edad = edad || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}
//old form

// es6 desde la asinacion de los parametros
function newFunction2 (name = 'kyo', age = '32', country = 'MX') {
  console.log(name, age, country)
}
newFunction2();
newFunction2('Ricardo', '23', 'CO');

//Concatenation - Template Literals

let hola = 'hello';
let mundo = 'world!';
let epicPhrase = hola +  ' ' +  mundo; //old form

//es6
let epicPhrase2 = `${hola} ${mundo}`;
console.log(epicPhrase2);

//salto de linea
//old form
let lorem = "esta es una nueva frase dentro de js \n"
+ "otra frase nueva con slato de linea dentro de js"

//es6
let lorem2 = `esta es una nueva frase epica dentro de js
ahora esta es otra nueva frase2 epica
`;

console.log(lorem);
console.log(lorem2);

//Desestructuración de obj
let person = {
    'name' : 'Kyo',
    'age' : 32,
    'country' : 'MX'
}
console.log(person.name, person.age, person.country);
//old form

//es6
let {name, age} =  person;
console.log(name, age);

//Spread Operator(operador de propagacion =  unir elementos de forma más amigable)
let team1 = ['Oscar', 'Kyo', 'Román']
let team2 = ['Valeria', 'Yesica', 'Camila']

//es6
let educution = ['David', ..team1, ...team2]

console.log(educution);

//alcanse del scope global

{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}
console.log(globalVar);

//const no se modifica
const a = 'b';
a = 'a'// no se puede asignar un nuevo valor a unas const (esto no lo va a permitir)

//Arrow Functions, Promesas y Parámetros en objetos

let name = 'oscar';
let age = 32;
//es5
obj = {name: name, age: age};

//es6
obj2 = {name, age};
console.log(obj2);

 

//opciones de ser amigable
//arrow function con varios param
const listOfName3 = (name, age, country) => {
    //...blque de code
}

//arrow function con un param
const listOfName4 = name => {
    //...bloque de code
}
const square = num => nume * num;//esta es una funcion la cual recibe un valor lo que voy hacer
//es multiplicar ese numero por si mismo y final esto me lo return, y ano tengo que generar un return
//ya no tengo que tener un bloque de llaves.

//promesas(vamos a trabajar en asincronismo js no es un lenguaje sincronico que puede
//que puede ejecutar varias tareas al mismo tiempo nostros para manejar el asincronismo
//es que 2 eventos no van a suceder al mismo tiempo si no en una serie de situaciones ej:llamar 
//a una API han incorporado las promesas)

 //promise
 const helloPromise = () => {
     return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey! todo bien');
        } else {
            reject('Ups! algo salio mal');
        } 
     });  
 }
 helloPromise() 
    .then(response => console.log(response))//nos permite obtener esa respuesta
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

//Clases, Módulos y Generadores

class calculator {
    constructor() {
        this.valueA  = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//para traerme el modulo
import { hello } from '/.module';

hello();


//generators 

function* helloWorld() {
    if (true) {
        yield 'hello!, ';
    }
    if (true) {
        yield 'world';
    }
};

const generatorHello = helloWorld(); 
console.log(generatorHello.next().value);
console.log(generatorHello.next().value); 
console.log(generatorHello.next().value); 

//fibonacci example 01
function* fibonacci(){
  var fn1 = 1;
  var fn2 = 1;
  while (true){  
    var actual = fn2;
    fn2 = fn1;
    fn1 = fn1 + actual;
    var reset = yield actual;
    if (reset){
        fn1 = 1;
        fn2 = 1;
    }
  }
}

var secuencia = fibonacci();
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 2
console.log(secuencia.next().value);     // 3
console.log(secuencia.next().value);     // 5
console.log(secuencia.next().value);     // 8
console.log(secuencia.next().value);     // 13
console.log(secuencia.next(true).value); // 1
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 2
console.log(secuencia.next().value);     // 3