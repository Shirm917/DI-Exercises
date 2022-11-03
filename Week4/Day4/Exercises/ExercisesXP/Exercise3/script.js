// Exercise 3
// Instructions
// Using this object:
 const users = { 
    user1: 18273, 
    user2: 92833, 
    user3: 90315 
}

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
function usersArray() {
    return Object.entries(users);
}

usersArray();

// Modify the outcome of part 1, by multipling the user’s ID by 2.
function usersArray2() {
    const usersArr = [];
    for (let [key, value] of Object.entries(users)) {
        const doubleValue = value * 2;
        usersArr.push([key, doubleValue]);
    }
    console.log(usersArr);
}

usersArray2();

// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]