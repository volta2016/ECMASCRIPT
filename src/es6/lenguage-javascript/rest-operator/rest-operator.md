# Rest operator

Da alguna manera puedes pensar en el operador rest como el inverso de spread.
Lo que rest nos permite es agrupar normalmente los sobrante en una operación,
para una función.

Igual que el spread syntax usa los 3 puntos

//Operador rest {...} -> Spread syntax {...}

Pero su compartamiento es diferente y como se como es el Operador Rest y Cuando
es el de expansión, dependiendo en que escenarios se estan utilizando

El operador rest si yo lo coloco en los argumentos de una función
lo que va pasar es que para los 2 primeros argumentos que existen parametros
se guardan correctamente, si paso 10 y 20 estos se van a guardar en a y en b
y todos los demas se van contraer en un iterable con el nombre otros.

Del en 100 en adelante van terminar en la variable otros (se contraen)

```js
function suma(a, b, ...otros) {
  console.log(otros);
}

suma(10, 20, 100, 3, 4, 20, "apple");
```

Esto lo podemos combinar con las desestructuración
