function doubleArray(arr, callback) {
  const doubledArray = arr.map(callback);
  return doubledArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4];
const doubledArray = doubleArray(originalArray, (num) => num * 2);
console.log(doubledArray); // Output: [2, 4, 6, 8]
