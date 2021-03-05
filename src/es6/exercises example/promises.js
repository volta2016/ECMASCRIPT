// ::::Promesas

// Es una manera alternativa a las callbacks para modelar asincronía.

// * Construcción explícita del flujo de ejecución.
// * Separación en bloques consecutivos.
// * Manejo de errores más controlado.
// * Combinación de diferentes flujos asíncronos.


// ::Promesas en el navegador::

function adivinarNumero() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let n = Math.floor(Math.random() * 10);

      return (n >= 1 && n <= 5 )
        ? resolve(`Adivinaste el numero: ${n}`)
        : reject(new Error(`No adivinaste el numero: ${n}`))
    }, 100)
  });
}

adivinarNumero()
  .then(num => console.log(num));
  .catch(error => console.log(error));

// ::Promesas en el servidor

  const fs = require('fs'),
  file = './nombres.txt',
  newFile = './nombres_promises_es6.txt';

let promise = new Promise((resolve, reject) => {
  fs.access(file, fs.F_OK, (err) => {
    return (err)
      ? reject( new Error('El archivo no existe') )
      : resolve(true);
  });
});

promise
  .then((dataPromise) => {
    console.log('El archivo existe');

    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        return (err)
        ? reject( new Error('El archivo no se pudo leer') )
        : resolve(data);
      });
    });
  })
  .then((dataPromise) => {
    console.log('El archivo se ha leído exitosamente');

    return new Promise((resolve, reject) => {
      fs.writeFile(newFile, dataPromise, (err) => {
        return (err)
          ? reject( new Error('El archivo no se pudo copiar') )
          : resolve('El archivo se ha copiado con éxito');
      });
    });
  })
  .then((dataPromise) => { console.log(dataPromise); })
  .catch((err) => { console.log(err.message); });