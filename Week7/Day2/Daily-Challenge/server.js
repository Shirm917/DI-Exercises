// Daily Challenge
// Instructions
// Use Express to create a few routes:
// The route /aboutMe/:hobby: displays the name of one hobby (ie. the value of the route parameter).
// If the parameter is not a string (ie. numbers or else), set the status to 404.
// The route /pic : displays an HTML file with a picture of your choice.
// The route /form : displays an HTML file.
// Requirements:
// The HTML file must be in the public folder.
// The HTML file must contain a form to contact you.
// The form must contain the inputs email and message. (add some HTML form validations)
// Output:
// You should get the data and display it on the route /formData.
// For example, “john@gmail.com sent you a message “Love your new website”.

const express = require("express");
const app = express();
const bp = require("body-parser")

app.get("/aboutMe/:hobby", (req,res) => {
    const {hobby} = req.params;
    if (typeof(hobby) !== "string") {
        res.status(404).send("Not a string!");
    } else {
        res.send(hobby);
    }
})

app.get("/pic", (req,res) => {
    res.setHeader("Content-Type", "text/html");
    res.send(`<html><body><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*" alt="cute dog"></body></html>`)
})

app.use("/form", express.static(__dirname + "/public"));

app.listen(3000, () => {
    console.log("Listening...");
})

app.use(bp.urlencoded({extended: true}));
app.post("/formdata", (req,res) => {
    res.send(`${req.body.firstname} ${req.body.lastname} with the email ${req.body.email} sent you a message that says ${req.body.message}.`);
})