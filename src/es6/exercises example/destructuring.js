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
