function greet(name) {
  return new Promise((resolve, reject) => {
    if (typeof name === 'string') {
      resolve(`Hello, ${name}!`);
    } else {
      reject('Invalid input');
    }
  });
}
greet('Mithun')
  .then((message) => console.log(message)) // prints "Hello, Mithun!"
  .catch((error) => console.error(error));
