let articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'Tv', costo: 2500},
    { nombre: 'Libro', costo: 320},
    { nombre: 'celular', costo: 10000},
    { nombre: 'laptop', costo: 20000},
    { nombre: 'Teclado', costo: 500},
    { nombre: 'Skate', costo: 7000},
    { nombre: 'Audifonos', costo: 1700}
]

// ::map()
// .map() > transform

// sintaxis
let nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
}[, thisArg])

//el primer metodo va ser map me va generar un nuevo array, acá como parametro le coloco
//el articulo que quiero mapear, articulo va ser el parametro que va iterar en cada objeto.
//con esto le estoy pidiendo que me regrese de todos los articulos el nombre el nombre de los
//articulos
//mapea todo el contenido del array y nos trea justo lo que nosotros estamos buscando que es el nombre
//de los articulos

let nombreArticulo = articulos.map((articulo) => {
    return articulo.nombre
});

console.log(nombreArticulo);

// ::filter()
// .filter() > exclusion

// sintaxis
var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])
//el segundo metodo que me van ayudar a recorrer el contenido de mi array se llama filter
//y este filter me va ayudar a filtrar ciertas cosas.
//el filter va validar si algo es verdad o falso y lo va meter en nuevo array, este motodo
//no va modificar el metodo original que va ser articulos
//- aqui como parametro a esta funcion le voy dar el articulo que vaya filtrando

let articulosFiltrados  = articulos.filter((articulo) => {
    return articulo.costo <= 500
}) 
console.log(articulosFiltrados);



//::reduce()
//.reduce > compose (compone)

/*reduce, por otro lado, toma todos los elementos en un array, y los reduce en un solo valor.

Al igual que el map y filter, reduce se define en Array.prototype y está disponible en cualquier matriz 
y pasa una devolución de llamada como su primer argumento. Pero también toma un segundo argumento 
opcional: el valor para comenzar a combinar todos los elementos en una array.

reduce pasa la devolución de llamada cuatro argumentos:
1. El valor actual
2. El valor anterior
3. El índice actual
4. La array de la que llamas a reduce

Observe que la devolución de llamada obtiene un valor anterior en cada iteración. 
En la primera iteración, no hay valor anterior. Esta es la razón por la que tiene la opción de 
pasar a reduce un valor inicial: Actúa como el "valor anterior" para la primera iteración, cuando 
de otro modo no sería uno.
Por último, tenga en cuenta que reduce "devuelve un solo valor", no una array que contiene un único elemento. 
Esto es más importante de lo que podría parecer, y volveré a él en los ejemplos.
reduce en la práctica
Dado que reduce es la función que la gente encuentra más extraterrestre al principio, comenzaremos 
caminando paso a paso a través de algo sencillo.
Digamos que queremos encontrar la suma de una lista de números. Usando un bucle, que asi:

Iteración	Anterior	Actual	Total
1	            0	        1	   1
2	            1	        2	   3
3	            3	        3	   6
4	            6	        4	   10
5	            10	        5	   15


Sorpresas
Las tres grandes sorpresas con reduce son:

Olvidar return
Olvidar un valor inicial
Esperar una matriz cuando reduce devuelve un valor único*/

let articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'Tv', costo: 2500},
    { nombre: 'Libro', costo: 320},
    { nombre: 'celular', costo: 10000},
    { nombre: 'laptop', costo: 20000},
    { nombre: 'Teclado', costo: 500},
    { nombre: 'Skate', costo: 7000},
    { nombre: 'Audifonos', costo: 1700}
]


let suma = articulos.reduce((accomulator, articulo) =>  accomulator +  articulo.costo , 0);
console.log(suma);


let numeros = [1, 2, 3, 4, 5];
let total = numeros.reduce((acc, el) => acc + el, 0);

console.log(total);

