/*El método bind() crea una nueva función, que cuando es llamada, 
asigna a su operador  this el valor entregado, con una secuencia 
de argumentos dados precediendo a cualquiera entregados cuando la 
función es llamada. 

El valor de this es ignorado cuando la función es llamada 
con el operador new.*/

this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, porque en este caso, "this" apunta al objeto global

// Crear una nueva función con 'this' asociado al objeto original 'module'
var boundGetX = getX.bind(module);
boundGetX(); // 81

/* El siguiente uso simple de bind() es definir una función 
con argumentos predeterminados que precederán a los argumentos 
finales de la función ligada. Estos argumentos iniciales 
(en caso de haberlos) se definen a continuación de lo que será 
la referencia de this y son entonces enviados como argumentos de 
la función objetivo, seguidos por los argumentos enviados a la 
función ligada cada vez que dicha función sea llamada. */

function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Crear funcion (sin referencia this) con argumento inicial predeterminado
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]

/*Ejemplo: Con setTimeout
De manera predeterminada, dentro de window.setTimeout(), la palabra reservada 
this será setteada al objeto window (o a global). Cuando se esté trabajando 
con métodos de clase que requieran que this se refiera a instancias de clase, 
usted puede explícitamente ligar this a la función callback para mantener la 
referencia de la instancia.*/

function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
};

// El operador instanceof verifica si un objeto en su cadena 
// de prototipos contiene la propiedad prototype de un constructor.

color1 = new String("verde")
color1 instanceof String // devuelve verdadero (true)
color2 = "coral"
color2 instanceof String // devuelve falso (color2 no es un objeto String)

// Funciones ligadas usadas como constructores

// Las funciones ligadas son automáticamente adecuadas para usarse 
// con el operador new para construir nuevas instancias creadas por la
// función objetivo. Cuando una función ligada es utilizada para construir 
// un valor, el parámetro enviado para reemplazar la referencia this es 
// ignorado. De cualquier forma, los argumentos iniciales sí son tomados en 
// consideración y antecederán a los parámetros que se envíen al constructor:

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + ',' + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'


var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0/*x*/);
// not supported in the polyfill below,
// works fine with native bind:
var YAxisPoint = Point.bind(null, 0/*x*/);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new Point(17, 42) instanceof YAxisPoint; // true

/*¿Cómo funciona this en Javascript?
En líneas generales, la forma en que la variable this 
queda enlazada dentro de una función depende de la forma
en que dicha función es invocada. De este modo, existe 
por un lado lo que se conoce como default binding, en el 
cual this queda enlazado al objeto global donde se está 
ejecutando Javascript (o undefined en el caso de que estemos en modo estricto)
y que es la forma en la que se enlaza thissi ninguna otra regla se cumple: */

function foo(){
  console.log(this); // 'this' es el objeto global
 }
 foo();

//  Por otra parte, también existe el implicit binding, en el cual thisqueda 
//  enlazado al objeto que invocó el método:


name: 'Gerardo',
foo: function() {
  console.log(this.name); // 'this' points to obj
 }
};
obj.foo(); // Gerardo

// De este modo, cuando la función foose ejecuta, thisqueda 
// enlazado a la variable object, de modo que lo que
// obtenemos en la consola es la propiedad namedel objeto.

// Sin embargo, esto no significa que thissiempre vaya a 
// apuntar a objdentro de la función foo. En el siguiente ejemplo:

var name = "meeeec";
var otherFoo = obj.foo;
otherFoo(); // meeeec


// El resultado obtenido es meeeec, es decir, la propiedad 
// namedel objeto global, en vez de la del objeto obj
// (o undefinedde estar ejecutando Javascript en modo estricto).


// Esto también sucede cuando trabajamos con los callback de 
// los event listeners o de cualquier otra función que los implemente. 
// Por ejemplo, cuando usamos la función setTimeout :

function setTimeout(callback, delay){
  //wait for 'delay' milliseconds
  callback();
}
setTimeout( obj.foo, 1000 );

Internamente Javascript está haciendo el siguiente paso:

callback = obj.foo;

// De modo que, al igual que en el ejemplo anterior, cuando se ejecuta 
// la función callback, la función foo ha perdido su contexto y por tanto 
// this queda enlazado al objeto global (o undefined ).
// La forma de solucionarlo es recurrir al método bind(explicit hard binding), 
// es decir, forzar a javascript a que la variable this tome como valor el argumento pasado.

var name = "meeeec";
var otherFoo = obj.foo.bind(obj);
otherFoo(); // Gerardo

// En este caso, la variable this sí hace referencia al objeto obj 
// por lo que se obtiene el valor de su propiedad name


class Foo {
  constructor(name){
    this.name = name
  }
  aMethod() {
    console.log(this.name);
  }
}
var foo = new Foo('Gerardo');
foo.aMethod(); // Gerardo

// Si ahora, asignamos el método foo a otra variable
// y lo ejecutamos, obtenemos el error:

var myEventListener = foo.aMethod; 
myEventListener(); // TypeError: this is undefined

// Nota: el body de las clases en Javascript siempre se ejecuta 
// en modo estricto, causa por la cual estamos obteniendo el error 
// y no accediendo al objeto global.
// Es por esta razón por la que invocamos el método bind 
// (habitualmente en el constructor de la propia función) 
// cuando queremos evitar este fallo:

class Foo {
  constructor(name){
    this.name = name; 
    this.aMethod = this.aMethod.bind(this);
  }
  aMethod(){
    console.log(this.name);
  }
}
var foo = new Foo('Gerardo');
foo.aMethod(); // Gerardo
var display = foo.aMethod;
display(); // Gerardo


// component class
class AwesomeComponent extends React.Component{
  constructor( props ){
    super( props );
    this.onClick = this.onClick.bind(this);
  }
onClick(event){
    // ...
  }
render(){
    return (
      <button type="button" 
      onClick={this.onClick}>
      Click
      </button>
    );
  }
}


queda mejor así y sin el constructor 
render(){
  return (
    <button type="button" 
    onClick={() => this.onClick.bind(this)}>
    Click
    </button>
  );
}
}

/*Metodo constructor lo primero que hay que recibir son las propiedades 
que le van llegar cuando se haga la instancia de user o sea ash y el avatar, bueno después si yo quiero, si yo invoco al método constructor ya que yo estoy haciendo una herencia de componentes tengo que llamar a a super() para que toda las cosas todo this este disponle en mi clase superior que es mi clase Component entonces le tengo que pasar mis propiedades para que funcione de la manera correcta.
Y LUEGO DE ESO YA PUEDO USAR MI método constructor , para asignarle 
un nuevo contexto ámbito de ejecución a esta funcion de handleClick()

Por que la funciones normales las no arrow function tienen 3 métodos 
para poder ser invocadas cambiarles su this y  asignárselo de de manera explicita el metodo:
El metodo
apply()
call()
bind()

Y este ultimo es el que me sirve el método bind()
this.handleClick.bind()
Cuando yo le pase el parámetro que recibe bind() va ser el 
nuevo this que va tener esta función, cual es el nuevo this 
que yo quiero que tenga esta f() pues el propio this de este 
contexto de esta clase en esta caso de la instancia NO
this.handleClick.bind(this)
Y esto me va devolver una nueva función.
> y esa nueva funcion la voy asignar a 
this.handleClick = this.handleClick.bind(this)*/
