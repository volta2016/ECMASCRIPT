# Asynchronous

## Asincronía

La asincronía es uno de los pilares fundamentales de Javascript, ya que es un lenguaje de programación de un sólo subproceso o hilo **(single thread)**, lo que significa que sólo puede ejecutar una cosa a la vez.

> **single thread** un solo hilo de ejecución

Si bien los idiomas de un sólo hilo simplifican la escritura de código porque no tiene que preocuparse por los problemas de concurrencia, esto también significa que no puede realizar operaciones largas como el acceso a la red sin bloquear el hilo principal.

Imagina que solicitas datos de una API. Dependiendo de la situación, el servidor puede tardar un tiempo en procesar la solicitud mientras bloquea el hilo principal y hace que la página web no responda.

**Ahí es donde entra en juego la asincronía que permite realizar largas solicitudes de red sin bloquear el hilo principal.**

JavaScript fue diseñado para ser ejecutado en navegadores, trabajar con peticiones sobre la red y procesar las interacciones de usuario, al tiempo que mantiene una interfaz fluida.

Javascript usa un **modelo asíncrono y no bloqueante**, con un **loop** de **eventos** implementado en un sólo hilo, **(single thread)** para operaciones de entrada y salida (input/output).

Gracias a esta solución, Javascript es áltamente concurrente a pesar de emplear un sólo hilo

Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:

- Procesamiento Single thread (Hilo único) y Multi thread (Hilos múltples).
- Operaciones de CPU y Operaciones de I/O (Entrada y Salida).
- Operaciones Concurrentes y Paralelas.
- Operaciones Bloqueantes y No Bloqueantes.
- Operaciones Síncronas y Asíncronas.

## Single thread y Multi thread

Un hilo la unidad básica de ejecución de un proceso, cada que abres un programa como el navegador o tu editor de código, se levanta un proceso en tu computadora e internamente este puede tener uno o varios hilos (threads) ejecutándose para que el proceso funcione.

## Operaciones de CPU y de Entrada y Salida

- Operaciones CPU: Aquellas que pasan el mayor tiempo consumiendo Procesos del CPU, por ejemplo, la escritura de ficheros.
- Operaciones de Entrada y Salida: Aquellas que pasan la mayor parte del tiempo esperando la respuesta de una petición o recurso, como la solicitud a una API o BD.
- Concurrencia y Paralelismo

### **Concurrencia:** cuando dos o más tareas progresan simultáneamente.

### **Paralelismo:** cuando dos o más tareas se ejecutan, al mismo tiempo.

## Bloqueante y No Bloqueante

Se refiere a como la fase de espera de las operaciones afectan a nuestra aplicación:

- Bloqueante: Son operaciones que no devuelven el control a nuestra aplicación hasta que se ha completado. Por tanto el thread queda bloqueado en estado de espera.
- No Bloqueante: Son operaciones que devuelven inmediatamente el control a nuestra aplicación, independientemente del resultado de esta. En caso de que se haya completado, devolverá los datos solicitados. En caso contrario (si la operación no ha podido ser satisfecha) podría devolver un código de error.

## Síncrono y Asíncrono

- Se refiere a ¿ cuándo tendrá lugar la respuesta ?

**Síncrono:** La respuesta sucede en el presente, una operación síncrona esperará el resultado.
**Asíncrono:** La respuesta sucede a futuro, una operación asíncrona no esperará el resultado.
Con lo anterior en JavaScript podemos tener:

Código síncrono y bloqueante o
Código asíncrono y no bloquenate
