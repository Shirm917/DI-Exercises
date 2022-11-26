const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));

app.listen(3000, () => {
    console.log("Listening...");
});

app.use("/", express.static(__dirname + "/public"));

const shoppingList = [];
app.post("/shoppingList", (req,res) => {
    res.setHeader("Content-Type", "text/html");
    const {item, amount} = req.body;
    shoppingList.push(`${item}:${amount}`);
    res.send(`<html><body><div><p>${shoppingList.join("<br>")}</p></div><br><button><a href="/index.html">Go Back</a></button></body></html>`);
})