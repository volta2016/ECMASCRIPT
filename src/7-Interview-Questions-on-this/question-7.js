//::Question 7: Calling arguments

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};

object.method(callback, 1, 2);


/* 
obj.method (callback, 1, 2) se invoca con 3 argumentos: callback, 1 y 2. Como resultado, la variable 
especial argumentos dentro del método () es un objeto similar a una matriz de la siguiente estructura:
*/

{
  0: callback,
  1: 1, 
  2: 2, 
  length: 3 
}

/*
Debido a que los argumentos [0] () es una invocación de método de devolución de 
llamada en el objeto de argumentos, esto dentro de la devolución de llamada es igual a argumentos. 
Como resultado, this.length dentro de callback () es lo mismo que argument.length, que es 3.
*/