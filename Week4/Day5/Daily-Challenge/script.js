// Daily Challenge
// nstructions
// Create a function that:
// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.

function anagramDetector(wordOne, wordTwo) {
    const regex = /\s/g;
    const word1 = wordOne.replace(regex, "");
    const word2 = wordTwo.replace(regex, "");
    const newWord = word1.toLowerCase().split("").sort().toString();
    const newWord2 = word2.toLowerCase().split("").sort().toString();
    if (newWord === newWord2) {
        return true;
    } else {
        return false;
    }
    
}

console.log(anagramDetector("School master", "The classroom"));
console.log(anagramDetector("The Morse Code", "here come    dots"));
console.log(anagramDetector("Astronomer", "Moon starer"));
