// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
let symbol = "*"
let longestWord = 0;
let whiteSpace= " ";
// Prompting for the words
const words = prompt("Please write several words seperated by commas");
// Putting the words into an array
const array = words.split(",");
// Iterating through the array to get the longest word length
for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestWord) {
        longestWord = array[i].length;
    }
}
console.log(symbol.repeat(longestWord + 4)); // Top line
// A function to create the frame and put the words in
function stars() {
    for (let i = 0; i < array.length; i++) {
        let spaces = whiteSpace.repeat(longestWord - array[i].length);
        console.log(symbol + " " + array[i] + spaces + " " + symbol);
    }
}
stars(); // Calling the function so the middle appears
console.log(symbol.repeat(longestWord + 4)); // Bottom line
