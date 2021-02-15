// ::::Promesas

// Es una manera alternativa a las callbacks para modelar asincronía.

* Construcción explícita del flujo de ejecución.
* Separación en bloques consecutivos.
* Manejo de errores más controlado.
* Combinación de diferentes flujos asíncronos.


::Promesas en el navegador::

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