//The concept is
// In #javascript, it is possible to use Private Properties by placing
// the ‘#’ symbol before the property name. This allows us to encapsulate our properties.

class Person {
  //public property
  #name = 'without name';
  #countryOfBirth = 'without country';

  greetings() {
    // Cambiado de grettings a greetings
    console.log(
      `Hello, my name is ${this.#name} and I live in ${this.#countryOfBirth}.`
    );
  }

  get name() {
    return this.#name;
  }

  get countryOfBirthe() {
    return this.#countryOfBirth;
  }

  set name(valor) {
    if (valor === '') {
      console.log('Name cannot be empty');
    } else {
      this.#name = valor;
    }
  }
  set countryOfBirth(valor) {
    this.#countryOfBirth = valor;
  }
}

let objPerson = new Person('Japon');
objPerson.name = 'Pablo';
objPerson.countryOfBirth = 'México';
console.log('name =', objPerson.name);

objPerson.greetings();

objPerson = new Person();
objPerson.name = 'Leonel';
objPerson.countryOfBirth = 'Argentina';
objPerson.greetings();

//when you print in console say without name because now name is a private property
