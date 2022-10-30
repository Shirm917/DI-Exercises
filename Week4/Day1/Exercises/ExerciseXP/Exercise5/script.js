// Exercise 5
// Instructions
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
colors.forEach((element, i, arr) => {
    element === "Orange" ? console.log(`${i + 1}${ordinal[0]} choice is ${element}`) : console.log(`${i + 1}${ordinal[i + 1]} choice is ${element}`);
});
