// Exercise 3

// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
const resolve = Promise.resolve(3);

resolve.then(result => console.log(result));
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const reject = Promise.reject("Boo!");

reject.catch(result => console.log(result));