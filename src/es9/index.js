/**
 * Spread Operator
 */

const obj = {
    name : 'oscar',
    age: 32,
    country: 'MX'
};

let { name, ...addInfo } = obj;//puedo pasar country y entraer solo los otros datos
console.log(`name: ${name}`);
console.log(`aditional info:`, addInfo);
/**
 * Porpagation Properties
 */

const obj = {
    name: 'Kyo',
    age: 29 
}

const obj1 = {
    ...obj,//metodo de propagacion lo que va hacer es unir el anterior obj con este,
    country: 'MX'
}


console.log(obj1);

/**
 * Promise Finally
 */
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => {
          resolve('Hello World!');
        }, 3000)
      : reject(new Error('Test Error'));
  });
};

 helloWorld()
  .then(result => console.log('result -> ', result))
  .catch(error => console.log('err -> ', error))
  .finally(() => console.log('finalizó'));


//de esta forma me permite que se ejecuto las respuesta, no se ejecuta catch pero al final
//cuando todo ha sido ejecutado con finally muestra un mensaje

/**
 * Regex
 */

 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
 const match = regexData.exec('2018-04-20');
 const year = match[1]
 const month = match[2]
 const day = match[3]

 console.log(year, month, day);
//vemos cada elemento de una forma separada y esta es un caracteristica que va permitir trabajar sobre
//reject hacia un grupo

//es10

//vamos a usar array.flat el cual nos va permitir devolver una matriz(array) con cualquier
//sumatriz aplanada
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

// vamos a trabajar sobre otro elemento que es flat map el cual me va permitir mapear cada 
//elemento despúes pasar una funcion y aplanarlo según el resultado

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value*2]));// va a mapear cada uno de los elementos.
//y lo que vamos a retornar va hacer nuetro valor y el valor * 2

//trimStart

let hello = '      Hello World';
console.log(hello);
console.log(hello.trimStart());

//trimEnd
let hello = 'Hello World      ';
console.log(hello);
console.log(hello.trimEnd());


try {

} catch (error) {
    console.log(error);
}
//puedo pasarle el parametro de error directo

try {

} catch {
  error;
}
//puedo pasarle el parametro de error directo, ya va estar disponible dentro del
//bloque de código del catch, esta forma nos va permitir no pasar ese valor.
//y poder trabajar mas fácil con lo que es try catch

//fromentries

let entries = [["name", "oscar"], ["age", 32]];

console.log(Object.fromEntries(entries));
//nos devuelve un objeto construido con la clave - valor con cada uno de los elementos que están
//dentro del array podemos transformar de arreglos a objetos o de objetos a arreglos
//según el caso que este trabajando con mi code.

let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);


//implementacion de versiones de ES
// Async await se agrego en Emma script 8
// Multilinea , es de ecmascritp6

// trimStart() ES10