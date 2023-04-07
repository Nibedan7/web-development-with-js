// Logging variable before and after declaration
console.log(x); // Output: undefined
console.log(y); // Output: undefined
console.log(z); // Output: ReferenceError: Cannot access 'z' before initialization

// Block scope with let
{
  let x = 10;
  console.log(x); // Output: 10
}

// Block scope with var
{
  var y = 20;
  console.log(y); // Output: 20
}

// Block scope with const
{
  const z = 30;
  console.log(z); // Output: 30
}
