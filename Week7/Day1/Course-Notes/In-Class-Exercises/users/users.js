// 1. create a function
// 2. fetch the users https://jsonplaceholder.typicode.com/users
// 3. return the data - users json object
// 4. export this function with module.exports

async function fetchUsers() {
    const usersApi = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersObj = await usersApi.json();
    return usersObj;
}

module.exports = {
    fetchUsers
};