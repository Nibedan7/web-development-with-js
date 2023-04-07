class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

// Instantiate an Employee object
const emp1 = new Employee('John', 'Manager', 100000);

// Call the getSalary method
console.log(emp1.getSalary()); // Output: 100000
