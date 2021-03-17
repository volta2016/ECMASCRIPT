// :::Rest Operator:::

// Los parámetros Rest son una forma de utilizar parámetros virtualmente infinitos, se definen agregando 
// ... adelante del nombre del parámetro rest, éste tiene que ser siempre el último parámetro de la función.


function sumar(a,b, ...c) {
  let resulatdo = a + b;
  c.forEach(element => {
    resulatdo += element
  })
  console.log(resulatdo)
}

sumar(1,2); //Imprime 3
sumar(1,2,3); //Imprime 6
sumar(1,2,3,4); //Imprime 10
sumar(1,2,3,4,5); //Imprime 15






function sum(...numbers) {
  let results = 0;
  for (let i = 0; i < numbers.length; i++) {
    results += numbers[i];
  }
  return results
}
// ...numeros esto es el rest oparator

console.log(sum(2, 5, 10, 30));

//no importa cuanto valores le pasemos 
// a la funcion esta va realizar siempre la suma de todos

// al disponer de un array[] en nuestra funcion podemos 
// hacer uso de metodo como map filter o reduce


function doble(...numbers) {
  return numbers.map(element => element * 2)
}

console.log(doble(2, 4 ,8));

// otra forma de usar el rest operator es mediante la desestrcuturación 
// la desestrcuturación nos permite nos permite extrear datos de {} y []
// para asignar variables




let a, b, c;

[a, b, c ] = [1, 2, 3]
console.log(a, b, c);

let number = [2, 3 ,4, 5, 6, 7];
[a , b, c, d, e] = number;
console.log(a, b, c);

// esto lo podemos resumir en una sola linea y obtendriamos el mismo resultado

// con array
// declaración - asignación
// gracias al operador rest podemos resumir la parte restante de array a una sola variable
let [a, b, c, ...resto ] = [1, 2, 3, 5, 6, 7]
console.log(resto)
console.log(a, b, c)


// con object
// declaración - asignación 
let {a, b, c, ...resto } = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
console.log(resto)
console.log(a, b, c)

rest compone
spread > expande en al array

// el res oprator siempre debe ir a final de la estructura que se esta contruyendo
// no puede ir al principio o al al medio, pues se le asigna el resto de objeto array o funcion


// Rest oparator resumen los vas encontrar:
// - Empaqueta un numero indefinido de valores en un array o objeto
// - Lo vas a econtrar en las declaraciones de las funciones
// - En la desestructuración array y object en el momento de la declaración en el lado izquierdo
// - retorna el resto de elemento en un array o objeto dependiendo el caso




// ::::¿Cuál es la diferencia entre rest y sread?::::
// Rest Parameter [first, ... rest] rest oparator

// el rest operator es una colección de todo los elementos restantes
// :::De ahí el nombre resto, como en "el resto de los elementos":::


let myName = ['Kyo', 'Madara', 'Uchiha'];
[firstName, ...secondNames] = myName;

console.log(firstName);
console.log(secondNames);
/*Como se muestra en la línea 78 en el ejemplo anterior, esos tres puntos recolectaron 
el resto de los elementos de myName en una nueva submatriz, esto es algo llamado desestructuración 
que está rompiendo mi matriz u objeto en pedazos más pequeños.*/

// La desestructuración usando el parámetro rest nos ayudó a dividir nuestra matriz en parámetros principales 
// que se pueden llamar directamente como firstName y recopilar el resto en otra matriz como secondNames.

// ¿Dónde podemos volver a encontrar el parámetro de rest? Si va a llamar a una función y enviar varios argumentos, 
// los recibirá en el parámetro rest en la implementación de la función.

function myData(...args) {
  console.log(args);// ["Marina",24,"Front-End Developer"] sera una matriz
}

myData('Mary', 'Front-end developer');

// ... args que será una matriz que contiene todos los argumentos enviados desde la llamada de la función.

// ::::Spread Operator […spread, element]::::

// Es lo opuesto al parámetro rest, donde el parámetro rest recopila elementos en 
// una matriz, el operador de propagación descomprime o expande los elementos recopilados en elementos individuales.

let myName = ['Mary', 'Jones'];
let dataComplete = [...myName, 'front-end', 24];

console.log(dataComplete);

/*Sí, se concatenó entre 2 matrices y descomprimió myName en elementos individuales y, a 
diferencia del parámetro rest, el operador de propagación puede ser el primer elemento, pero el 
parámetro rest debe ser el último en recopilar los elementos restantes. 

Se puede utilizar para 
copiar una matriz en otra o para concatenar 2 matrices juntas.*/


//::Resumen de diferecnia entre rest y spread::
// * Rest Parameter is collecting all remaining elements into an array.
// * Spread Operator está descomprimiendo elementos recopilados, como matrices, en elementos individuales.

