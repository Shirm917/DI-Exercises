// Mini Project - RSS Feed 

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bp = require("body-parser");
const dotenv = require("dotenv");
const Parser = require('rss-parser');

const parser = new Parser();
const app = express();
dotenv.config();



app.use(cors());
app.use(bp.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
});

app.get("/", (req,res) => {
    async function feed() {
       let feed = await parser.parseURL('https://www.thefactsite.com/feed/')
      .then(result => result.items)
      .then(data => res.render("pages/index", {content: data, items: data}))
      .catch(err => res.status(404).json({msg: err.message}))
    }
    feed();
})

app.get("/search", (req,res) => {
    async function feed() {
       let feed = await parser.parseURL('https://www.thefactsite.com/feed/')
      .then(result => result.items)
      .then(data => res.render("pages/search", {content: [], items: data}))
      .catch(err => res.status(404).json({msg: err.message}))
    }
    feed();
});

app.post("/search/title", (req,res) => {
    const {title} = req.body;
    let feedItems;
    async function test() {
        let feed = await parser.parseURL("https://www.thefactsite.com/feed/")
        .then(result => {
            feedItems = result.items;
            const titlePosts = result.items.filter(post => {
                const lowerCaseTitle = post.title.toLowerCase();
                return lowerCaseTitle.includes(title);
            });
            return titlePosts;
        })
        .then(data => res.render("pages/search", {content: data, items: feedItems}))
        .catch(err => res.status(404).json({msg: err.message}))
    }
    test()
});

app.post("/search/category", (req,res) => {
    const {category} = req.body;
    let feedItems;
    async function test() {
        let feed = await parser.parseURL("https://www.thefactsite.com/feed/")
        .then(result => {
            feedItems = result.items;
            const categoryPosts = result.items.filter(post => {
                return post.categories.includes(category);
            });
            return categoryPosts;
        })
        .then(data => res.render("pages/search", {content: data, items: feedItems}))
        .catch(err => res.status(404).json({msg: err.message}))
    }
    test()
});
