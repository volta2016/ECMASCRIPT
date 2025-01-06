const Person = require('./Person');

class Student extends Person {
  constructor(name, countryOfBirth, university, semester) {
    super();
    this.name = name;
    this.countryOfBirth = countryOfBirth;
    this.university = university;
    this.semester = semester;
  }

  showStudent() {
    console.log(
      `I study at ${this.university}. I'm in the ${this.semester} semester.`
    );
  }
}

module.exports = Student;
