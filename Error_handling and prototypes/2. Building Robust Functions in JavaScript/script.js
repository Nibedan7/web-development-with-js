function getPerson(person) {
  try {
    if (!person || typeof person !== 'object' || !('name' in person) || !('age' in person)) {
      throw new Error('Invalid parameter type');
    }
    const { name, age } = person;
    return `Name: ${name}, Age: ${age}`;
  } catch (error) {
    return error.message;
  }
}
console.log(getPerson({ name: 'John', age: 30 })); // Output: Name: John, Age: 30
console.log(getPerson({ name: 'Jane' })); // Output: Invalid parameter type
console.log(getPerson(null)); // Output: Invalid parameter type
console.log(getPerson('John,30')); // Output: Invalid parameter type
