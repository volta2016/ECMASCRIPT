//::Question 5: Greeting and farewell

//What logs to console the following code snippet:

const object = {
  who: 'world',
  greet() {
    return `Hello ${this.who}!`;// el greet() que es una función         //regular es un metodo de la propiedad
  }
  
  farewell: () => {
    return `Goddbye, ${this.who}`;
  }
}

console.log(object.greet());    // What is logged?
console.log(object.farewell()); // What is logged?

/* 
1- cuando llamamos a console.log(object.greet()); va llamar al this de objeto contexto que este caso el this del object es  who: 'world',
this valor es igual a objeto porque saludar es una función regular

2- pero cuando llamamos a farewell() es un arrow function por lo que this dentro de la arrow function su scope superior es afuera del object o sea window actualmente devuelve 'Goodbye, ${window.who}!
que se evalua como 'Goodbye, undefined!'
*














