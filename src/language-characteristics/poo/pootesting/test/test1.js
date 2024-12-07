const Person = require('../class/Person');
const Employee = require('../class/employee');
const Student = require('../class/student');

let objPerson = new Person('Kyo', 'Japan');
objPerson.greetings();

objPerson = new Person('Leonel', 'Argentina');
objPerson.greetings();

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
