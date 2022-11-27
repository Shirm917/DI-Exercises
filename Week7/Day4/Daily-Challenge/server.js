const express = require("express");
const app = express();
const fs = require("fs");

app.listen(3000, () => {
    console.log("Listening...");
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", express.static(__dirname + "/public"));

app.post("/register", (req,res) => {
    const username = req.body.user;
    const password = req.body.pass;
    const userMessages = {
        registered: "Hello Your account is now created!",
        userAndPassExists: "Username and Password already exist",
        userExists: "Username already exists",
        passExists: "Password already exists"
    }

    fs.readFile("usersData.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            fs.writeFile("usersData.json", JSON.stringify(req.body), err => {
                if (err) {
                    console.log(err);
                    return;
                }
            })
            return;
        }
        const userData = JSON.parse(data);
        if(userData.user === username && userData.pass === password) {
            res.send(JSON.stringify(userMessages.userAndPassExists));
        } else if (userData.user === username) {
            res.send(JSON.stringify(userMessages.userExists));
        } else if (userData.pass === password) {
            res.send(JSON.stringify(userMessages.passExists));
        } else {
            fs.writeFile("usersData.json", JSON.stringify(req.body), err => {
                if (err) {
                    console.log(err);
                    return;
                }    
            })

            res.send(JSON.stringify(userMessages.registered));
        }
    })
})

app.post("/login", (req,res) => {
    const username = req.body.user;
    const password = req.body.pass;
    const userMessages = {
        login: `Hi ${username} welcome back again!`,
        usernameNotRegistered: "Username not registered",
        passNotRegistered: "Password is incorrect",
    }
    fs.readFile("usersData.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const userData = JSON.parse(data);
        if(userData.user === username && userData.pass === password) {
            res.send(JSON.stringify(userMessages.login));
        } else if (userData.user !== username) {
            res.send(JSON.stringify(userMessages.usernameNotRegistered));
        } else if (userData.pass !== password) {
            res.send(JSON.stringify(userMessages.passNotRegistered));
        }
    })
})


