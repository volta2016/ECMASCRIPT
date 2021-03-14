::Object.prototype.valueOf()
// El método valueOf() retorna el valor primitivo del objeto especificado.

Sintaxis

object.valueOf()


function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function() {
  return this.number;
};

const object1 = new MyNumberType(4);

console.log(object1 + 3);
// expected output: 7

/*

*/