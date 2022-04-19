function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}

isAdult(20);

//El codigo que escribimos es un algoritmo? Si. El algoritmo que escribimos es totalmente genérico y reutilizable? No.

/*Esto se debe a que nosotros estamos asumiendo que la mayoria de edad siempre es a partir de los 18 años, pero esto no aplica a todos los países. Por ejemplo, en Tailandia la mayoría de edad es a partir de los 20 años o en Austria es a partir de los 15. Teniendo en cuenta este dato, podríamos modificar nuestro codigo a lo siguiente:*/

function isAdult(age, adultAge) {
  if (age >= adultAge) {
    return true;
  }
  return false;
}

isAdult(10, 18);

/*Este ultimo código es un algoritmo? Si. Este algoritmo es totalmente generico y reutilizable? Si.

Eso quiere decir que nuestro segundo codigo es mejor que el primero? No necesariamente. Lo importante a la hora de escribir un algoritmo y resolver un problema es entender el contexto y el alcance del problema que queremos resolver. Por ejemplo si nuestro producto es internacional, el segundo codigo es el correcto mientras que el primero no, pero si nuestro producto o servicio tiene un alcance exclusivo de Argentina o Mexico, la segunda solución es genérica por de mas y la primera probablemente sea la mas adecuad*/
