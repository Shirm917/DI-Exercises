const express = require("express");
const app = express();
const {products} = require("./module/module.js");

app.use("/", express.static(__dirname + "/public"));

app.listen(8000, () => {
    console.log("Listening...");
});

app.get("/api/products", (req,res) => {
    res.json(products);
});