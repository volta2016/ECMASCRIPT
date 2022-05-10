JavaScript es un lenguaje de programación síncrono que
se ejecuta sobre **un solo hilo** y es asíncrono gracias a las API del navegador.

Es síncrono pero el sabe manejar las peticiones de forma virtual
osea que el motor si es síncrono. pero como esta hecho puede ejecutar cosas asíncronas.

Para poder trabajar JavaScript con el event loop JavaScript introduce el concepto de promesas, que nos permiten definir código a ejecutarse, cuando una tarea fue finalizada

### Una promesa es un tipo de objeto retornado por una operación asíncrona, utilizando este objeto podemos obtener el valor final de la operación asíncrona o sus errores

### Una promesa es un objeto que va producir un valor en el futuro

Una promesa se puede encontrar en uno de los siguientes estados:

- fullfied: Completada significa que la promesa se completó con éxito
- rejected: Rechazada significa que la promesa no se completó con éxito
- pending: Pendiente que es el estado de la promesa cuando la operación no ha terminado, aquí decimos que la promesa no se ha cumplido
- settled: finalizada cuando la promesa término ya sea con éxito o con algún error

vamos a la práctica con fetch:

fetch por naturaleza es una operación asíncrona

```js
let request = fetch("https://api.github.com/users/codigofacilito");
console.log(request);
```
