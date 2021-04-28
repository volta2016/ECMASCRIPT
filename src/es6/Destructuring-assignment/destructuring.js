// la asignación por destructuración nos permite extraer datos de array u objeto
// usando la sintaxis de [] y {} para asignarlo a variables


let array = [10, 6, 8];
const [diez, seis, ocho] = array;
console.log(diez, seis, ocho);//10 6 8
let suma = diez + seis + ocho;
let numberDoce = diez + 2;
console.log(suma);
// puede ser cualquier tipo de dato que lea un objeto
let object = {
    a : 'diez',
    b : 'veinte',
    c: 12
}
const {a,b, c } = object;

console.log(a, b, c);



//:::ASIGNACION SERPARADA
// se le puede aignar a una variable el valor mediante la desestructuración
// separada de la declaración
// primero declaro mi var
let a, b, c;
[a, b , c] = [1, 2, 3];
console.log(a, b, c);

// otro ejemplo

let x, y, z;
({x, y, z} = {x: 98, y: 99, z: 100});
console.log(x, y, z);



// :::VALORES POR DEFAULT
//Tambien le puedes asginar un valor predeterminado a cada var

let [fruta = '🍎', verdura = '🥦'] = ['🍐'];
console.log(fruta, verdura);

let { animal = '😸', robot = '🤖'} = {animal: '🐬'};
console.log(animal, robot);


//:: valores de retorno 
// con la destructuración podemos retornar múltiples
// valores y también tomarlos 

function comida() {
    return ['🌮', '🌭', '🍔']
}

const [taco, completo, hamburguesa] = comida();
console.log(taco, completo, hamburguesa);

function deporte() {
    return ['futbol playa', 'beisbol']
}
const [deporteOne, deporteTwo] = deporte();
console.log(`${deporteOne} & ${deporteTwo}`);

function monedas() {
    return {USD: '💵', EUR: '💶', JPY: '💴'}
}
const {USD, EUR, JPY} = monedas();
console.log(USD, EUR, JPY);


// ::OPERADOR REST
//podemos asignar la parte restante en una var
const [iphone, macbook, ...otros] = ['📱', '💻', '💿', '💡', '🖨', '📦'];
console.log(iphone, macbook);
console.log(otros)//devuele el array completo con todo los elementos la parte restante a una var.

const [snowboard, patinaje, ...otros] = ['snow', 'patinaje artistico', 'bmx', 'downhill']
console.log(snowboard, patinaje);
console.log(otros);

//::::Desestructuración

let person = {
    name: 'Uzumaki',
    age: 22,
    country: 'Konoha'
}

console.log(person.name, person.age, person.country);
// ahora vamos desestructurar los objetos 
//vamos asignar esos elementos que sabemos que tenemos dentro de la persona
//o de este objeto que seria name age y country.
//y de donde los voy a requerir obviamnte de nuestro objeto person.
let {name, age, } = person;//ahora ya puedo llamarlos en la consola
//aca estoy destructurando name, age que son los valores que necesito Es6
console.log(name, age);

//Operador de Propogacion o Operator rest
// os permite expandir de cierta situacion varios elementos 

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

// aqui yo podria esctructurar esto team
let education = ['David', ...team1, ...team2];//Es6

console.log(education);

//::scope var::
{
    var globalVar = 'Global Var';
}
// ====>>> Es6
{
    let globalLet = 'Global Let';
    console.log(globalLet);  //aca si es accesible
}

console.log(globalVar);


const a = 'b';
a = 'a'; //no se puede asiganr un valor a una constante, genera error
console.log(a);