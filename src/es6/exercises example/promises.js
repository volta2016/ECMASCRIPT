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
//___________________________________________________________________


//***Promises***/

/* Una promesa en js es un objeto que representa un valor puede estar disponible:
- ahora
- en un futuro 
- nunca

Esto es por que la promesa puede tener 3 estados 
resuelta > resolve
rechazada > reject
pendiente > pending 

Sirve para manejar flujos de datos asincrónicos de manera más simple y así evitar el famoso
callback hell 

- Un ejemplo cuando manejamos los datos en el front cuando pedimos información a una API 

- En el back cuando pedimos información en la base de datos

Nos vienen a facilitar las acciones asincrónicas en nuestro código
hay 2 maneras de trabajar para evitar lo que es el callback hell una es 
1- Una es el método then
2- Es el metodo async await

// ASYNC AWAIT */
//Queremos actualizar las tareas de un usuario > completadas en neustra db

//Promesas con then El .then nos permite manjarlas de manera sincrónicas
//con .then podemos ir encadenando multiple promesas para hacerlo de una manera mucho mas simpple

function completarTareas(req, res) {
  User.finById(req.userId)
    .then(function(user) {
      return Taks.findById(user.taskId);
    })
    .then(function(tasks) {
      tasks.completed = true;
      return Taks.save();
    })
    .then(function() {
      res.send("Task complete!");
    })
    .catch(function(err){
      res.send(err)
    })
}


//ASYNC AWAIT

//async le va decir a nuestro código que va a correr una función asincrónica
//y nos va permitir utlizar  

//catch nos va servir para el manejo de errores 

async function completarTareas(req, res) {
  // req > request
  // res > result
  //async nos permite usar el wait dentro de la func
  //await lo que hace es decirle al code que esta promesa termine antes de continuar
  try {
    const user = await User.findById(req.userId);//esta buscando al usuario en la base de datos
    const tasks = await Tasks.finById(user.taskId);
    tasks.completed = true;
    await tasks.save();//guardamos en nuestra base de datos
    res.send("Tasks Save");
  } catch(err) {
    res.send(err);
  }
}



/*¿ JavaScript es Sincrónico o Asincrono ?
JavaScript es Sincrónico en single thread

sincróno

//_________________________________
Promise.all 
  
  lo que va hacer es que si tenemos  3 promesas y la primera tarda 10 segundos al resolverse,
  la segunda tarda 20 segundos y la tercera 15 segundo en resolverse, si nostros la resolvemos en bloques
  separados vamos a tener un total de 45 segundo pero si las resolvemos a traves de un promise all
  va tardar la promesa > usar siempre const para variable*/