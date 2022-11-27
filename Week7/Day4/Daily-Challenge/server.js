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
   
    fs.readFile("usersData.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            fs.writeFile("usersData.json", JSON.stringify(req.body), err => {
                res.json({msg: "Hello Your account is now created!"});
                if (err) {
                    console.log(err);
                    return;
                }
            })
            return;
        }
        const userData = JSON.parse(data);
        if(userData.user === username && userData.pass === password) {
            res.json({msg: "Username and Password already exist"});
        } else if (userData.user === username) {
            res.json({msg: "Username already exists"});
        } else if (userData.pass === password) {
            res.json({msg: "Password already exists"});
        } else {
            fs.writeFile("usersData.json", JSON.stringify(req.body), err => {
                if (err) {
                    console.log(err);
                    return;
                }    
                res.json({msg: "Hello Your account is now created!"});
            })  
        }
    })
})

app.post("/login", (req,res) => {
    const username = req.body.user;
    const password = req.body.pass;
    
    fs.readFile("usersData.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const userData = JSON.parse(data);
        if(userData.user === username && userData.pass === password) {
            res.json({msg: `Hi ${username} welcome back again!`});
        } else if (userData.user !== username) {
            res.json({msg: "Username not registered"});
        } else if (userData.pass !== password) {
            res.json({msg: "Password is incorrect"});
        }
    })
})


