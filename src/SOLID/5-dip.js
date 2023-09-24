//Dependency Inversion Principle
// This principle states that high level modules should not depend on low level modules, both should depend on abstractions in addition, abstractions should not depend on details, details should depend on abstractions
class MySQLConection {
  connect() {}
}

class PostgreSQLConection {
  connect() {}
}

//here it does not depend on
class PasswordReminder {
  constructor(dbConections) {
    this.dbConections = dbConnection;
  }
}
