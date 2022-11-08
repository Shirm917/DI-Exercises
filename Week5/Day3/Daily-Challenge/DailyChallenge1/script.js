// Daily Challenge 1
// Instructions
// 1st Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
function makeAllCaps(array) {
    const arrayCaps = new Promise((resolve, reject) => {
        if (array.every(element => typeof(element) === "string")) {
            resolve(array.map(element => element.toUpperCase()));
        } else {
            reject("Only strings allowed");
        }
    })
    return arrayCaps;
}
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
function sortWords(arr) {
    const sortArray = new Promise((resolve, reject) => {
        if (arr.length > 4) {
            resolve(arr.sort());
        } else {
            reject("Length of array is less than 4");
        }
    })
    return sortArray;
}

makeAllCaps([1, "pear", "banana"])
      .then( arr => sortWords(arr))
      .then( result => console.log(result))
      .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana"])
      .then( arr => sortWords(arr))
      .then( result => console.log(result))
      .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then( arr => sortWords(arr))
      .then( result => console.log(result))
      .catch(error => console.log(error))