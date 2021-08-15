// ::Generadores

/*Los generadores son un tipo especial de función que devuelve un valor y permite luego volver a entrar en la función 
en el mismo lugar en que se quedó, al tiempo que conserva el contexto de ejecución.
Son funciones que pueden ser pausadas y resumidas cuando llamamos a la función generador, no ejecuta 
el cuerpo de la función, sino que devuelve un objeto generador. El generador implementa una interfaz 
que le proporciona un método next(), que ejecutará el cuerpo de la función hasta encontrar un yield. 
En este punto, se detendrá.

El secreto del generador radica justamente en la palabra clave yield, que es un tipo especial 
de return que, en lugar de devolver un solo valor y salirse de la función, entrará nuevamente en esta y 
continuará ejecutándola hasta que se acabe o encuentre otra cláusula yield.

Para que una función se considere generador debe declararse anteponiento un asterísco function*.
Para obtener los resultados del generador lo hacemos con el método next() que devuelve un objeto de tipo:*/

{
  value: el valor retornado por yield
  done: indica si ha finalizado o no la ejecución del cuerpo de la función
}

// Los generadores, al implementar .next(), son iterables y suelen ser una forma más sencilla de describir un iterador.

function* generador(name) {
  yield `Hola ${name}`;
  yield 'Esta línea saldrá en la segunda ejecución';
  yield 'Esta otra, en la tercera';
  if ( name === 'Kyo' ) {
    yield 'Esta otra, saldrá en la cuarta solo si te llamas Kyo';
  }
}

let gen = generador('Kyo');
console.log(gen.next()); //Imprime Object {value: "Hola Kyo", done: false}
console.log(gen.next().value); //Imprime Esta línea saldrá la segunda ejecución
console.log(gen.next().value); //Imprime Esta otra, en la tercera
console.log(gen.next().value); //Imprime Esta otra, saldrá en la cuarta solo si te llamas Jonathan
console.log(gen.next());


// :::Más ejemplos con Generadores:

class LoremIpsum {
  constructor( text ) {
    this._text = text;
  }

  *words() {
    const re = /\S+/g;
    let match;

    while( match = re.exec( this._text ) ){
      yield match[0];
    }
  }
}

const lorem = new LoremIpsum('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatem eveniet ipsum in similique maxime sunt eaque veritatis sapiente. Fuga minus, non cumque deleniti consequatur. Odit reprehenderit non fugit cum!');

for ( let word of lorem.words() ) {
  console.log( word );
}

class Usuarios {
  constructor( gente ) {
    this._gente = gente;
  }

  *alias() {
    for ( let persona of this._gente ) {
      yield ( persona.sexo === 'H' ) ? `Sr. ${persona.nombre}` : `Sra. ${persona.nombre}`;
    }
  }
}

const gente = new Usuarios([
  { sexo: 'H', nombre: 'Jon' },
  { sexo: 'M', nombre: 'Irma' }
]);

for ( let persona of gente.alias() ){
  console.log( persona );
}

