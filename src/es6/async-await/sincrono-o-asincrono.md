# Síncrono vs asíncrono 🌟

## ¿Qué es programación asíncrona? 📚

Ahora vamos a explicar que lo que es asíncrono en informática y programación. Para ello tenemos que describir que es asíncrono en javascript y como se utiliza.

En la **programación asíncrona** se refiere a la **ejecución de procesos ejecutándose de manera simultanea.**

## ¿Qué es programación asíncrona? 📗

En la **programación síncrona** se refiere a la **ejecución de un solo proceso de manera simultanea.**

**Javascript es síncrono** pero **Nodejs es asíncrono**, V8 el motor de JS que utiliza node, convierte el código JS en lenguaje máquina que puede ser interpretado por el CPU.

## ¿Qué son los callbacks?

Un callback es una función que es enviada a otra función (se pasa como parametro ) para que sea ejecutada en determinado momento.

¿Qué es Libuv? 💻

**El motor Chrome V8** ejecuta código JS convirtiéndolo a código máquina, pero también hace uso de Libuv que conecta directamente con el sistema operativo para lidiar con otros elementos a un mas bajo nivel. Para mantener un orden de estos eventos usa un queue (lista) que en realidad funciona como un loop y que esta a la espera de que algo suceda. Cuando estos eventos suceden (abrir un archivo, escribir un archivo, descargar un archivo), este se dispara como una llamada que notifica a V8 que el evento se ha completado y que el callback de dicho evento debe ejecutarse. De esta forma el JS que es síncrono funciona de manera asíncrona en Node.

Así entonces tenemos que el uso de node permite que se definan eventos que no bloquean al sistema, y sus callbacks se ejecutan cuando dichos eventos se cumplen. A esto se le llama Non Blocking, es decir permite hacer otras cosas sin tener que detener la ejecución del código durante su ejecución.
