// Exercise 1 
const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
people.shift();
console.log(people);

// Write code to replace “James” to “Jason”.
people[2] = "Jason";
console.log(people);

// Write code to add your name to the end of the people array.
people.push("Shir");
console.log(people);

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
const indexMary = people.indexOf("Mary");
console.log(indexMary);

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
const newArr = people.slice(1,3);
console.log(newArr);

// Write code that gives the index of “Foo”. Why does it return -1 ?
const indexFoo = people.indexOf("Foo");
console.log(indexFoo); //it returns -1 because "Foo" is not in the array

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
const last = people[people.length - 1];
console.log(last);


// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.
for (let i = 0; i < people.length; i++) {
    if (people[i] === "Jason") {
        break;
    } else {
        console.log(people[i]);
    }
}


// Exercise 2 
// Create an array called colors where the value is a list of your five favorite colors.
const colors = ["orange", "maroon", "blue", "dark purple", "black"];

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++) {
    const number = colors.indexOf(colors[i]) + 1;
    console.log(`My #${number} choice is ${colors[i]}`);
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
const suffixes = ["1st", "2nd", "3rd", "4th", "5th"];
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${suffixes[i]} choice is ${colors[i]}`);
}

// Exercise 4 

// Copy and paste the above object to your Javascript file.
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log the number of floors in the building.
console.log(building["numberOfFloors"]);

// Console.log how many apartments are on the floors 1 and 3.
console.log(building["numberOfAptByFloor"]["firstFloor"]);
console.log(building["numberOfAptByFloor"]["thirdFloor"]);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building["nameOfTenants"][1]);
console.log(building["numberOfRoomsAndRent"]["dan"][0]);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let sarahRent = building["numberOfRoomsAndRent"]["sarah"][1];
let davidRent = building["numberOfRoomsAndRent"]["david"][1];
let danRent = building["numberOfRoomsAndRent"]["dan"][1];
if (sarahRent + davidRent > danRent) {
    davidRent = 1200;
}
console.log(davidRent);

// Exercise 5

// Create an object called family with a few key value pairs.
const family = {
    siblings: 5,
    brothers: 4,
    sisters: 1,
    countriesIn: ["United States", "Israel", "Ireland"],
}

// Using a for in loop, console.log the keys of the object.
for ( const keys in family) {
    console.log(`${keys}`);
}

// Using a for in loop, console.log the values of the object.
for ( const values in family) {
    console.log(`${family[values]}`);
}

// Exercise 6 

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
const detailsArr = Object.entries(details);
let sentence = "";
for (let i = 0; i < detailsArr.length; i++) {
    for (let j = 0; j <= i + 1; j++) {
        if (j === 2) {
            break;
        } else {
        sentence = sentence + detailsArr[i][j] + " ";
        }
    } 
}
console.log(sentence);

// Exercise 7 

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
names.sort();
let group = "";
for (let i = 0; i < names.length; i++) {   
     group = group + names[i][0];
}
// Console.log the name of their secret society. The output should be “ABJKPS”
console.log(group);
