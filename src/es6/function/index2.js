/*"en este for la varibale i va ser pisada ya no va 
a tener el valor del string"
*/

/*
function variables() {
  var i = "contratado"
  for(var i = 0; i < 2; i++) {
    
  }
  console.log(i)
}

variables()
*/

/*
si corremos todo con let estamos contrado porque let tiene un scope de bloque*/


function variables() {
  let i = "contratado"
  for(let i = 0; i < 2; i++) {
    console.log(i)
  }
  console.log(i)
}

variables()


/*a consy no se le puede re asignar un valor */

//si declaramos
const x = 10

//no podemos redefinala a la const esto esta mal
//const x = 5

//let nos permite re definir variables

let num = 7
num = 14

console.log(num)

/*una constante no es re asignable pero si es mutable /(no es inmutable const)

const group = []

group.push(2,3)

console.log(group)


arrow function y function */

function nameFunction() {

}

const nameCharacter = (name) => console.log(name)
nameCharacter("Kyo")

/* las arrow function nos facilita el manejo  el this
1- Con la funciones comunes el this toma como contexto
el objeto donde fue ejecutada la funcion 
2- En cambio con las arrow function el this toma como contexto el objeto donde fue declarada la funcion 
> miro el arrow function veo el objeto anterior a la arrow function (es el objeto padre) el this de esa arrow function va ser ese objeto en resumen las arrow function nos buscan */