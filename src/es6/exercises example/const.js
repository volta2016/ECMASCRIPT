// **Constantes**
// Una constantes es un tipo INMUTABLE, NO puede cambiar una vez definida, 
// se usa la palabra const en lugar de var, al igual que let su scope es de bloque, 
// son tipos de sólo lectura y se le debe asignar un valor en el momento de su declaración. 
// Son referencias inmutables, pero sus valores no necesariamente.

const DIEZ = 10;
DIEZ = 5;
console.log(DIEZ)// Imprime Uncaught TypeError: Assignment to constant variable

// por lo general se ocupan para endpoint trabajando con api ya que no se modifica o 
// puedes pasarle nuevas varieble de forma dinamica a URL con template string
const URL = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20';

const PI;
PI = 3.141592653589793;//Imprime Missing initializer in const declaration

const obj = {};
obj.prop = 'x';
console.log(obj);//Imprime { prop: 'x' }
obj.prop = 'y';
console.log(obj); //Imprime { prop: 'y' }

const DOM = document;
console.log(DOM);
console.log(DOM.documentElement);
