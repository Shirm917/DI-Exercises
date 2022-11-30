// Daily Challenge
// Instructions :
// You will send data to an Express server with React and display it.
// Part I
// Create a server folder, containing a server.js file. Create a GET request to the /api/hello route that sends the message “Hello From Express”.
// Create a React App in a client folder. In the App.js file, use the componentDidMount() method and async await to fetch the message from the /api/hello route, and display it as a header.
// Part II
// In the App.js file create a form. You will type something in the input field and submit the form. Use async await to POST the input value to the Express server.
// In the server.js file, create a POST request, that will call the /api/world route. This request will retrieve the body and respond with a message “I received your POST request. This is what you sent me: <value of the input field>“
// The message will also be displayed right below the input field:
// You will also see the message that you sent from the client, using a console.log on the request body in the POST Express route:

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3001, () => {
    console.log("Listening...");
});

app.get("/api/hello", (req,res) => {
    res.json("Hello From Express");
});

app.post("/api/world", (req,res) => {
    const {value} = req.body;
    console.log(req.body);
    res.json(`I received your POST request. This is what you sent me: ${value}`)
})