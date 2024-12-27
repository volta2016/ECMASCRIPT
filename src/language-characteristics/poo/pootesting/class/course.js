/**
 Clase: Curso
 Reglas de negocio:
 - Debe tener estas propiedades: título, lista de capitulos, duración especificada en minutos
 - Cada capitulo debe tener el tema y la duración
 - La duración del curso sera la sumatoria de todos, la duración independiente de cada capítulo.
 *
 * Lógica de negocio del Curso:
 * - Debe existir una función para guardar un curso
 * - Debe existir una función para buscar un curso por ID
 * Lógica de negocio de Inscripción:
 * - Un estudiante se puede inscribir en alguno de los cursos
 **/

class Course {
  #id = 0;
  #title = 'No title'; // Default title
  #chapters = [];
  #duration = 0;

  static listedCourses = [];

  constructor(title = 'No title', chapters = []) {
    this.#title = title;
    this.#chapters = chapters;
  }

  // Setter and getter for the title

  set id(value) {
    this.#id = value;
  }

  get id() {
    return this.#id;
  }

  set title(value) {
    this.#title = value;
  }

  get title() {
    return this.#title;
  }

  // Setter and getter for the chapters
  set chapters(value) {
    this.#chapters = value;
  }

  get chapters() {
    return this.#chapters;
  }

  // Calculate the total duration based on the chapters
  get duration() {
    this.#duration = this.#chapters.reduce(
      (total, chapter) => total + chapter.duration,
      0
    );
    return this.#duration;
  }
}

module.exports = Course;
