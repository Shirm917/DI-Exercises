// Write a Javascript function that takes a parameter: myAge
// In the function, return the age of my mum (my mum is twice my age)
function age (myAge) {
    const momAge = myAge * 2;
    return momAge;
}
// Call the function
age();
// In the global scope, console.log the result of the function
console.log(age(4));
console.log(age(6));
console.log(age(44));
