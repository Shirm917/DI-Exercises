// // In class exercises - node.js
// console.log("Hello my first Nodejs App");

// let arr = [1,2,3,4,5,6,7];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], i);
// }

// let obj = {
//     name: "Sally",
//     lastName: "Mark"
// };

// console.log(obj["name"] + " " + obj["lastName"]);

// console.log(__dirname);

// console.log(__filename);

// Connecting files:
// const name = "Mike Taylor";

const greeting = name => {
    console.log(`Hello ${name}, welcome to NodeJs`);
}

// exporting
module.exports = {
    greeting
}