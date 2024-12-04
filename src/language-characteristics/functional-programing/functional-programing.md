# La programación funcional es un paradigma de programación basado en el uso de funciones

Este paradigma tiene una base matemática muy fuerte, de la cual se extraen algunos conceptos
lo vamos abordar de manera práctica para JavaScript.

## Lenguajes Imperativos vs Declarativos

Podemos dividir los lenguajes de programación en dos grandes grupos: **los imperativos y los
declarativos.**

## Lenguaje Imperativo

Los imperativos son aquellos que necesitan recibir instrucciones específicas sobre
que tienen que hacer, como lo tienen que hacer, hacia que parte del código moverse, cuantas repeticiones hacer,
para poder solucionar un problema. **Imperativos son a los que estamos acostumbrados.**

Tenemos a los lenguajes de Ruby, Python y JavaScript.

## Lenguaje Declarativo

Los declarativos por su parte, se trata de decir **qué quiero,** sin preocuparte por los
detalles, en este tipo de lenguajes debe de existir un intérprete que tome estas decisiones y las
ejecute.

Ejemplos: Css y SQL

Un mismo lenguaje puede implementar mas de un paradigma. Aunque la programación funcional no es
como CSS o SQL que están muy en la zona de los declarativos se acerca bastante, por que en el paradigma
funcional tu te encargas de escribir funciones que realicen una tarea especifica para que después en la
implementación de la solución del programa, tu dices esta función y esta función. Que es la parte declarativa.

## Imperativa práctica

Vamos a ver este ejemplo, dado un arreglo, quiero obtener otro arreglo con el cuadrado
de cada uno de los elementos que esta en el arreglo números.

```js
let numeros = [1, 2, 3, 4];

let cuadrados = [];

for (let i = 0; i < números.length; i++) {
  let número = numeros[i];
  cuadrados.push(numeros * numeros);
}

console.log(cuadrado);
```

Esta es una primera posible solución, tengo todos mis elemento los itero para cada uno de ellos, en el segundo
arreglo guardo el cuadrado y finalmente muestro el la consola el resultado.

## Declarativo práctica

```js
let numeros = [1, 2, 3, 4];

let cuadrado = números.map((numero) => numero * numero);

console.log(cuadrado);
```

Esta ya es utilizando una sintaxys diferente.
Cuando los comparamos una de la cosas que primero sale a relucir, es que
la imperativa tiene menos lineas de código.

Podemos estar de acuerdo en que en tener menos lineas de código, no siempre
significa un mejor código. No es una diferencia significativa el hablar de menos
lineas de código. La diferencia a la que queremos llegar es que este **primer ejemplo.**
Es un ejemplo de programación imperativa, donde si nosotros queremos un nuevo arreglo
a partir de otro que, tenemos que ser explicitos de cuales son los pasos a seguir
para generar este segundo arreglo, desde que lo creo, desde que le guardo nuevos elementos,
desde que itero uno a uno los elementos del arreglo original. Este es un claro ejemplo
de programación imperativa

**El sugundo ejemplo** donde la iteración no esta declarada donde la generación
y como se crea el nuevo arreglo, como se guarda lo elementos del nuevo arreglo, no estan definidos
acá es un ejemplo de programación mas declarativa. En este caso yo le estoy diciendo
a través de **map** quiero un nuevo arreglo con esta operación, pero ya no le estoy
diciendo los detalles de como tiene que crear el arreglo o como tiene que iterar el arreglo original
de números, pero no estamos hablando cual es mejor, si no que queremos destacar el hecho de que son
2 formas distintas abordar el mismo problema. Una donde quiero ser mas imperativo
sobre los detalles de la implementación y una donde quiero ser más declarativo utilizando
las estrategias del lenguaje tiene.

**La programación funcional tiene más hacia la programación declarativa, para que cuando
implementamos funciones, con las que eventualmente tenemos que decir que funciones usar, sin
preocuparnos por los detalles que implmenten estas funciones.**

- La declarativa esconde un poco la implementación
- La programación orientada a objeto es más imperativa
