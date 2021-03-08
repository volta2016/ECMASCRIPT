//::Question 6: Tricky length

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method(callback) {
    console.log(this.length)
    callback();
    //si aqui asignamos un this si que pudiera posible que vieramos el length y si aplico console.log si 
    //que me sale 5
    //podemos bindear para pasarle el 5
    callback.bind(object)();//esta bindeando la función callback al objeto contexto de object
  }
};

object.method(callback, 1, 2);

//What logs to console the following code snippet:


/* 
1- tenemos un var ojo ::var::, esto significa que esto va estar en el window su contexto, craamos un funcion llamada callback
y hacemos un  console.log(this.length); 

2- tenemos un objeto que tiene una propiedad length y un método que se le pasa un callback que ejecuta un callback
> que este callback es el que se le pasa por parametro que no es directamente que ejecute este function callback() {}
si no que le pasa por parametro. Este callback se ejecuta y este console.log(this.length); es 4 es window, porque al final
esta es una función regular, esta se esta ejecutando como función regular
*/

/* esto lo que podria hacer es que te devolviese un numero de argumento que le estas pasando por parametro al callback,
este callback en lugar de ejecutarlo así lo ejecutamos de otra forma podriamos conseguir que this length fuese el numero de 
argumentos que le pasamos
*/

/*
los de 1, 2 como argumento es trampa esto no sirve para nada
*/

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method() {
    console.log(arguments)
    console.log(arguments.length)
    console.log(arguments[0]())//de donde sale este 3 ?
    callback();
    
  }
};

object.method(callback, 1, 2);

{
'0': ƒ callback(),
'1': 1,
'2': 2,
length: 3,
}

/*fíjate que yo tengo un length si yo aplico arguments, si yo llamo a console.log(arguments.length) 
tengo el 3
también aquí debo decir arguments[0] y aqui es donde esta lo Tricky 
console.log(arguments[0])//de donde sale este 3 ?
este 3 sale por el numero de argumentos que esta pasando aquí  es por eso ha puesto estos argumentos
arguments[0]() aqui lo que esta funcionando es la invocación de un método y es la invocación de un método
de arguments tanto el objeto de console.log(this.length); va ser arguments al final todo esto es un objeto
arguments[0]() arguments y el array es una propiedad, por lo tanto cuando lo ejecutamos el this, va ser
console.log(arguments.length); el arguments que estamos invicando se esta bindeando por eso es 3
en el callback se bindea la cantidad de argumento y al final lo estamos invocando 
*/

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method(callback) {
    callback()//el this sería el window 4
    console.log(arguments[0](), 'bindea el arguments')//de donde sale este 3 ? el this sería el argumnents
    callback();
    
  }
};

object.method(callback, 1, 2);













