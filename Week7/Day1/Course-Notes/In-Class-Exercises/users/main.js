// 1. require the function from users.js 
// 2. call the function
// 3. console.log the data

const getUsers = require("./users.js"); // returns an object
console.log(getUsers.fetchUsers().then(obj => console.log(obj)));

