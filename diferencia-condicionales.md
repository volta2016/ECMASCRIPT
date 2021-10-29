## If: If, Else, else if

Ejecuta una sentencia que evalúa una condición específica, Sí evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada.

condición
Una expresión que puede ser evaluada como verdadera o falsa.

sentencia 1
Sentencia que se ejecutará si condición es evaluada como verdadera. Puede ser cualquier sentencia, incluyendo otras sentencias if anidadas. Para ejecutar múltiples sentencias, use una sentencia block ({ … }) para agruparlas.

sentencia 2
Sentencia que se ejecutará si condición se evalúa como falsa, y exista una cláusula else. Puede ser cualquier sentencia, incluyendo sentencias block y otras sentencias if anidadas.

sintaxis del if

```js
if (condición1) {
  sentencia1;
} else if (condición2) {
  sentencia2;
} else if (condición3) {
  sentencia3;
} else {
  sentencia4;
}
```

La sentencia if se puede combinar con los operadores lógicos: &&(and) || (or)

```js
if (condición1 && condición2) {
  sentencia1;
  sentencia2;
} else if (condición3 && condición4) {
  sentencia3;
  sentencia4;
}
```

## Operador condicional (ternario)

El operador condicional es el único operador de JavaScript que toma tres operandos. El operador puede tener uno de los dos valores basados en una condición. La sintaxis es:

```js
var age = 20;
var status = age >= 18 ? "adult" : "minor";
```

Si la condición (age >= 18) evaluada arroja true, el operador asigna la primera parte de la expresión (‘adult’) . De lo contrario, se asigna la segunda expresión (‘minor’) . Puede utilizar el operador condicional en cualquier lugar donde utilice un operador estándar.

Referencia:

if, else if | Javascript MDN
Expressions and operators - JavaScript | MDN
Operador condicional (ternario) - JavaScript | MDN

## Switch
La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta las declaraciones asociadas a ese case, así como las declaraciones en los casos que siguen.

expresión
Es una expresión que es comparada con el valor de cada instancia case.
case valorN
Una instancia, case valorN es usada para ser comparada con la expresión. Si la expresión coincide con el valorN, las declaraciones dentro de la instancia case se ejecutan hasta que se encuentre el final de la declaración switch o hasta encontrar una interrupción break.
default
Una instancia default, cuando es declarada, es ejecutada si el valor de la expresión no coincide con cualquiera de las otras instancias case valorN.
// ==Sintaxis==

```js
var expression = "valor2";
switch (expression) {
  case "valor1":
    //Logica para cuando, conincida con el valor
    break;
  case "valor2":
    //Logica para cuando, conincida con el valor
    break;
  case "valorN":
    //Logica para cuando, conincida con el valor
    break;
  default:
    //Logica para cuando, conincida con el valor
    break;
}
```

## ¿Qué pasa si olvido un break?

Si olvidas un break, el script se ejecutará desde donde se cumple la condición y ejecutará el siguiente case independientemente si esta condición se cumple o no. En ocasiones es útil omitir el break, un ejemplo dónde es útil no colocar el break: Cuando se necesita que un conjunto de valores estén representados por una sola condición

    //          ==Operación única con múltiples casos==

    ```js
    var Animal = 'Jirafa';
    switch (Animal) {
        case 'Vaca':
        case 'Jirafa':
        case 'Perro':
        case 'Cerdo':
            console.log('Este animal subirá al Arca de Noé.');
            break;
        case 'Dinosaurio':
        default:
            console.log('Este animal no lo hará.');
    }

```

```
