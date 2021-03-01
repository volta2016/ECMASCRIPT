// **Destructuración**
// Nuevas formas de asignar valores a Arreglos y Objetos.  

// Destrcuturaciónn de arreglos


// sin desestructuracion 
// let numbers = [1,2,3];

// let one = numbers[0],
//     two = numbers[1],
//     three = numbers[2]

console.log(one, two, three);//Imprime  1 2 3



// con desestrcuturación
let numbers = [1,2,3];
let [ one, two, three ] = numbers;

console.log(numbers, one, two, three);//Imprime [1, 2, 3] 1 2 3

// Desestructuracion de objetos

// ejemplo 1
let perro = {
  name : 'kira',
  edad: 5
}

let { name, edad } = perro

console.log(name, edad);

// ejemplo 2

let person = {
  name: 'Kyo',
  edad: 20
}

let { name, edad } = person;

console.log(name edad);

// ejemplo 3

let data = {
  correo: 'contacto@dx.org',
  telefono: 56923489890
}

let {correo: email, telefono: cel } = data;

console.log(email, cel);


// ::English
/* The standard way to access properties from an object is using the dot notation. 
An even more convenient approach, however, is object destructuring. It allows us to extract 
properties as individual variables of the same name from a given object.

It looks somewhat like you're writing an object in reverse, which is what makes the process intuitive. 
It's much nicer to use than having to use the object name multiple times to access each time you want to grab a value from it.
*/

const user = {
  name: "Kyo",
  age: 28,
  isEnglishSpeaker: true,
  region: "Shibuya 渋谷区"
};
 
// Dot property access
// const name = user.name;
// const age = user.age;
 
// Object destructuring
const { age, name, isEnglishSpeaker: knowsEnglish, region} = user;
// Use ':' to rename a value as you destructure it

console.log(knowsEnglish, region); // true Shibuya 渋谷区 