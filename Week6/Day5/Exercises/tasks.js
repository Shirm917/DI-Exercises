const tasksArr = JSON.parse(localStorage.getItem("tasks"));
// display the tasks
function displayTask() {
    const sectionElement = document.querySelector("section");
    tasksArr.forEach(element => {
        // Task heading
        const h1Element = document.createElement("h1");
        const h1Text = document.createTextNode("Task:");
        h1Element.append(h1Text);
        // Div Element
        const divElement = document.createElement("div");
        divElement.setAttribute("id", tasksArr.indexOf(element));
        // Name
        const namePara = document.createElement("p");
        const nameText = document.createTextNode(`Name: ${element["name"]}`);
        namePara.append(nameText);
        // Starting days
        const startingDatePara = document.createElement("p");
        const startingDateText = document.createTextNode(`Start Date and Time: ${new Date(element["startdateandtime"])}`);
        startingDatePara.append(startingDateText);
        // Days left
        const daysLeft = getDaysLeft(element["enddateandtime"]);
        const daysLeftPara = document.createElement("p");
        const daysLeftText = document.createTextNode(`Days Left From Now: ${daysLeft}`)
        daysLeftPara.append(daysLeftText);
        // Adding description
        const descriptionPara = document.createElement("p");
        const descriptionText = document.createTextNode(`Description: ${element["description"]}`);
        descriptionPara.append(descriptionText);
        descriptionPara.style.display = "none";
        // Status
        const statusPara = document.createElement("p");
        const statusText = document.createTextNode(`Status: ${element["status"]}`);
        statusPara.append(statusText);
        // Checkbox 
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.addEventListener("click", changeStatus);
        // Adding X, delete button
        const deleteBtn = document.createElement("button");
        const deleteText = document.createTextNode("X");
        deleteBtn.append(deleteText);
        deleteBtn.addEventListener("click", deleteTask);
        // Adding edit button 
        const editBtn = document.createElement("button");
        const editText = document.createTextNode("Edit");
        editBtn.append(editText);
        editBtn.addEventListener("click",editTask);
        // Appending to page
        divElement.append(h1Element, namePara, startingDatePara, daysLeftPara, statusPara, descriptionPara, checkBox, deleteBtn, editBtn);
        sectionElement.append(divElement);
        // Adding event listener
        divElement.addEventListener("click", dropDown);
        // Starting color
        if (daysLeft < 0) {
            divElement.style.color = "blue";
        } else {
            divElement.style.color = "red";
        }
    });
}

displayTask();

// Getting the days left
function getDaysLeft(date) {
    const endDate = new Date(date);
    const dateDifMs = endDate - new Date();
    const daysRemaining = Math.round(dateDifMs/(1000 * 3600 * 24));
    return daysRemaining;
}

// Displays the description when the task is clicked except when the checkbox is clicked
function dropDown(event) {
    if (event.target === event.target.parentNode.children[6] || event.target === event.target.parentNode.children[7]) {
        return;
    } else if (event.target.parentNode.children[5].style.display === "none") {
        event.target.parentNode.children[5].style.display = "block";
    } else {
        event.target.parentNode.children[5].style.display = "none";
    }
}

// Changes the status and color of the task 
function changeStatus(event) {
    if (event.target.checked === true) {
        event.target.parentNode.children[4].textContent = "Status: Completed";
        event.target.parentNode.style.color = "green";
    } else if (event.target.checked === false && event.target.parentNode.children[3].textContent.includes("-")){
        event.target.parentNode.children[4].textContent = "Status: Uncompleted";
        event.target.parentNode.style.color = "blue";
    } else {
        event.target.parentNode.children[4].textContent = "Status: Uncompleted";
        event.target.parentNode.style.color = "red";
    }
}

// Deleting task
function deleteTask(event) {
    const divs = document.querySelectorAll("div");
    const idNum = event.target.parentNode.getAttribute("id");
    const confirmAnswer = confirm("Are you sure you want to delete this task?");
    if (confirmAnswer) {
        divs.forEach(element => {
            if (element.id > idNum) {
                element.setAttribute("id", element.id - 1);
            } else {
                element.setAttribute("id", element.id);
            }
        })
        tasksArr.splice(event.target.parentNode.id, 1);
        localStorage.setItem("tasks", JSON.stringify(tasksArr));
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    } else {
        return;
    }
}

// Edit task
function editTask(event) {
    const div = event.target.parentNode;
    const divChildren = div.children;
    const divId = event.target.parentNode.id;
    if (event.target.textContent === "Edit") {
        event.target.textContent = "Finished editing";
        event.target.parentNode.setAttribute("contenteditable", "true");
    } else {
        for (const child of divChildren) {
            if (divChildren[1] === child || divChildren[2] === child || divChildren[5] === child) {
                const key = child.textContent.split(":")[0].toLowerCase().replace(/\s/g, "");
                tasksArr[divId][key] = child.textContent.split(":")[1].replace(/\s/g, "");
            } else {
                continue;
            }
            localStorage.setItem("tasks", JSON.stringify(tasksArr));
        }
        event.target.textContent = "Edit";
        event.target.parentNode.setAttribute("contenteditable", "false");
    }
}

