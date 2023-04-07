function manipulateString(str) {
  const manipulatedStr = str.toUpperCase();
  function logString() {
    console.log(`The manipulated string is: ${manipulatedStr}`);
  }
  return logString;
}

// Example usage:
const logManipulatedString = manipulateString('hello, world');
logManipulatedString(); // Output: "The manipulated string is: HELLO, WORLD"
