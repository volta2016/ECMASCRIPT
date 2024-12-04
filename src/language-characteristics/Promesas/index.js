//Promise
/*
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise.then((response) => console.log(response));
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo2");
  }, 300);
});

const getResultado = async () => {
  let result = await myPromise; //acá a la promesa la estamos esperando
  return result;
};

getResultado()
  .then((result) => console.log(result)) //llamamos lo que se cumple
  .catch((error) => console.log(error));

//await es lo mismo que hacer .then() los 2 estan esperando el resultado
//de la promesa

function timeout(duration = 0, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`rejected after ${duration}ms`);
      } else {
        resolve(`resolve after ${duration}ms`);
      }
    }, duration);
  });
}

timeout(300, true)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//run js ok
