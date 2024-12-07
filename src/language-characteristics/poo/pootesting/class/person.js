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

module.exports = Person;
