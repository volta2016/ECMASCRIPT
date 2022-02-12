# this

Palabra reserbada this

**this** es una palabra que hace referencia al objeto que estamos trabajando

1- Lo primero que tenemos que entender cuando tenemos javascript en los navegadores

```js
console.log(this);
```

**this** va hacer referencia al objeto global y el objeto global es este objeto que se llama
window

![window](./images/window.png)

se ejecutamos este código en node js no devolveria global que es el objeto global

entonces si objeto global en navegador es window esto validaría a true

```js
console.log(this === window); //true
```

ahora se ejecuto el siguiente código no va devolver en consola **contexto global**

```js
this.nombre = "contexto global"; //creamos una variable al window
console.log(this.nombre); //contexto global
```

```jsx
this.nombre = "contexto global";
console.log(this.nombre);

function imprimir() {
  console.log(
    this.nombre +
      " sigue imprimiendo la variable global ya que sigo en el ambito"
  );
}

imprimir();
```

sigo imprimiendo el contexto global al ejecutar mi funcion imprimir()

ahora vamos analizar donde se esta ejecutando el this.nombre dentro de mi const objeto

```js
const obj = {
  name: "Contexto Objeto",
  imprimir: function () {
    console.log(this.name);
  },
};

obj.imprimir();
```

Vemos que this se esta ejecutando dentro del scope apunato a name: "Contexto Objeto", esta función
anonima ha sido creada dentro del contexto del objeto por eso a la hora de llamar al método obj.imprimir();
me marca Contexto Objeto y no contexto global

Vamos a crear un objeto 2 pero el imprimir de ese objeto a quien va hacer referencia a la función que tenemos declarada
en el scope global del archivo. si el nombre de la var que guarda el valor es el mismo

simplemente lo podemos simplicar a esto

imprimir: imprimir
imprimir

ahora el contexto donde se ecuentra this.nombre dentro de la función, es el contexto del objeto numero 2
ya que como esta definida solo la llamamos dentro del objeto > le asignamo como valor una función que ya estaba declarada

```js
console.log(this);

this.nombre = "contexto global";
console.log(this.nombre);

function imprimir() {
  console.log(this.nombre);
}

imprimir();

const obj = {
  name: "Contexto Objeto",
  imprimir: function () {
    console.log(this.name);
  },
};

obj.imprimir();

const obj2 = {
  nombre: "Contexto Objeto 2",
  imprimir, // asigne como valor una función que ya estaba declarada
};

obj2.imprimir();
```

## arrow function

Aquí hay un detalle hasta cierto punto soluciona pero tambien crea conflictos con las arrow function
aquí lo que hace una arrow function, es manetener un el enlace del contexto que ha sido creado
el objeto donde aparece, a diferencia de esta function anonima, que es una function como tal maneja su propio
scope. El contexto de la palabra this lo que hace es tomarlo directamente del padre del objeto en el que se
ha creado es por eso que no esta imprimiendo el contexto global. Esto enlazar el contexto de padre al hijo
es muy similar a lo que hace el metodo bind, de hecho del metodo call apply y bind estan muy realacionados
al método this, entonces ese es una de las caracteristicas por las cuales

```js
const obj3 = {
  nombre: "Contexto Objeto 3",
  imprimir: () => {
    console.log(this.nombre);
  },
};

obj3.imprimir();
```
