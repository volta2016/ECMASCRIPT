


// analizar 
function multi(a, b, c) {
  return a * b * c;
}

const numbers = [5,2,7];

// spread oparator aplicamos su uso con los 
multi(...numbers);

//:::otro uso que le podemos dar es el poder clonar arrays:::
const numberGroup = [3, 4, 5];

const numberGruop2 = [...numberGroup, 6, 7, 8];
console.log(numberGruop2);

numberGruop2.push(9);

console.log(numberGroup);//el primer array no se va ver afectado por los cambios que le damos a 2do array
console.log(numberGruop2);



// podemos agregar elementos de array existente al principio o al final del array
let arrayBase = [1, 2 ,3];
let newGroup = ['a', 'b', 'c', ...arrayBase];
console.log(newGroup);

// podemos concatenar 2 array diferentes y crear uno nuevo

let arrayOne = [3, 6 ,9];
let arrayTwo = [2, 4, 6];
let arrayThree = [...arrayOne, ...arrayTwo]

console.log(arrayThree);

// gracias a es9 ahora podemos clonar objetos literales
let person = {name: 'Mike', edad: '20'}
let person2 = {...person, profesion: 'Medico'}

console.log(person);
console.log(person2);
person2.specialty = 'medicine'//agrega porpiedades a uno existente

// al igual que los array el primer objeto no se vera afectado por los cambios que sufra el segundo
// tambien podemos crear uno nuevo a partir de 2 diferentes 
let groupTwoPerson = {...person, ...person2};
console.log(groupTwoPerson); 

// ::resumen:: 
// - spread oprator desempaqueta o expande, lo vas econtrar
// - llamadas a funciones se encuentra  en el valor de una declaracion del lado derecho

// ::English
// Example with object 

const user = {
  name: "Kyo",
  age: 28,
  isEnglishSpeaker: true
};

const firstUser = {
  name: user.name,
  age: user.age,
  isEnglishSpeaker: user.isEnglishSpeaker
};

// Copy all of user's properties into secondUser 
const secondUser = {
  ...user  
};

const user = {
  name: "Jin",
  lastname: "Katana",
  age: 19
}

const moreUserIfo = {
  region: "Shibuya",
  country: "Japón",
}

const tool = {
  ...user,
  ...moreUserIfo,
  computer: "Toshiba",
  system: "Linux Centos"
}

console.log(tool)