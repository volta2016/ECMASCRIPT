const user = {
  name: "Jin",
  age: 30,
};

function printInfo(user) {
  return `<h1>hola ${user.name} ${user["age"]}</h1>`;
}

console.log(printInfo(user));

document.body.innerHTML = printInfo(user);

//Destructuring

function printInfoTwo({ name }) {
  return `<h1>hola ${name} </h1>`;
}

console.log(printInfoTwo(user));

function printInfoThree(user) {
  const { name, age } = user;
  return `<h1>hola ${name} tienes: ${age} años</h1>`;
}

console.log(printInfoThree(user));
