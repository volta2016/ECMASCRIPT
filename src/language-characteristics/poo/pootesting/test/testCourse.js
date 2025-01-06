const Course = require('../class/course');
const CourseMaster = require('../logic/CourseMaster');
const Student = require('../class/student');
const StudentEnrollment = require('../logic/StudentEnrollment');

// Create a new course
let objCourse = new Course();
objCourse.id = 1;
objCourse.title = 'Basic JavaScript';
objCourse.chapters.push({ topic: 'Introduction', duration: 10 });
objCourse.chapters.push({ topic: 'Variable and constant', duration: 20 });
objCourse.chapters.push({ topic: 'Loops', duration: 15 });

// Verify the property of the course
// console.log('Course Title:', objCourse.title); // "Basic JavaScript"
// console.log('Course Chapters:', objCourse.chapters);
// console.log('Course Duration:', objCourse.duration); // 45

// when a create a static method is not neccesary that realize this
// let businessLogic = new CourseMaster();

if (objCourse.duration === 45) {
  console.log('succesfull');
} else {
  console.log('fail');
}

// save the course
CourseMaster.saveCourse(objCourse);
// Output: The course "Basic JavaScript" has been saved.

let objCourse2 = new Course();
objCourse2.id = 2;
objCourse2.title = 'Advanced JavaScript';
objCourse2.chapters.push({ topic: 'Asynchronous JS', duration: 30 });
objCourse2.chapters.push({ topic: 'ES6+', duration: 25 });
CourseMaster.saveCourse(objCourse2);

console.log(`TOTAL OF COURSES: ${Course.listedCourses.length}`);
console.log(`COURSE WITH ID 2: ${CourseMaster.searchById(2).title}`);

const objStudent = new Student(
  'kyo Himura',
  'Japan',
  'Katon University',
  '1º semester'
);

objStudent.showStudent();
objStudent.greetings();
StudentEnrollment.enrollStudent(1, objStudent);

// Show all courses saved
CourseMaster.displayCourses();
