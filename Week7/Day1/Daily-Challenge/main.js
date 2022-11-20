// Daily Challenge 
// Instructions
// Part 1
// Create a file named main.js that contains a variable const largeNumber = 356; and export the module.
const largeNumber = 356;
// Use the exported module in a script.js file.
module.exports = {
    largeNumber,
    currentDateAndTime
};
// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b

// Part 3
// In the main.js, create a function that returns the current date and time. Export the module.
// Use the exported module in a script.js file.
function currentDateAndTime() {
    return new Date();
}

// added it to module.exports in part 1


