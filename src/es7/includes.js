// El método includes() determina si un arreglo incluye un elemento determinado, 
// regresa true o false según corresponda


Array.prototype.includes(searchElement[, fromIndex])


// **searchElement es el elemento a buscar.
// **fromIndex es un parámetro opcional que marca la posición en la matriz 
// a partir de la cual se comienza a buscar el elemento dado.


var myArr = [ 'la', 'donna', 'e', 'mobile', 'cual', 'piuma', 'al', 'vento' ];
 
console.info(myArr.includes( 'donna' )); // true
console.info(myArr.includes( 'manzana' )); // false

// Nótese que este método devuelve un Boolean, algo que lo hace 
// diferente al tradicional indexOf() que hemos venido utilizando desde los noventa:

console.info(myArr.indexOf( 'donna' )); // 1
console.info(myArr.indexOf( 'pensiero')); // -1


// Old/ugly fashion:
if ( myArr.indexOf( '' ) !== -1 ) {
  /* OK, value exists! */
}

// New/nice ES7
if ( myArr.includes( '' ) ) {
  /* OK, value exists! */
}

// Ejemplos con índice
// Si necesitamos hacer uso del segundo argumento, los ejemplos quedarían como sigue:

console.info( myArr.includes( 'cual', 5 ) ); // false
console.info( myArr.includes( 'donna', 1 ) ); // true
console.info( myArr.includes( 'vento', -1 ) ); // true

// Como curiosidad, podemos ver en el último ejemplo que 
// es posible utilizar un índice negativo para que el conteo comience desde la derecha.

// Valores especiales y expresiones
// Al igual que con valores simples, podemos realizar comprobaciones sobre valores especiales y expresiones:

// Helper function
var str = () => 'donna';
 
var myArr = [ 10, 100, 200, 'donna', NaN, Infinity ];
 
console.info( myArr.includes( NaN ) ); // true
console.info( myArr.includes( Infinity ) ); // true
console.info( myArr.includes( str() ) ); // true
console.info( myArr.includes( 'don' ) ); // false

// La última comprobación ejemplifica cómo includes() requiere del elemento 
// completo (en este caso ‘donna’) para reportar coincidencia.



// Actuando sobre cadenas
// Además de sobre el objeto Array, includes() también se ha añadido como 
// un método para el objeto String, lo que nos permite realizar las comprobaciones 
// sobre cadenas de texto. En este caso, es posible buscar tanto palabras y 
// oraciones como secuencias de caracteres:
var str = `En un lugar de la Mancha, de cuyo nombre no quiero acordarme, 
no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.`;
 
console.info( str.includes( 'lugar' ) ); // true
console.info( str.includes( 'de cuyo' ) ); // true
console.info( str.includes( 'ero aco' ) ); // true -> quiERO ACOrdarme
console.info( str.includes( 'Mancha', 18 ) ); // true
console.info( str.includes( 'Mancha', 19 ) ); // false


// Un tema importante aquí es advertir como el parámetro fromIndex se aplica sobre cada letra, 
// no cada palabra. De ahí que ‘Mancha’ sí esté entre los 18 + 1 primeros caracteres, pero no 
// sobre los 19 + 1. El ‘+ 1’ en cada término es porque el conteo empieza (como en Array) también en 0.

// Arrays tipados
// El nuevo método también puede aplicarse sobre arrays tipados:

var typedArr = Uint8Array.of( 3, 14, 15 );
 
console.info( typedArr.includes( 15 ) ); // true


/*Rendimiento
Es hora de comprobar cómo rinde este método frente al tradicional indexOf().
Para medir los tiempos, utilizaremos la propia consola del navegador y su método time().
Como fuentes de datos, utilizaremos 3 arrays de diferente longitud (100, 5000 y 20000), 
lo cual nos permite ver cómo escalan los tiempos en función del número de elementos sobre el que deben realizar la búsqueda.
El código preparatorio sería el siguiente:*/

var prefix = 'item-';
 
var arr100 = Array.apply( null, { length: 100 } ).map( ( x, y ) => prefix + y ),
    arr5000 = Array.apply( null, { length: 5000 } ).map( ( x, y ) => prefix + y ),
    arr20000 = Array.apply( null, { length: 20000 } ).map( ( x, y ) => prefix + y );
 
var key = ( arr ) => prefix + arr.length / 2;
 
// Small size
console.time( 'searchingItem' );
console.info( arr100.length, arr100.includes( key( arr100 ) ) );
console.timeEnd( 'searchingItem' );
 
console.time( 'searchingItem' );
console.info( arr100.indexOf( key( arr100 ) ) !== -1 );
console.timeEnd( 'searchingItem' );
 
// Medium size
console.time( 'searchingItem' );
console.info( arr5000.includes( key( arr5000 ) ) );
console.timeEnd( 'searchingItem' );
 
console.time( 'searchingItem' );
console.info( arr5000.indexOf( key( arr5000 ) ) !== -1 );
console.timeEnd( 'searchingItem' );
 
// Large size
console.time( 'searchingItem' );
console.info( arr20000.includes( key( arr20000 )) );
console.timeEnd( 'searchingItem' );
 
console.time( 'searchingItem' );
console.info( arr20000.indexOf( key( arr20000 ) ) !== -1 );
console.timeEnd( 'searchingItem' );
// Comprobamos cada array con los dos métodos que estamos comparando (includes e indexOf). 
// El código resulta algo repetitivo, pero a efectos didácticos resulta muy claro.

// Los arrays los creamos de forma programática, obteniendo arreglos con esta pinta:

[ 'item-0', 'item-1', 'item-2', ... ]
// La función ‘key‘ compone el elemento que vamos a buscar en nuestro array. Para que los resultados sean más precisos, esta snippet escoge el valor central de cada matriz, lo que obliga al intérprete a recorrer un número proporcional de elementos en cada test.

// Con todo preparado, lanzamos nuestro script y obtenemos los siguientes resultados:

/*100 arreglos	5000 arreglos	20000 arreglos
includes()	1.52ms	1.24ms	1.29ms
indexOf()	1.38ms	1.22ms	1.21ms


NOTA: Los resultados obtenidos más arriba son los tiempos medios tras 100 ejecuciones.

A la vista de los datos, el número de elementos inicial no penaliza, resultando incluso más rápido cuanto mayor es el array.
Tampoco se aprecia una diferencia de rendimiento entre los métodos indexOf() e includes() algo, por otro lado, habitual en 
funcionalidades recientemente incorporadas en los distintos navegadores.

Soporte
Como con todas las funcionalidades emergentes de Javascript, hay que echar un vistazo al 
soporte de este nuevo método a día de hoy entre los diferentes navegadores:

*/