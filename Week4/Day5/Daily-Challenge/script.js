// Daily Challenge
// nstructions
// Create a function that:
// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.

function anagramDetector(wordOne, wordTwo) {
    const regex = /\s/g;
    for (let i = 0; i < wordOne.length; i++) {
       const word1 = wordTwo.replace(regex, "");
       const word2 = wordTwo.replace(regex, "");
       if (wordOne.toLowerCase().indexOf(wordTwo[i].toLowerCase()) !== -1) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(anagramDetector("School master", "The classroom"));
console.log(anagramDetector("The Morse Code", "here come    dots"));
console.log(anagramDetector("Astronomer", "Moon starer"));


