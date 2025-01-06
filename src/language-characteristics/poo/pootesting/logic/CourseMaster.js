const Course = require('../class/course');

class CourseMaster {
  /**
   * Method that permits saving a course.
   * @param {Course} objCourse Course that you wish to save.
   * can call the method saveCourse(objCourse) directly
   */
  static saveCourse(objCourse) {
    // Save the course in the static list
    Course.listedCourses.push(objCourse);

    console.log(`The course "${objCourse.title}" has been saved.`);
    console.log('Course Chapters:', objCourse.chapters.length);
    console.log(`Course Duration: ${objCourse.duration} minutes`);
  }

  static searchById(id) {
    /**
     * If of Course.
     * @param {number} id Course that you wish to save.
     */
    // Save the course in the static list
    const courses = Course.listedCourses;

    const course = courses.find((objCourse) => objCourse.id === id);
    //console.log('course', courses);
    return course;
  }

  /**
   * Display all saved courses.
   */
  static displayCourses() {
    console.log('Listed Courses:');
    Course.listedCourses.forEach((course, index) => {
      console.log(`Course ${index + 1}:`);
      console.log(`Title: ${course.title}`);
      console.log(`Duration: ${course.duration} minutes`);
      console.log(`Chapters: ${JSON.stringify(course.chapters, null, 2)}`);
    });
  }
}

module.exports = CourseMaster;
