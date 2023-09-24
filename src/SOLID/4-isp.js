//Interface segregation principle
//this principle states that any class should be forced to implement interfaces or methods that it will not use.

class Product {
  getDetails() {
    //get details implementation
  }

  displayInFrontend() {}
}

//no class is forced to use methods they don't need.
class PhysicalProduct extends Product {
  saveToDb() {}
}

class DigitalProducts extends Product {
  //the digitalProduct inherits all method
}
