// Object.entries 

const data = {
    frotend: 'Oscar',
    backend: 'Isabel',
    designer: 'Ana',
}

//como voy transformar este objeto a una matriz 
const entries = Object.entries(data);//me lo trasnforma a un array 
console.log(entries);
console.log(entries.length);//puedo ver su recorrido

//object values el cual me devuelve los valores de un objeto a un arrelglo

const data = {
    frotend: 'Oscar',
    backend: 'Isabel',
    designer: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

//devolvemos un array  un arreglo con los valores. ignora el key.

//string pad
const string = 'hello';//
//como podemos antenponer una cadena vacía o elementos a este string
console.log(string.padStart(8, 'hi '));//primero el valor de caracteres, luego los caracteres 
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, ' ----'));

//tranding ,
const obj = {
    name: 'Kyo',
}


// Async Await
//aplicado con if ternario cae en primer resultado true podemos modificar el valor 
//=> async await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(( ) => resolve('Hello World!'),  3000)
            : reject(new Error('Test error'))
    }) 
};

const helloAsync = async () => {
    const hello = await helloWorld();//de esta forma va hacer el llamado va esperar que esto
    //suceda y luego esto lo vamos a imprimir en consola
    console.log(hello);
}

helloAsync();

// asi se ejecuta correctamente una promesa 

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error)
    }

};

anotherFunction();
