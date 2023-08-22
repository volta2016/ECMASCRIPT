class Student {
  #name;
  #lastname;

  constructor(name, lastname) {
    this.#name = name;
    this.#lastname = lastname;
  }

  get fullname() {
    return `${this.#name} ${this.#lastname}`;
  }

  static fromObject(obj) {
    const { name, lastname } = obj;
    return new Student(name, lastname);
  }
}

const studentsInfo = [
  {
    name: "Ana",
    lastname: "Garcia",
    scores: [3, 4, 4.5],
  },
  { name: "Luis", lastname: "Pérez", scores: [4.5, 4, 4, 5] },
];

const kyo = new Student("Kyo", "Himura");

kyo.fullname;

function calculateAverage(students) {
  const averages = students.map(({ name, lastname, scores }) => {
    const student = Student.fromObject({
      name,
      lastname,
    });

    const scoresSum = scores.reduce((acum, score) => acum + score, 0);
    const average = scoresSum / scores.length;

    return {
      fullname: student.fullname,
      average: average?.toFixed(2) ?? "N/A",
    };
  });

  averages.forEach(({ fullname, average }) => {
    console.log(`${fullname}: ${average}`);
  });
}

calculateAverage(studentsInfo);

console.log("Hola mundo");

const FIVE_SECONDS_IN_MS = 5000;

function sayHej() {
  console.log("Hej världen");
}

setTimeout(sayHej, FIVE_SECONDS_IN_MS);

console.log("Hola world");
//callback llamame de regreso

console.log("make rice");

const ONE_SEC_IN_MS = 1000;

function cook(ingredient, callback, time) {
  setTimeout(function () {
    //console.log(ingredient)
    callback(`The ${ingredient} is ready`);
  }, time * ONE_SEC_IN_MS);
}

const make = cook;

cook("arroz", console.log, 10);
cook("huevo", console.log, 2);
make("mesa", console.log, 1);

// SlowSquare

function SlowSquare(number, callback) {
  const result = number ** 2;

  setTimeout(function () {
    callback(result);
  }, 2000);
}

SlowSquare(2, console.log);
