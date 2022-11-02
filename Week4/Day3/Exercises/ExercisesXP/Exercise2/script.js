// Exercise 2
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//  Using the map() method, push into a new array the firstname of the user and a welcome message.

const welcomeStudents = users.map(element => "Hello " + element["firstName"]);

// Using the filter() method, create a new array, containing only the Full Stack Residents.

const fullStack = users.filter(element => element["role"] === "Full Stack Resident");

// Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

const lastNamesOfFullStack = users
                            .filter(element => element["role"] === "Full Stack Resident")
                            .map(element => element["lastName"]);