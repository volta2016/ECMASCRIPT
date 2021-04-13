/* 
::MAP FILTER Y REDUCE debe ser funciones puras
> Las funciones puras retornan siempre los mismos resultados ante los mismos parámetros.
> Las funciones puras no producen efectos secundarios

*/


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
// let nuevo_array = arr.map(function callback(currentValue, index, array) {
//     // Elemento devuelto de nuevo_array
// }[, thisArg])

//el param array - nos sirve si la función transformadora se encuentra en otro archivo o modulo 
// y necesitamos acceder al array original solo para leerlo

//el primer método va ser map me va generar un nuevo array, acá como parámetro le coloco
//el articulo que quiero mapear, articulo va ser el parámetro que va iterar en cada objeto.
//con esto le estoy pidiendo que me regrese de todos los artículos el nombre, el nombre de los
//artículos
//mapea todo el contenido del array y nos trae justo lo que nosotros estamos buscando que es el nombre
//de los artículos


let nombreArticulo = articulos.map((articulo) => {
    return articulo.nombre
});

console.log(nombreArticulo);


// retorno temprano (early return)
// nos sacamos de encima el caso que no nos interesa retornando de la función lo ante posible
// a muchos nos gusta escribir los retornos tempranos en una sola linea
const productos = [
    {id: 'vdasdasd', nombre: 'Camiseta', precio: 500},
    {id: 'voiiopip', nombre: 'Zpatilla', precio: 2000},
    {id: 'vdasasdi', nombre: 'Pantalon', precio: 1500},
]

// para arreglar ambos errores vamos a retornar un nuevo objeto donde vamos 
// a copiar las propiedades del objeto original ...producto pero vamos pisarle el precio
// para que tenga el descuento correspondiente

// así es como deberíamos usar map 
const productosConDescuento = productos.map(function(producto) {
    if(producto.precio < 100) return producto;

    return {
        ...producto,
        precio: producto.precio * 0.9 
    }//objeto nuevo compiamos las prop del original pero pisando una prop
})
console.log(productosConDescuento);

// error
const productosConDescuento = productos.map(function(producto) {
    if(producto.precio < 100) return producto;

    producto.precio = producto.precio * 0.9
    // en esta linea ya sabemos que al producto le tenemos que aplicar el descuento
    //el error esta en que nos olvidamos retornar valor de function trasnformadora
})


//:: También hay un uso muy común que es extraer los datos de podríamos necesitar un array solo con los id
//de los productos 
const productos = [
    {id: 'vdasdasd', nombre: 'Camiseta', precio: 500},
    {id: 'voiiopip', nombre: 'Zpatilla', precio: 2000},
    {id: 'vdasasdi', nombre: 'Pantalon', precio: 1500},
]

const idProductos = productos.map(function (producto) {
    return producto.id
})
console.log(idProductos)

// Pero hay una forma mucho mas corta de escribir esto retorno implicito con arrow function
const idProductos = productos.map(producto => producto.id);
// esta var de producto se puede llamar de cualquier manera pero sera mejor no escribirla
// desarmando el parámetro recibido y obteniendo solo la prop de id del parámetro que nos 
// llegue y retornando esa prop
// se lee así:
// > a partir del arr de productos > obtenemos un nuevo array idProductos > con el id de cada uno
//acá desestructuramos esa prop

const idProductos = productos.map(({ id }) => id);

// ::filter()
// .filter() > exclusion > filtra según una condición

// sintaxis
var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])
//el segundo método que me van ayudar a recorrer el contenido de mi array se llama filter
//y este filter me va ayudar a filtrar ciertas cosas.
//el filter va validar si algo es verdad o falso y lo va meter en nuevo array, este método
//no va modificar el método original que va ser artículos
//- aquí como parámetro a esta función le voy dar el articulo que vaya filtrando

// si el elemento no cumple con cierta condición entonces es descartado el resultado es un nuevo array
// que contiene los elementos del array original que cumple cierta condición, nosotros debemos programar
// esa condición una función que retorna true o false de acuerdo si nos queremos quedar un con un element
// o no.

const articulos = [
    {id: 'vdasdasd', nombre: 'Camiseta', precio: 500},
    {id: 'voiiopip', nombre: 'Zpatilla', precio: 2000},
    {id: 'vdasasdi', nombre: 'Pantalon', precio: 1500},
]


let articulosFiltrados  = articulos.filter((articulo) => {
    return articulo.precio <= 500
}) 
console.log(articulosFiltrados);

// Esta función que vamos a programar recibe el nombre de ::predicado:: una función que afirma o niega
// si un elemento cumple cierta condición.

// vamos a filtrar los productos que cuesten menos de mil
const productos = [
    {id: 'vdasdasd', nombre: 'Camiseta', precio: 500},
    {id: 'voiiopip', nombre: 'Zpatilla', precio: 2000},
    {id: 'vdasasdi', nombre: 'Pantalon', precio: 1500},
]

// const filterProducts = productos.filter(product => product.precio <= 1000)
// console.log(filterProducts)
// HOF VAMOS APLICAR UNA función de orden superior. Así nuestro code es super fácil 
// de leer y de entender. Ahora filtrar los productos caros es super fácil ahora 
// creamos otro predicado
const esBarato = product => product.precio < 1000;
const esCaro = product => !esBarato(productos);

const productosBaratos = productos.filter(esBarato);//usamos esBarato como predicado
const productosCaros = productos.filter(esCaro);
console.log(productosBaratos, productosCaros);

// filter se puede usar para sacar los elementos repetidos de un array aprovechando el parámetro
// que recibe el predicado

const numbersArr = [ 1, 2, 3, 4, 3, 1, 6, 7 ];
// podemos sacar los repetidos usando filter un predicado que recibe todo los param
//indexOf nos va ayudar si un elemento determinado existe y en que posición nos retornara
//el primer índice en que se cuentra
const numerosUnicos = numbersArr.filter((number, index, array) => {
    return index === numbersArr.indexOf(number)
    
})

console.log(numerosUnicos);//3 1 no van a pasar al nuevo array

// indexOf() Sintaxis

// cadena.indexOf(valorBusqueda[, indiceDesde])

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


let suma = articulos.reduce((accumulator, articulo) =>  accumulator +  articulo.costo , 0);
console.log(suma);


let numeros = [1, 2, 3, 4, 5];
let total = numeros.reduce((acc, el) => acc + el, 0);

console.log(total);

// ::Pensemos a reduce como una prensa esta prensa necesita de un array un valor inicial que le 
// tenemos que indicar nosotros y con cada vuelta de la palanca opera con el valor que va acumulando con
// cada elemento del array tras operar con todos los elementos del array obtenemos un único valor como resultado
// en este caso 70 un ejemplo x la suma de todos los números del array, reduce se podría llamar acumular
// pero se llama reduce estamos reduciendo el array original a un unico valor y lo que vamos a tener que escribir 
// nosotros es la función reductora, la función encargada de ir actualizando el valor del acumulador con cada
// elemento del array

const numeros = [4, 40, 20, 50];
let total = 0;
 for (const numero of numeros) {
    total += numero
}
console.log(total);


/*el primer parametro de reduce es la función reductora la que va ir actualizando el acumulador
y el segundo parametro es el valor unicial del acumulador
La función reductora recibe como primer parámetro > el acumulador > obviamente para el primer element
el acumulador va llegar con el valor inicial.
> Luego viene el elemento actual = numero > también podemos acceder al la posición el (index) y el (array) entero
*/
// sintax
// let total = números.reduce((accumulador, número, index, números) => {

// }, 0)

// pero en este caso no lo vamos a necesitar dentro de la función reductora tenemos que retornar
// el numero del acumulador actualizado, en este caso retornando la suma del valor que nos llego
// y el numero actual, estamos retornando que nuevo valor va tener el acumulador, después de girar la palanca
// podemos sacar la sentencia de return y las llaves
const numeros = [4, 40, 20, 50];

// let total = numeros.reduce((acumulador, numero) => {
//     return acumulador + numero
// }, 0)


let total = numeros.reduce((acumulador, numero) =>  acumulador + numero,  0);
console.log(total)

// queda más comodo de esta manera así nos queda mas separado lo que hace cada parte del programa

const acomular = (acumulador, numero) =>  acumualador + numero;
total = numeros.reduce(acomular, 0)

// valor inicial del acumulador > 0:
// En verdad es un parámetro opcional si no lo ponemos reduce va tomar el primer elemento del array
// como valor inicial y va comenzar acumular desde el segundo elemento y va comenzar a acumular desde
// el segundo elemento > 40, 20, 50
// si estuviera vacío e intentamos ejecutar este programa veríamos un error de tipo por la consola
// const numeros = []; ya que estamos invocando a reduce sin un valor inicial que pueda usar
// por eso si vas hacer esto asgurate ante que estas sentencias se ejecute solo si el array tiene elementos
// con reduce podemos obtener un nuevo objeto u otro array

let total = numeros.length > 0 ? numeros.reduce(acomular, 0) : 0;//se jecuta solo si el array tiene elementos

/* ::
La idea es obtener un nuevo array con los dobles de cada numero pero usando reduce
const dobles = números.reduce(); el resultado de llamar al método reduce sobre el array original
> el primero param va ser una función acumuladora
> Cuál crees que va ser el valor unicial? como queremos obtener un nuevo array como resultado.
nuestro valor inicial va ser justamente eso un nuevo array vacío.
> de esta manera nuestra función acumuladora va recibir un array como el acumulador y después
cada elemento del array original.
> dentro de la función agregamos el doble de el elemento dentro del array
> return el nuevo elemento del actualizado del acumulador para que le llegue al siguiente elemento
> hay que tener cuidado el retorno de la función reductora este es un error muy común
return acumulador.push(numero * 2); push devuelve la cantidad de elemento con las que queda el array,
después de agregar el el elemento en cuestión y recuerda que que el valor que retornamos de esta función
le va llegar como el acumulador para el proximo elemento y no queremos que le llegue un numero
si no un array return acumulador
> por eso ten cuidado con el valor de retorno de la función reductora, tenemos que asegurarnos de que tenga sentido
para el proximo calculo con el proximo elemento > con push estaríamos mutando el valor del acumulador

:: en vez de usar push acumulador.push(numero * 2); que modifica el acumulador podríamos retornar una copia del array
agregando al final el nuevo valor calculado
> como lo único que estamos haciendo en la función reductora es retornar un nuevo valor la dejamos en 1 linea

map filter y reduce lo podemos encadenar para obtener el valor que necesitamos, retornar el valor adecuado
dentro de cafa función
*/
const numerosGroup = [71, 41, 19, 77, 3, 65];

// const acumuladorDobles = (acumulador, numero) => {
//     acomulador.push(numero * 2);
//     return acumulador
// }//push muta el arr original

// const acumuladorDobles = (acumulador, numero) => {
//     return [...acumulador, numero * 2];
// }

const acumuladorDobles = (acumulador, numero) => [...acumulador, numero * 2];//lo mismo que ante pero sin mutaciones



const dobles = numerosGroup.reduce(acumuladorDobles, []);//[ 142, 82, 38, 154, 6, 130 ]



