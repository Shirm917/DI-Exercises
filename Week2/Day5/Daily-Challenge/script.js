// Instructions
// Have you heard the infamous song “99 Bottles of Beer?”
// In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.
let bottles = 0;
let number = 0;
function bottlesOfBeer () {
    bottles = prompt("How many bottles of beer should we start with?");
    for (let i = bottles; i >= 0; i -= number) {
        if (i === 1) {
            console.log(`${i} bottle of beer on the wall, ${i} bottle of beer, Take 1 down, pass it around, ${i -1} bottles of beer on the wall`);
        } else if (number > i) {
            console.log(`${i} bottles of beer on the wall, ${i} bottles of beer, Take ${i} down, pass them around, 0 bottles of beer on the wall`);
        } else if (i > 1) {
            number += 1;
            console.log(`${i} bottles of beer on the wall, ${i} bottles of beer, Take ${number} down, pass them around, ${i - number} bottles of beer on the wall`);
        } 
    }
    console.log("0 bottles of beer on the wall");
}

bottlesOfBeer();