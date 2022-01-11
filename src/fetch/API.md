# ¿Qué son las APIs?

api: Interfaces de Programacion de Aplicaciones (APIs por sus siglas en inglés)
API **son construcciones disponibles en los lenguajes de programación que permiten a los desarrolladores crear funcionalidades complejas de una manera simple**. Estas abstraen el código más complejo para proveer una sintaxis más fácil de usar en su lugar.

Si quisieras programar gráficos 3D, sería mucho más facil hacerlo usando una API escrita en un lenguaje de alto nivel como JavaScript o Python, en lugar de intentar escribir código de bajo nivel (por ejemplo: C o C++) que controle directamente la GPU del equipo u otras funciones gráficas.

# APIS

Es cuando nostros queremos conectar 2 recursos, ejemplo estamos trabajando el frontend con javascript pero que pasa si nostros queremos acceder al gps del navagador el navegador puede activar la geo location y nos puede dar la ubicación en donde nosotros estamos y con javascript podemos acceder a eso, pero el gps se tiene que conectar al hardware de nuestro pc, por ejemplo si estamos en celular tiene que conectarse al gps de nuestro telefono.
Nosostros no vamos estar programando código de hardware.

Lo que hacemos es consumir el recurso a traves de una API. Por lo tanto API es una forma de que el lenguaje del celular o del navegador configuro de una forma sencilla para poder conectarnos, eso es el concepto de API conectar 2 cosas que no estan escrita en el mismo lenguaje, pero se comunica de una misma forma.

Entonces con json place holder no sabemos cual es al base de datos de esta API no
sabemos si el backend es php, no sabemos si es node. No necesitamos saber eso por que ellos nos proporcionan un mecanismo sencillo para que nostros accedamos a esa información **por eso API es una forma de comunciar 2 recursos a través de un estandar**

## APIs en JavaScript del lado cliente

JavaScript del lado cliente, particularmente, tiene muchas APIs disponibles — estas no son parte del lenguaje en sí, sino que están construidas sobre el núcleo de este lenguaje de programación, proporcionándote superpoderes adicionales para usar en tu código. Por lo general, se dividen en dos categorías:

**Las APIs de navegador:** están integradas en tu navegador web, Por ejemplo, la API de Geolocalización proporciona algunas construcciones simples de JavaScript para obtener datos de ubicación con los que, por ejemplo, trazar tu ubicación en un mapa de Google. Realmente, el navegador está haciendo uso de códigos de bajo nivel complejos en segundo plano (por ejemplo, C++) para comunicarse con el hardware GPS del dispositivo (o lo que esté disponible para determinar los datos de posición), recuperar datos de posición y devolverlos al entorno del navegador para su uso en tu código. Pero una vez más, la API se encarga de abstraer esta complejidad.

**Las APIs de terceros:** no están incluídas por defecto en el navegador, y por lo general es necesario obtener el código e información desde algún lugar de la Web. Por ejemplo, la API de Twitter permite hacer cosas como mostrar tus últimos tweets en un sitio web.

## APIs de navegador más comunes

APIs para manipular documentos cargados en el navegador. El ejemplo más obvio es la API DOM
APIs que obtienen datos del servidor, comunmente usadas para actualizar pequeñas secciones de una página web. Fetch API.

- Las APIs para dibujar y manipular graficos: Las más populares son Canvas y WebGL
  APIS de audio y vídeo como HTMLMediaElement, la Web Audio API, y WebRTC
  Las APIs de dispositivos: geolocalización, notificaciones de sistema, vibración de hardware, etc

- Las APIS de almacenamiento en el lado del cliente: Web Storage API (sessionStorage, localStorage), IndexedDB API.
  #APIs populares de terceros
  Google maps
  Facebook, Twitter, Instagram, Discord, Youtube, etc
  jsonplaceholder

# ¿Que es API REST?

**REST:** "Representational State Transfer" o traducido a "Transferencia de presentación de estado".

Cuando queremos comunicar nuestro mundo del Frontend con el Backend (por ejemplo con Node.js), necesitamos alguna técnica. Aquí es donde nosotros podemos construir nuestra propia API para que nuestras aplicaciones se comuniquen de manera efectiva.

Para que la comunicación no sea un despelote existe el término de REST, que es un estandar para la construcción de APIS. una técnica de arquitectura de software usada para construir APIs que permitan comunicar a nuestro servidor con sus clientes usando el protocolo HTTP mediante URIs lo suficientemente inteligentes para poder satisfacer la necesidad del cliente.

Por ende API REST en simples palabras sería: **Una forma de entregar recursos para su utilización (comunicación) estandarizado y basado en arquitectura REST.**

## Para que sea REST:

REST es STATELESS: TOKEN para cada petición realizada a la API.
Crea URIs únicas que permiten al cliente entender y utilizar lo que está exponiendo. api.anexsoft.com/users
Tiene que responder a verbos Http: GET, POST, PUT, DELETE
#¿Qué es Restful?
REST es el concepto, RESTFul es la implementación y al crear un RESTFul creamos una API, la cual una API es un conjunto de funciones o procedimientos para que sea utilizado por otro software.
