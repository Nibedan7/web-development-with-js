class Person {
  constructor(name = 'Unknown', age = 0) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Instantiate a Person object with default values
const person1 = new Person();

// Call the getDetails method
console.log(person1.getDetails()); // Output: Name: Unknown, Age: 0

// Instantiate a Person object with custom values
const person2 = new Person('John', 30);

// Call the getDetails method
console.log(person2.getDetails()); // Output: Name: John, Age: 30
