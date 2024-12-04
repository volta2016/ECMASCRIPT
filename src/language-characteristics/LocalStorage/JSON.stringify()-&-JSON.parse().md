# JSON.stringify() & JSON.parse()

```js
const frutas = [
  {
    nombre: "🍌",
    color: "amarillo",
  },
  {
    nombre: "🍒",
    color: "rojo",
  },
  {
    nombre: "🍏",
    color: "verde",
  },
];

localStorage.setItem("frutas", JSON.stringify(frutas));

if (localStorage.getItem("frutas")) {
  const frutas = JSON.parse(localStorage.getItem("frutas"));
  console.log(frutas);
}
```
