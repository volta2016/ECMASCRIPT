class Person {
  constructor(name, countryOfBirth) {
    this.name = name;
    this.countryOfBirth = countryOfBirth;
  }

  greetings() {
    // Cambiado de grettings a greetings
    console.log(
      `Hello, my name is ${this.name} and I live in ${this.countryOfBirth}.`
    );
  }
}

// let objPerson = new Person('Kyo', 'Japon');
// objPerson.greetings();

// let objPerson2 = new Person('Leonel', 'Argentina');
// objPerson2.greetings();

class Employee extends Person {
  constructor(name, countryOfBirth, company, profession, yearsOfWork) {
    super(name, countryOfBirth);
    this.company = company;
    this.profession = profession;
    this.yearsOfWork = yearsOfWork;
  }

  showWork() {
    console.log(
      `I work at ${this.company}. I'm a ${this.profession}, and I have ${this.yearsOfWork} years of experience.`
    );
  }
}

class Student extends Person {
  constructor(name, countryOfBirth, university, semester) {
    super(name, countryOfBirth);
    this.university = university;
    this.semester = semester;
  }

  showStudent() {
    console.log(
      `I study at ${this.university}. I'm in the ${this.semester} semester.`
    );
  }
}

let employee = new Employee(
  'Kyo',
  'Japan',
  'Bank 2000',
  'Software Developer',
  8
);

employee.greetings();
employee.showWork();

let objStudent = new Student('Felipe', 'México', 'Harvard', 'fifth');

objStudent.greetings();
objStudent.showStudent();
