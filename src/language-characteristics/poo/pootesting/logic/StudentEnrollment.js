const CourseMaster = require('../logic/CourseMaster');

class StudentEnrollment {
  static enrollStudent(idCourse, objStudent) {
    const course = CourseMaster.searchById(idCourse);

    if (!course) {
      console.log(`Error: Course with ID ${idCourse} not found.`);
      return;
    }

    console.log(
      `The Student ${objStudent.name} is enrolled in the course ${course.title}`
    );
  }
}

module.exports = StudentEnrollment;
