// Exercise 4 
// Instructions 
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((element, i, arr) => {
    console.log(`${i + 1}# choice is ${arr[i]}`);
});

// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
const checkViolet = colors.some((element, i, arr) => { return (arr[i] === "Violet"); });

function check() {
    if (checkViolet) {
        console.log("Yeah");
    } else {
        console.log("No...");
    }
}

check();


