// Exercise 1 
// Instructions
// Create a text file and write something inside (example: ‘Some Text To See’)
// Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal
const fs = require("fs");

fs.readFile("example.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});