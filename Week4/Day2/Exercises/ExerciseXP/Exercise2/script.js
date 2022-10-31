// Exercise 2
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// First, use function declaration and invoke it.
function convertToGrams(kilograms) {
    const grams = kilograms * 1000;
    return grams;
}
console.log(convertToGrams(1));
console.log(convertToGrams(200));
console.log(convertToGrams(40));
// Then, use function expression and invoke it.
const convertToGrams2 = (kilograms) => {
    const grams = kilograms * 1000;
    return grams;
}
console.log(convertToGrams2(1));
console.log(convertToGrams2(200));
console.log(convertToGrams2(40));
// Write in a one line comment, the difference between function declaration and function expression.
// function declaration is when you declare a function normally using the function keyword and function expression is when you assign a function to a variable, the fucntion is expressed through the variable.
// Finally, use a one line arrow function and invoke it.

const convertToGrams3 = (kilograms) => kilograms * 1000;

console.log(convertToGrams3(1));
console.log(convertToGrams3(200));
console.log(convertToGrams3(40));