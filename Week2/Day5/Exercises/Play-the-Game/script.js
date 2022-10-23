// Part 1 
// Now let’s create the function:
// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).
// If the answer is false, alert “No problem, Goodbye”.
// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :
// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.
let userNum;
let guesses = 0;
function playTheGame() {
    const question = confirm("Would you like to play the game?");
    if (question === false) {
        alert("No problem, Goodbye");
        return;
    } else {
        computerNumber = Math.round(Math.random() * 10);
        guesses += 1;
    }
    do {
        userNum = Number(prompt("Enter a number between 0 and 10"));
    } while (isNaN(userNum) || userNum < 0 || userNum > 10); 
    compareNumbers(userNum,computerNumber);
}

// Part 2
// Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber
// The point of this function is to check if the userNumber is the same as the computerNumber:
// If userNumber is equal to computerNumber, alert “WINNER” and stop the game.
// If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).
// If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).
// If the user guessed more than 3 times, alert “out of chances” and exit the function.
function compareNumbers(userNumber,computerNumber) {
    while (userNumber !== computerNumber) {
        if (guesses > 3) {
            alert("out of chances");
            return;
        } else if (userNumber < computerNumber) {
            alert("Your number is smaller then the computer's, guess again")
            guesses += 1;
        } else if (userNumber > computerNumber) {
            alert("Your number is bigger then the computer's, guess again")
            guesses += 1;
        }
        userNumber = Number(prompt("New Number please"));
    }
    if (userNumber === computerNumber) {
        alert("Winner");
    } 
}



// First function before I did the bonus
// function playTheGame() {
//     const question = confirm("Would you like to play the game?");
//     if (question === false) {
//         alert("No problem, Goodbye");
//         return;
//     } 
//     userNum = Number(prompt("Enter a number between 0 and 10"));
//     if (isNaN(userNum)) {
//         alert("Sorry not a number, Goodbye");
//         return;
//     } else if (userNum < 0 || userNum > 10) {
//         alert("Sorry it's not a good number, Goodbye");
//         return;
//     } else {
//         computerNumber = Math.round(Math.random() * 10);
//         guesses += 1;
//     }
//     compareNumbers(userNum,computerNumber);
// }