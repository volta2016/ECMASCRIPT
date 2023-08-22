function slowSquare(number) {
  return new Promise((resolve) => {
    const result = number ** 2;

    setTimeout(function () {
      //instead of returning the callback I will resolve the promise
      resolve(result);
    }, 2000);
  });
}

function calculate(result) {
  return slowSquare(result);
}

// SlowSquare(2)//in this moment is pending
//   .then((result) => console.log(result))

// slowSquare(2)//in this moment is pending
//   .then(calculate)
//   .then(calculate)
//   .then(console.log)

//we don´t need a callback like a param

slowSquare(2) //in this moment is pending
  .then((result) => result) // 4
  .then((result) => result + 2) // 6
  .then((result) => result + 5) // 11
  .then(console.log); // Here the console.log is executed with the value 11
