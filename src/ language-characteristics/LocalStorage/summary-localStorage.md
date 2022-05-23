# localStorage

**LocalStorage** permite guardar datos en el navegador

- Los datos persisten guardados entre las diferentes sesiones del navegador
- LocalStorage es similar a sessionStorage. La unica diferencia es que, mientras
  los datos almancenados en el localStorage no tienen fecha de expiración, **los
  datos en el sessionStorage son eliminados** cuando finaliza la sessión
  del de navegacion -> lo cual ocurre cuando se cierra la página
- Las claves y valores tiene que ser siempre cadenas de texto

```js
// guardar
localStorage.setItem("fruta", "🍌");

// obtener
const fruta = localStorage.getItem("fruta");
console.log(fruta);

// eliminar
localStorage.removeItem("fruta");

//elimina todo los elementos
localStorage.clear();
```

¿Actualizar?

No existe en localStorage, más adelante veremos que se tiene que capturar el elemento y volver a guardarlo.
