// Exercise 3
// Instructions
// Create a public folder, that contains an HTML file. This HTML file can contain some CSS and some JavaScript (for example a head tag with some classes for styling, and in the body a button with an onClick attribute calling a Javascript function with an alert)
// In a server.js file create your server using express.
// Use your server to get the static HTML file from the public folder
// Your server should run on http://localhost:3000/ to serve the HTML file
const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Listening...");
});

app.use("/", express.static(__dirname + "/public"));