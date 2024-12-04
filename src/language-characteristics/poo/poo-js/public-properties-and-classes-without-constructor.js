// class Person {
//   //public property
//   name = 'without name';
//   constructor(countryOfBirth) {
//     //this.name = name;
//     this.countryOfBirth = countryOfBirth;
//   }

//   greetings() {
//     // Cambiado de grettings a greetings
//     console.log(
//       `Hello, my name is ${this.name} and I live in ${this.countryOfBirth}.`
//     );
//   }
// }

class Person {
  //public property
  name = 'without name';
  countryOfBirth = 'without country';

  greetings() {
    // Cambiado de grettings a greetings
    console.log(
      `Hello, my name is ${this.name} and I live in ${this.countryOfBirth}.`
    );
  }
}

let objPerson = new Person('Japon');
objPerson.name = 'Pablo';
objPerson.countryOfBirth = 'México';
objPerson.greetings();

objPerson = new Person();
objPerson.greetings();
