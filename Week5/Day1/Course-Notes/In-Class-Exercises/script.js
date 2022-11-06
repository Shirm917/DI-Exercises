// Parse this JSON string into a JS object
// Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// Create another variable to stringify the JS object. Console.log the variable
// Then use pretty print (look at the lesson)
let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`

// const jsObject = JSON.parse(jsonString);
// const options = Object.values(jsObject["quiz"]["sport"]["q1"]["options"]).forEach(element => 
//     console.log(element)
// );
// const stringifyJsObject = JSON.stringify(jsObject, null, 2);
// console.log(stringifyJsObject);

// Exercise 1: exceptions
// Using the code below:
const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}

console.log("after")
// Which type of error will be thrown ? Look on the different types errors on Google
// type error 
// Is the console.log("after") will be shown on the console ?
// yes because you're catching the error

// Exercise 2
// Write a function called checkEmail that takes one parameter: the email of the user.
// Your function should return "You are signed in". However, if the email doesn't contain @ you should throw the error, "Missing @ in the email."

function checkEmail(userEmail) {
    try {
        if (userEmail.includes("@")) {
            console.log("You are signed in");
        } else {
            throw new Error("Missing @ in the email");
        }
    } catch(err) {
        console.log(err.message);
    }
}

checkEmail("hi@gmail.com");
checkEmail("higmail.com");
