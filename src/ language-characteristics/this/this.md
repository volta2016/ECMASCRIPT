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
