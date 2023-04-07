function addNumbers(num1, num2) {
    // Variable declaration using var keyword
    var sum;
  
    // Logging variable before assignment
    console.log(sum); // Output: undefined
  
    // Assigning value to the variable
    sum = num1 + num2;
  
    // Return sum
    return sum;
  }
  
  // Example usage
  const result = addNumbers(5, 7);
  console.log(result); // Output: 12
  