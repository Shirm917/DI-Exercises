// Daily Challenge 1

// Instructions
// Use Promise.all
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.
const promiseOne = new Promise((resolve, reject) => {
setTimeout(resolve, 1000, "Does this work?")
});
const promiseTwo = Promise.resolve("Yes it does");
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "At least I think so, ummmm...")
});

function promises([promise1, promise2, promise3]) {
    Promise.all([promise1, promise2, promise3])
    .then(elements => console.log(elements))
    .catch(err => console.log("Uh oh, something was rejected"));
}

promises([promiseOne, promiseTwo, promiseThree]);
// Explain in a comment how Promise.all work and why you receive this output.
// Promise.all takes in promises and it return a single promise, so Promise.all here
// takes in three promises and return them in one promise in an array
// The promise returns fufilled when all of the promises it took in return fufilled.
// When one of the promises rejects the promise rejects.