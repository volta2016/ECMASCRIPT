(function () {
  console.log("Esta función no tiene nombre y se ejecutara inmediatamente");
})();

/*Con estas lineas hemos hecho tres cosas:

Agrupar el código escrito entre paréntesis para que no haya errores sintácticos con el resto del código.
Crear una función anónima (sin nombre) con un código a ejecutar.
Colocar ()  inmediatamente después de esta función para decir a JavaScript “¡oye! Ejecuta este código que estoy poniendo aquí como si se tratara de una función”.
Con esta forma de crear funciones anónimas no es de extrañar que además se puedan mandar parámetros a la función sin ningún problema:*/

(function (uno, dos, tres) {
  console.log(uno);
  console.log(dos);
  console.log(tres);
})(1, 2, 3);
