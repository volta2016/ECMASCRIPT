//mucha gente resuelve este problema con recursividad pero no es necesario
//Los dos primeros números son 0 y 1. El resto se calcula sumando los anteriores
// vamos a partir iterando a partir de la posición 2, hasta que lleguemos al número que deseamos, luego incrementamos en 1 en cada iteración
// luego dentro del cuerpo del for sumamos en fib[i] los términos anteriores
// El que tenemos en el anterior y el que tenemos en el anterior del anterior
// Finalmente tenemos que devolver el número que tenemos en esa posición
// return fib[num]

console.log("hi");

function fibonacci(num) {
  const fib = [0, 1]; //primeros 2 terminos de fibonacci

  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[num];
}

fibonacci(1);
fibonacci(3);
fibonacci(10);
