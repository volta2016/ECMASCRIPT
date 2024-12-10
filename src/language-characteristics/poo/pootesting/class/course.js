/**
 Clase: Curso
 Reglas de negocio:
 - Debe tener estas propiedades: título, lista de capitulos, duración especificada en minutos
 - Cada capitulo debe tener el tema y la duración
 - La duración del curso sera la sumatoria de todo la duración independiente de cada capítulo.
 *
 * Lógica de negocio del Curso:
 * - Debe existir una función para guardar un curso
 * - Debe existir una función para buscar un curso por ID
 * Lógica de negocio de Inscripción:
 * - Un estudiante se puede inscribir en alguno de los cursos
 **/

class Course {
  #id = 0;
  #title = 'No title';
  #chapters = [{ topic: 'No topic', duration: 0 }];
  #duration = 0;
  static listedCourses = [];
  constructor() {
    this.#chapters = [];
  }

  set title(value) {
    this.#title = value;
  }

  get title() {
    return (this.#title = this.title);
  }
  set chapters(value) {
    this.#chapters = value;
  }

  get chapters() {
    return this.#chapters;
  }

  get duration() {
    this.#duration = 0;
    this.#chapters.forEach((chapter) => {
      this.#duration = this.#duration + chapter.duration;
    });
    return this.#duration;
  }
}
