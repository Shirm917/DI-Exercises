// Exercise 1
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
// result will be ["bread", "carrot", "potato", "chicken", "apple", "orange"];
console.log(result);

// ------2------
const country = "USA";
// ["U", "S", "A"];
console.log([...country]);

// ------Bonus------
let newArray = [...[,,]];
// [",,"]; I thought it was this and it's actually [undefined, undefined] and 
// it's because ,, needs quotes around it because they're a string, 
// if you did [...[",,"]] new array would [",,"]
console.log(newArray);