var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'Tv', costo: 2500},
    { nombre: 'Libro', costo: 320},
    { nombre: 'celular', costo: 10000},
    { nombre: 'laptop', costo: 20000},
    { nombre: 'Teclado', costo: 500},
    { nombre: 'Skate', costo: 7000},
    { nombre: 'Audifonos', costo: 1700}
]

//el primer metodo que me van ayudar a recorrer el contenido de mi array se llama filter
//y este filter me va ayudar a filtrar ciertas cosas.
//el filter va validar si algo es verdad o falso y lo va meter en nuevo array, este motodo
//no va modificar el metodo original que va ser articulos
//- aqui como parametro a esta funcion le voy dar el articulo que vaya filtrando

// var articulosFiltrados  = articulos.filter((articulo) => {
//     return articulo.costo <= 500
// }) 
// console.log(articulosFiltrados);

//el segundo metodo va ser map me va generar un nuevo array, aca como parametro le coloco
//el articulo que quiero mapear, articulo va ser el parametro que va iterar en cada objeto.
//con esto le estoy pidiendo que me regrese de todos los articulos el nombre el nombre de los
//articulos
//mapea todo el contenido del array y nos trea justo lo que nosotros estamos buscando que es el nombre
//de los articulos
// var nombreArticulo = articulos.map((articulo)=> {
//     return articulo.nombre
// });

// console.log(nombreArticulo);


var suma = articulos.reduce((accomulator, articulo) =>  articulo.costo + accomulator, 0);
console.log(suma);


// let numeros = [1, 2, 3, 4, 5];
// let total = numeros.reduce((a, b) => a + b, 0);

// console.log(total);

