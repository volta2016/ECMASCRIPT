//::Question 1: Variable vs property

const object = {
  message: 'Hello wordl!',
  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  }
}

console.log(object.getMessage());

/*hay que entender la diferencia entre variable y propiedad
al final esta const message no tiene que nada que ver con el this.message 
este this lo que esta haciendo es referirse al contexto de ejecución 
en el que estamos ejecutando este método, el contexto de ejecución viene creado por este objeto o sea estamos hablando de este objeto el this corresponde a este objeto 
si tu creas un const message no es un propiedad del propio objeto en si. Si creamos un var usaríamos directamente message*/

/* EL CONTEXTO de ejecución viene por que estamos object.getMessage entonces esta es un invoción al metodo partir del objeto object.getMessage() */