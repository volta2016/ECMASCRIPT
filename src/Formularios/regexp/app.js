// notación literal
//const regExpLiteral = /kyo/i;
const regExpLiteral = /[yo]/i; //rango de caracteres

const regExpTextNum = /[A-Za-z0-9]/i; //acepta numeros y letras

// notación de objeto
const regExpObjeto = new RegExp("kyo|kyoo", "i");

console.log(regExpTextNum.test("kyoo rtry 1231223")); // devuelve true por que lo encuentra
