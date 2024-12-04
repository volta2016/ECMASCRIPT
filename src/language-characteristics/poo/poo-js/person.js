class Person {
  constructor(name, countryOfBirth) {
    this.name = name;
    this.countryOfBirth = countryOfBirth;
  }

  grettings() {
    console.log(
      `Hello my name is ${this.name} and I live in no${this.countryOfBirth}`
    );
  }
}

let objPerson = new Person('Kyo', 'Japon');
objPerson.grettings();

let objPerson2 = new Person('Lonel', 'Argentina');
objPerson.grettings();
