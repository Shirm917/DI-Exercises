// ANONYMOUS FUNCTIONS
// Add in your html file a div with an id of container
// Create a self invoking function that takes one parameter the name of the user
// When invoked, the function adds the name of the user in a sentence in the div

(function sayHi(username) {
    const divElement = document.getElementById("container");
    divElement.textContent = `Hi ${username}, have a good day!`;
})("John")

// Exercise on memory
// Exercise 1 : guess what will be console.logged

// function setObj(person) {
//     person.age = 25; 
//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> age would now be 25 as you're replacing whereever you see person with personObj1
// // and so the function now does personObj1.age = 25 so the age changes and personObj2 is assigned personObj1
// console.log(personObj2); // -> would be the same as the new personObj1 name is alex is age is 25


// Exercise 2 guess what will be console.logged

function setObj2(person) {
	person = {
        name: 'John',
        age: 50
    };
    
    return person;
}

let personObj3 = {
    name: 'Alex',
    age: 30
};

let personObj4 = setObj2(personObj3);

console.log(personObj3); // -> same as shown 
console.log(personObj4); // -> name is john and age is 50, it's saying that personObj3 is equal to that now and 
// that's what personObj 4 is equal to

// Nested functions
// PART I
// 1. Create a function named starWars that takes no parameter.
// 2. The function should declare a variable characters equal to an empty array
// 3. In the startWars function, create a function named createCharacter. It receives two parameters, the first name and last name of a character. If the character doesn't have a last name, the default should be "Smith" and push it to the characters array.
// 4. In the startWars function, create a function named displayCharacter should display in the body the fullname of the characters,
// 5. Call the createCharacter function a few times inside the starWars function and call the displayCharacter function once
function startWars() {
    const characters = [];
    function createCharacter(firstName, lastName = "Smith") {
        characters.push(` ${firstName} ${lastName} `);
    }
    function displayCharacter() {
        document.body.append(characters);
    }
    createCharacter("John", "Apple");
    createCharacter("Lydia", "Plum");
    createCharacter("John");
    displayCharacter();
}
startWars();

// Second Part 

// 6. Change the starWars function, to take one parameter, the name of the spaceship the characters are in 
// 7. The displayCharacter function should now display in the body the fullname and spaceship of the characters 
// 8. Call the starWars function once with the spaceship "The Devastator", and another times with the spaceship "Republic Attack Cruiser". what happens?
function startWars2(spaceship) {
    const characters = [];
    function createCharacter(firstName, lastName = "Smith") {
        characters.push(` ${firstName} ${lastName}:  ${spaceship} `);
    }
    function displayCharacter() {
        document.body.append(characters);
    }
    createCharacter("John", "Apple");
    createCharacter("Lydia", "Plum");
    createCharacter("John");
    displayCharacter();
}
startWars2("The Devastator");
startWars2("Republic Attack Cruiser");

