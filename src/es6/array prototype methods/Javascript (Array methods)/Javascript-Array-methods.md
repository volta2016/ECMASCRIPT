# Vamos analizar los siguientes métodos muy utlizados en js

- Estos metodos no mutan al array original si que devuelven uno nuevo
- Hacemos referencia la programación funcional

## Vamos a estudiar

- map
- find
- filter
- reduce

Programación funcional

**La programación funcional es paradigma (modelo, patrón o ejemplo) de programación. En programación funcional, el código está organizado en funciones más pequeñas y básicas que se pueden combinar para construir programas de mayor complejidad. Vamos delegando tareas que podemos reutilizar en nuestro programa**

## ¿Qué paradigma de programación tiene JavaScript?

Javascript es multiparadigma

**Paradigma de programación:** no es más que una forma de ver y crear código de programación. Para resolver problemas.

**Imperativo:** (Emperador) en el que el programador instruye a la máquina cómo cambiar su estado.
procedimental que agrupa las instrucciones en procedimientos.
orientado a objetos (OPP o POO) que agrupa las instrucciones con la parte del estado en el que operan.

**Declarativo:** en el que el programador simplemente declara las propiedades del resultado deseado, pero no cómo calcularlo.
funcional en el que el resultado deseado se declara como el valor de una serie de aplicaciones de función.
lógico en la que el resultado deseado se declara como la respuesta a una pregunta sobre un sistema de hechos y reglas.
matemático en el que el resultado deseado se declara como la solución de un problema de optimización.
reactivo en el que se declara el resultado deseado con flujos de datos y la propagación del cambio.

## Imperativa vs Declarativa

**Programación imperativa:** Nosotros dictamos el camino a seguir a través del control de flujo: variables, funciones, if, else, switch, loops ( while, for, for of, for in), try catch, async await. Por lo tanto siempre utilizas programación imperativa en Javascript.
**Programación declarativa:** Declaras lo que quieres que suceda, no cómo se hace. La programación funcional básicamente significa escribir código que hace algo (declara lo que se hace) pero no es específico sobre cómo hacerlo (imperativo) un ejemplo es el método map().

- Javascript permite un estilo de desarrollo tanto declarativo como imperativo,
