// Daily Challenge 2
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
// Instructions
// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)
function toJs() {
    const jsObject = JSON.parse(morse);
    const object = new Promise((resolve, reject) => {
        if (Object.keys(jsObject).length === 0) {
            reject("Object is empty");
        } else {
            resolve(jsObject);
        }
    })
    return object;
}
// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object
function toMorse(morseJS) {
    const promptUser = prompt("Please write a word or a sentence").toLowerCase();
    const promptAnswer = promptUser.replace(/\s/g, "").split("");
    const morseArray = [];
    const answer = new Promise((resolve, reject) => {
        if (promptAnswer.every(element => Object.keys(morseJS).includes(element))) {
            promptAnswer.forEach(element => {
            morseArray.push(morseJS[element]);
            resolve(morseArray);
            });
        } else {
            reject("Word or sentence contains characters that don't exist");
        }
    })
    return answer;
}

// The third function called joinWords(morseTranslation), takes one argument: the morse translation array
// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
function joinWords(morseTranslation) {
    const sectionElement = document.querySelector("section");
    morseTranslation.forEach(element => {
        console.log(element);
        const paraElement = document.createElement("p");
        const morseText = document.createTextNode(element);
        paraElement.append(morseText);
        sectionElement.append(paraElement);
    })
}
// Chain the three functions.
toJs()
    .then(result => toMorse(result))
    .then(morseArr => joinWords(morseArr))
    .catch(err => console.log(err));