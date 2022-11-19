// Mini project

// Part I - The List:
// In the HTML file, create a form to add a new task. The form should contain a few inputs:

// Name
// Description
// Start date and time - check the documentation
// End date and time - check the documentation
// A submit button

// As soon as the user submits the form, the task should be saved.
// By default, the status of the task is “uncompleted” (ie. isCompleted: false)
// IMPORTANT : The todo list items should be stored in your localStorage - You should use an array of objects - each object contains a task

const form = document.getElementById("tasks");
form.addEventListener("submit", addTask);

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function addTask(event) {
    event.preventDefault();
    const formInputs = document.querySelectorAll("input");
    tasks.push({name: formInputs[0].value, description: formInputs[1].value, startdateandtime: formInputs[2].value, enddateandtime: formInputs[3].value, status: formInputs[4].value});
    const sortedTasksArr = tasks.sort(
        (objA, objB) => new Date(objA["startdateandtime"]) - new Date(objB["startdateandtime"])
    );
    localStorage.setItem("tasks",  JSON.stringify(sortedTasksArr));
}

function btnEventListener() {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", goToTasks);
}

btnEventListener();

function goToTasks() {
    document.location.href = "tasks.html";
}
// localStorage.clear();