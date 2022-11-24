// In Class Exercises 2

const fs = require("fs");
console.log(1);
// Reading a file - asynchronous
fs.readFile("./name", "utf-8", (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// Reading a file - synchronous
const f= fs.readFileSync("./name", "utf-8");
console.log(f);

console.log(2);

// Append to a file - asynchronous 
// Appended multiple things to two different files
let obj = {
    name: "John",
    age: 25
};
fs.appendFile("./user", JSON.stringify(obj), err => {
    if (err) {
        console.log(err);
    }
});

// Write to a file - asynchronous 
fs.writeFile("./name1", "123456", err => {
    if (err) {
        console.log(err);
    }
});




