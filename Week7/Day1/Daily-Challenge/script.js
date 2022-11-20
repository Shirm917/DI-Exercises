// Part 1
// Use the exported module in a script.js file
const largeNum = require("./main.js");
// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b
const b = 5;
function sum() {
    // console.log(b + largeNum.largeNumber);
    return(b + largeNum.largeNumber);
}

// sum();

// Part 2
// In the script.js file create a server using the http module (require('http')).
const http = require("http");
// Create a server instance and bind it at port 3000. Therefore your server should run on http://localhost:3000/. When the server run, you should console.log("I'm listening") in the terminal.
// Set the response header to res.setHeader('Content-Type', 'text/html')(look at this tutorial- Part named “Serving HTML)
// Respond (res.end) with a HTML paragraph saying "My Module is <result from Part I>", and an HTML <h1> saying “Hi there at the frontend”
const host = "localhost";
const port = 3000;
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.write("My Module is " + sum());
    res.write(`<html><body><h1>Hi there at the frontend</h1></body></html>`);
    res.end();
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log("I'm listening");
})

// Part 3
// In the main.js, create a function that returns the current date and time. Export the module.
// Use the exported module in a script.js file.
const currentDateAndTime = require("./main.js");
// Create a server with http and set the response header to 'text/html'. Respond with an HTML paragraph that outputs the current date and time from the exported module.
// Your server should run on http://localhost:8080/
const port2 = 8080;
const requestListener2 = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.end(`<html><body><p>The date and time are currently: ${currentDateAndTime.currentDateAndTime()}</p></body></html>`);
}
const server2 = http.createServer(requestListener2);
server2.listen(port2, host, () => {
    console.log("I'm listening");
});

