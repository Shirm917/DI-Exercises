// Exercise 3
// Instructions
// Using this array: 

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

const string = epic.reduce((acc, element) => {
    const words = acc + " " + element;
    return words;
})