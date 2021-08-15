/*::Parámetros por defecto::
Ahora es completamente posible definir un valor por defecto a l
os parámetros de nuestras funciones al igual que en otros lenguajes de programación*/

function pais(name) {
  name = name || 'other country'
  console.log(name)
}
pais()
pais('México')


function pais(name = 'Brasil') {
  console.log(name)
}
pais()
pais('México')