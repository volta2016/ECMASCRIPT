// JavaScript Asíncrono

/*Cada operación se ejecuta y devuelve inmediatamente el control al hilo, evitando 
el bloqueo, cuando cada operación termine se enviará una notificación de que ha 
terminado, es entonces cuando la respuesta se encolará para ser procesada.*/

console.log('Inicio');

function dos() {
  setTimeout(function() {
    console.log('Dos')
  }, 1000)
}

function uno() {
  setTimeout(function() {
    console.log('Uno')
  }, 0);
  dos();
  console.log('Tres')
}

uno();
console.log('Fin');



function resolAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolAfter2Seconds(); //esto sería una promesa?
  console.log(result);
}

asyncCall();
