// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops.
// Do this Daily Challenge by youself, without looking at the answers on the internet.

// One loop

for (let i = 1; i <= 6; i++) {
    let symbol = "* ";
    let lines = symbol.repeat(i);
    console.log(lines);
}

// Nested for loops

for (let i = 1; i <=6; i++) {
    for (let j = 6; j >= 6; j--) {
       let symbol = "* ";
       let lines = symbol.repeat(i);
       console.log(lines);
    }
}