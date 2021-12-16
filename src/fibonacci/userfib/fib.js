function fibo(number) {
  let a = 0,
    b = 1,
    c,
    s = 1;
  console.log(a, b);
  for (i = 3; i <= number; i++) {
    c = a + b;
    console.log(c);
    s = s + c;
    a = b;
    b = c;
  }
}

fibo(prompt());
