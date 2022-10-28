// In the js file, you must add the following functionalities:
// Create an empty array : const tasks = [];
const tasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.

const form = document.forms[0];
function addTask(event) {
    event.preventDefault();
    const formElements = form.elements;
    for (const elem of formElements) {
        if (elem.value.length > 0) {
            tasks.push(elem.value);
            addToList();
        }
    }
    form.reset();
}

form.addEventListener("submit", addTask);

function addToList() {
    const ulElement = document.querySelector("ul");
    const liElement = document.createElement("li");
    const iconElement = document.createElement("i");
    const labelElement = document.createElement("label");
    const hrElement = document.createElement("hr");
    const checkbox = document.createElement("input");
    ulElement.append(liElement);
    labelElement.append(checkbox, tasks[tasks.length - 1])
    liElement.append(iconElement ,labelElement, hrElement);
    iconElement.setAttribute("class", "fa-solid fa-square-xmark");
    checkbox.setAttribute("type", "checkbox");
}

