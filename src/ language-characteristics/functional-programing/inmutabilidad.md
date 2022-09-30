# Inmutabilidad

Inmutabilidad es el concepto con que nos referimos a un objeto que no
puede modificar su valor.

Cualquier arreglo o objeto enviado a una función, se envia por referencia y por
lo tanto puede ser modificado.

## ¿Sabías que antes ya has trabajado con objetos inmutables?

si has programado en javascript ya has ocupado inmutablidad antes.

- Los tipos primitivos como cadenas y números en Javascript son inmutables
- En un sistema inmutable, los valores pueden ser remplazados, pero la estructura
  no debe ser modificada

  ```js
  let nombre = "code";
  nombre = "machine learning"; //remplaza a la cadena code
  nombre = "Uriel";

  nombre[1] = "X"; // no lo modifica, las cadenas son inmutables

  console.log(nombre);
  ```

  los objetos y los arreglos no son inmutables son estructuras mutables y su estructura puede
  ser modificada

  ```js
  let usuario = { nombre: "Kyo" };
  usuario.edad = 29; //Mutación
  ```
