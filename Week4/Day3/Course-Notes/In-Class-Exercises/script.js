// Exercise 1

const famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
        age: 100
    }
]

// Using the array above, use the map method, to create a new array that contains only the name of the people
// Use the map method, to create a new array, that contains objects, each object contains the name of the actor, and it's job
// BONUS: Using the array you get from question2, use the for each method, to add the names and the job of the actors on the DOM (in a paragraph, appended to a div with an id "container")
const names = famousPeople.map((element) => element["name"]);
const objects = famousPeople.map(element => (
    {
        name: element["name"],
        job: element["job"]
    }
));

objects.forEach((element) => {
    const paragraph = document.createElement("p");
    const text = document.createTextNode(`${element["name"]}, ${element["job"]}`);
    paragraph.append(text);
    document.body.prepend(paragraph);
})

// Exercise 2

const studentsFootball = [
 {name: 'Rich', score: 33}, 
 {name: 'Peter', score: 55}
];

const studentsNew = studentsFootball.map((element) => ({ name: element["name"], score: element["score"], isAboveAverage: (element["score"] > 50)}));


// Create a new array of objects, containing the name, score and isAboveAverage if the students has a score bigger that 50, the key isAboveAverage will be true, else the key isAboveAverage will be false. Use ternary operator
// Result

const studentsNew2 = [
    {name: 'Rich', score: 33, isAboveAverage : false}, 
    {name: 'Peter', score: 55, isAboveAverage : true}
];

// Exercise 1: create a new array that filters only the positive value
const numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

const positiveNums = numbers.filter(element => element >= 0);

// Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared in Star Trek: The Next Generation. Use filter() to filter the array of characters below

const characters = [
   { name: 'James T. Kirk', series: ['Star Trek'] },
   { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
   { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
   { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
]; 

const nextGen = characters.filter(element => element["series"].includes("Star Trek: The Next Generation"));

// Exercise 3 NOT MANDATORY - send me the result by slack
// Use the filter method to create an array without duplicates. The result should be ["blue","red","yellow"]

const colors = ["blue", "red", "red", "blue", "yellow"]

const noRepeats = colors.filter((element, i, arr) => arr.indexOf(element) === i);

// Exercise 1
// Find the sum of the score of the students using reduce

const students = [
 	{name: 'Rich', score: 33}, 
 	{name: 'Peter', score: 55},
 	{name: 'John', score: 75}
];

const sum = students.reduce((number, element)=> {
    const total = number + element["score"];
    return total;
}, 0);

// Exercise 2
// Turn an array of voter objects into a count of how many people voted

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

// just using reduce
const voted = voters.reduce((number, element) => votes = number + element["voted"], 0);

// chaining filter and reduce
const voted2 = voters
        .filter(element => element["voted"] )
        .reduce((number, element) => {
    const votes2 = number + element["voted"];
    return votes2;
}, 0);
