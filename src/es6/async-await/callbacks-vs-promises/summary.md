Explicación Callbacks y Promesas en JavaScript:

Callback
Un callback es una función que se pasa a otra función como argumento, que luego se invoca ("se llama de vuelta") en un momento adecuado.

Tradicionales en el manejo de eventos en JavaScript, los callbacks también se usan en métodos de Array y operaciones asíncronas.

El problema conocido como Callback Hell surge cuando se anidan múltiples callbacks, haciendo el código difícil de leer.

Promesas
Introducidas en ES6, las promesas representan operaciones que aún no se han completado pero se espera que se completen en el futuro. Pueden estar en uno de tres estados: pendiente, resuelta o rechazada.

Las promesas tienen los métodos .then, .catch y .finally, que puedes utilizar para adjuntar callbacks que se ejecutarán cuando la promesa se resuelva o se rechace.

Las promesas, con sus métodos .then, .catch, y .finally, proporcionan una forma más estructurada y legible de manejar operaciones asíncronas, evitando el Callback Hell.

Algunos métodos como fetch directamente devuelven una promesa y puedes usar .then o .catch en ellas.

async/await
ES2017 introdujo async/await como una capa de abstracción sobre las promesas, simplificando aún más el manejo de operaciones asíncronas:

Los Callbacks son funciones pasadas como argumentos a otras funciones, usadas tradicionalmente para manejar eventos y operaciones asíncronas en JavaScript. Sin embargo, pueden llevar a un código anidado complejo conocido como "Callback Hell".

Las Promesas, introducidas en ES6, representan operaciones futuras y proporcionan una estructura más clara para manejar la asincronía, con métodos como .then, .catch, y .finally para gestionar resultados y errores.

Adicionalmente, ES2017 trajo async/await para simplificar aún más el manejo de operaciones asíncronas, construyendo sobre las promesas.
