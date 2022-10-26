// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)
// Hint: use one of the following events to remove any character that is not a letter
// keyup event
// or keypress event
// or keydown event
// or input event
// Hint : Check out keycodes in Javascript or Regular Expressions

function createInput() {
    const inputElement = document.createElement("input");
    document.body.prepend(inputElement);
    inputElement.setAttribute("type", "text");
}

createInput();

function allowLetter(event) {
    const letters = /^[a-zA-Z]+$/;
    if (!letters.test(event.key)) {
        event.preventDefault();
    }
}


const input = document.body.firstElementChild;
input.addEventListener("keypress", allowLetter)