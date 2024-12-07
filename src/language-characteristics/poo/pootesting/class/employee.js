const Person = require('./Person');

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

module.exports = Employee;
