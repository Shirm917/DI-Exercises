// In Class Exercises

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const {db} = require("./data/products.js");

dotenv.config();

// check if it's connected
// db.raw("select 1")
// .then(result => console.log(result))
// .catch(err => console.log((err)));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", express.static(__dirname + "/public"))

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
});

//CRUD 

// Delete - DELETE - delete a product
app.delete("/api/products/:id", (req,res) => {
    const {id} = req.params;
    db("products")
    .where({id})
    .del()
    .returning('*')
    .then(rows => res.json(rows))
    .catch(err => {
        console.log(err);
        res.status(404).json({msg: err.message});
    })
})

// Update - PUT - update/modify a product
app.put("/api/products/:id", (req,res) => {
    const {id} = req.params;
    const {name, price} = req.body;
    db("products")
    .update({
        name,
        price
    })
    .where({id})
    .returning('*')
    .then(rows => res.json(rows))
    .catch(err => {
        console.log(err);
        res.status(404).json({msg: err.message});
    })
})

// Create - POST - create a new product
app.post("/api/products", (req,res) => {
    const {name, price} = req.body;
    db("products")
    .insert({
        name,
        price
    })
    .returning('*')
    .then(rows => res.json(rows))
    .catch(err => {
        console.log(err);
        res.status(404).json({msg: err.message});
    })
})

// Read - GET - get all products
app.get("/api/products", (req,res) => {
    db("products")
    .select("id", "name", "price")
    .then(rows => res.json(rows))
    .catch(err => {
        console.log(err);
        res.status(404).json({msg: err.message});
    })
});

// Read - GET - search for products
app.get("/api/search", (req,res) => {
    const {q} = req.query;
    db("products")
    .select("id", "name", "price")
    .whereILike("name", `${q}%`)
    .then(rows => res.json(rows))
    .catch(err => {
        console.log(err);
        res.status(404).json({msg: err.message})
    })
})


// Read - GET - get one product with params 
app.get("/api/products/:id", (req,res) => {
    const {id} = req.params;
    db("products")
    .select("id", "name", "price")
    .where({id})
    .then(rows => res.json(rows))
    .catch(err => {
        console.log(err);
        res.status(404).json({msg: err.message});
    })
});