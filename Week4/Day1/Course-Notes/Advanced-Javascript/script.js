// Exercise 1 
// Create a function to check the year given by the user
// If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"

function checkYear(year) {
    return (year > 2000 ? "You are in the 21st century" : "You live in the Middle Age");
}

// Exercise 2
// Using arrow function and ternary operator create a calculator that returns the result of the calculus depending on the operator : +, - , * ,
// The function should be able to to take 2 numbers as parameters

const calculator = (a, symbol, b) => symbol === "+" ? a + b : symbol === "-" ? a - b : a * b;