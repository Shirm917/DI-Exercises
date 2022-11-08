// Exercise 1
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.

function compareToTen(num) {
    const promise = new Promise((resolve, reject) => {
        if (num < 10) {
            resolve(num);
        } else {
            reject(num);
        }
    }) 
    return promise;
}

compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error, "is greater than 10"));

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error, "is greater than 10"));