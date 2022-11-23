// In Class Exercises

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const {products} = require("./data/products.js");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
});

//CRUD 

// Delete - DELETE - delete a product
app.delete("/api/products/:id", (req,res) => {
    const {id} = req.params;
    const {name, price} = req.body;
    const index = products.findIndex(element => {
        return element.id == id;
    })
    if (index === -1) {
        return res.status(404).json({msg: "not found"});
    }
    products.splice(index, 1);
    res.json(products);
})

// Update - PUT - update/modify a product
app.put("/api/products/:id", (req,res) => {
    const {id} = req.params;
    const {name, price} = req.body;
    const index = products.findIndex(element => {
        return element.id == id;
    })
    if (index === -1) {
        return res.status(404).json({msg: "not found"});
    }
    const updatedProduct = {
        id,
        name,
        price
    }
    products[index] = updatedProduct;
    res.json(products);
})

// Create - POST - create a new product
app.post("/api/products", (req,res) => {
    console.log(req.body);
    const {name, price} = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    res.json(products);
})

// Read - GET - get all products
app.get("/api/products", (req,res) => {
    res.json(products);
});

// Read - GET - search for products
app.get("/api/search", (req,res) => {
    const {q} = req.query;
    const result = products.filter(element => {
        return element.name.toLowerCase().includes(q.toLowerCase());
    })
    if (result.length === 0) {
        res.status(404).json({msg: "not found"});
    }
    res.json(result);
})


// Read - GET - get one product with params 
app.get("/api/products/:id", (req,res) => {
    const {id} = req.params;
    const product = products.find(element => {
        return element.id == id;
    });
    if (!product) {
        return res.status(404).json({msg: "not found"});
    }
    res.json(product);
});