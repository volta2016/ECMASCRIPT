// ::Closures::
/* 
Son la combinación de una función y el alncance lexico que tiene esta.
Un closure se crea al momento de que nostros ejecutamos una función.
que es mas que nada a las viables puede acceder tanto dentro de la función como en un 
contexto de mas arriba.
si nostros definimos una función que va imprimir un valor una constante x que se encuentra afuera
de esta función ahí nosotros hemos definido un clousures y este se creo al momento de ejecutar 
esta función.
*/

const random = 'Kojima'

const f = () => {
  const n = 'Nakamura'
  console.log(random, n)
}

f();

// vamos a ver que se imprimio el valor de Kojima, y esto es por que la f(); que acabamos de definir
// acá tiene acceso a la constante que nosotros definimos, fuera de este parentesis de llaves 
// este es el alcance lexico que tiene una función en js. Esto quiere decir que una función puede acceder
// a las contantes que se encuentran definidas dentro de esta funcion y también a var que se encuentren
// definidas fuera de esta función.

// Esta combinación de cosa es lo que se conoce como un closures. Nostros con los closures vamos
// a poder realizar composición ya sea de objeto o también de funciones para poder ir modificando
// el comportamiento que queremos que tenga en este caso nuestras funciones. 




