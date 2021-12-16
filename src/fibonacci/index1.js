const fibonacci = () => {
  let sequence = [0, 1];

  // para ser menor que 350, a sequence tem que ser menor que 14 elementos ja que o 14 é 377
  for (let i = sequence.length; i < 14; i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
  }
  return sequence;
};

const isFibonnaci = (num) => fibonacci().includes(num);

//console.log(isFibonnaci(233))
//console.log(isFibonnaci(377))

function* fibonacci(n) {
  const infinite = !n && n !== 0;
  let current = 0;
  let next = 1;

  while (infinite || n--) {
    yield current;
    [current, next] = [next, current + next];
  }
}
