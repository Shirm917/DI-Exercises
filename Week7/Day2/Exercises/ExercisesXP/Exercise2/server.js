// Exercise 2
// Instructions
// Create a server file, name it - server.js
// In this file, use http to create a server. Send the below Javascript Object to the browser:
// Hint : use JSON.
// 3. Your server should run on http://localhost:8080/

const http = require("http");
const {user} = require("./module.js");

const server = http.createServer((req,res) => {
    res.end(JSON.stringify(user));
});

server.listen(8080, () => {
    console.log("Listening...");
});