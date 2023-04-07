function Student(name) {
  this.name = name;
}

Student.prototype.printDetails = function() {
  console.log(`Hello, my name is ${this.name}`);
}

// Instantiate a Student object with the name "Mithun"
const student1 = new Student('Mithun');

// Call the printDetails method
student1.printDetails(); // Output: Hello, my name is Mithun
