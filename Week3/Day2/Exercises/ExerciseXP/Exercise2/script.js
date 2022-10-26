// Retrieve the form and console.log it.
const form = document.forms[0]; 
function retrieveForm() {
    console.log(form);
}
retrieveForm();

// Retrieve the inputs by their id and console.log them.
function retrieveInputs() {
    const inputOne = document.getElementById("fname");
    const inputTwo = document.getElementById("lname");
    const inputThree = document.getElementById("submit");
    console.log(inputOne, inputTwo, inputThree);
}

retrieveInputs();
// Retrieve the inputs by their name attribute and console.log them.
function retrieveInputs2() {
    const firstInput = form.elements.fname;
    const secondInput = form.elements.lname;
    const thirdInput = form.elements.submit;
    console.log(firstInput, secondInput, thirdInput);
}

retrieveInputs2();

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
form.addEventListener("submit", submit);
function submit(event) {
    event.preventDefault();
    const elements = form.elements;
    for (const elem of elements) {
        if (elem.value === "Submit") {
            break;
        } else if (elem.value !== "") {
            const liElement = document.createElement("li");
            const ulElement = document.querySelector("ul");
            const liText= document.createTextNode(elem.value);
            liElement.append(liText);
            ulElement.append(liElement);
        }
    }
}