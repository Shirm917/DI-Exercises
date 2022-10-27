// Exercise 3 from Week 3 "Learning DOM Animations"
// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.
const box = document.getElementById("box");
box.setAttribute("draggable", "true");
function movableBox(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

box.addEventListener("dragstart", movableBox);

function targetSet() {
    const dropZone = document.getElementById("target");
    dropZone.addEventListener("dragover", draggingBoxOver);
    dropZone.addEventListener("drop", dropping);
    dropZone.addEventListener("dragleave", boxLeaving);
}

targetSet();

function draggingBoxOver(event) {
    event.preventDefault();
    event.target.style.background = "blue";
}

function dropping(event) {
    event.preventDefault();
    const boxId = event.dataTransfer.getData("text/plain");
    const findBox = document.getElementById(boxId);
    event.target.append(findBox);
}

function boxLeaving(event) {
    event.target.style.background = "purple";
}
