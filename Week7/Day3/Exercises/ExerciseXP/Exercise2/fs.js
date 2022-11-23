// Exercise 2
// Instructions
// Create an fs.js file, and use the Node js File System to create a new text file and write to it.

const fs = require("fs");

fs.writeFile("data.txt", "Hello, I am writing here!", err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Writing complete");
    }
});

// Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)

fs.appendFile("data.txt", "\n" + "Hey, I am adding some text here!", err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Appending complete");
    }
})

// Use the Node js File System to delete the file.

fs.unlink("data.txt", err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Deleting complete");
    }
})