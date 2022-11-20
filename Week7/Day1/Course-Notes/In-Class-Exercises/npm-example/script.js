// const slugify = require("slugify");

// console.log(slugify("My new website", "_"));

const axios = require("axios");

async function getUsers() {
    try {
        const usersApi = await axios.get("https://jsonplaceholder.typicode.com/users");
        if (usersApi.status === 200) {
            console.log(usersApi.data);
        }
    } catch (error) {
        console.log(error);
    }
}

getUsers();
