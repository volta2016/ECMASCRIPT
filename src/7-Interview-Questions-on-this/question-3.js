//::Question 3: Delayed greeting

/*const object = {
  message: 'Hello, World!',

  logMessage() {
    console.log(this.message); // What is logged?
  }
};

setTimeout(object.logMessage(), 1000);*/


/*
Este es un error muy típico que en react en los eventos onclick, handle click porque cuando eran clases pues 
se tenian que bindear el valor de this lo que esta pasando aquí en este contexto de ejecución de este loveMessage 
después de que pase un segundo no sera el objeto lo esta pasando como parametro, para pasar como referencia a la función
no se esta ejecutando () directamente por lo tanto el contexto de ejecución de este método va ser el window y cuando sea el el contexto
el window este cosole.log(this.message); sera undefined
*/

//:: puede parecer que es como una invocación (en realidad es un //callback) pero como hemos visto antes pero fijate que no la esta ejecutando
//Ojo no la esta invocando.

//::Vamos arreglarlo el fix 
//una forma sería esta invocar a la función
/*const object = {
  message: 'Hello, World!',

  logMessage() {
    console.log(this.message); // What is logged?
  }
};
;
setTimeout(object.logMessage(), 1000)*/

//o trambién esto
/*const object = {
  message: 'Hello, World!',

  logMessage() {
    console.log(this.message); // What is logged?
  }
};

setTimeout(() => object.logMessage(), 1000);*/

/*otra forma sería obligarle o indicarle bindiando el valor del object
Esto le va decir creame una función como logMessage donde el valor de this sea el de este object, el .bind 
lo que hace es devolver una nueva función donde el valor de this es el que nosotros le pasamos por parametro, de esta 
forma el this si que podrá tener acceso al message por que básicamente nosotros le estamos setiando el valor de this.
*/

/* Esto pasa mucho en react por que logMessage() se utiliza en un evento, por lo tanto al pasarle al evento 
el método el valor de this se pierde cuando le haces this.setState
logMessage() {
  this.setState
}
Recuerda que estamos viendo shorthand property name
*/

const object = {
  message: 'Hello, World!',

  logMessage() {
    console.log(this.message); // What is logged?
  }
};

setTimeout(object.logMessage.bind(object), 1000);




