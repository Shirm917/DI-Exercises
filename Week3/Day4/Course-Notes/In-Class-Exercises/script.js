// Instructions
// Add another green box on the page and try dragging and dropping it
// Change the style of the dropzone on dragleave

//retrieve the div

// getting the element by the id and assigning them to a variable
const boxOne = document.getElementById("boxOne");
const boxTwo = document.getElementById("boxTwo");
const boxThree = document.getElementById("boxThree");

// giving each draggeditem box the attribute and value of draggable = "true", which makes it draggable
boxOne.setAttribute("draggable","true");
boxTwo.setAttribute("draggable","true");
boxThree.setAttribute("draggable","true");

// adding an event listener of "dragstart" to each draggeditem so when we start dragging them the function startDragging is executed
boxOne.addEventListener("dragstart", startDragging);
boxTwo.addEventListener("dragstart", startDragging);
boxThree.addEventListener("dragstart", startDragging);

// this function makes it so when we start dragging the item the border will change 
// and we are also setting data and basically the data is set to the item's we are currently dragging id
function startDragging(event){
    // console.log(event);
    //event.target is the current element that is dragged
    //change the border of the element I drag
    event.target.style.border = "2px dotted black"; 
    
    // I need to set the element that I want to drop in the future
    // I will retrieve the element by id
    event.dataTransfer.setData("text/plain", event.target.id);
}

// adding evenlisteners to the dropzones by finding the .dropzone classes through queryselector all and 
// then using a loop to add both the eventlisteners "dragover" which means that when something is draggedover the dropzone the function draggingover gets called 
// and "drop" which means that when the item is dropped in the dropzone the function dropOnTarget gets called. 
// and "dragleave" which means that when the item is dragged away, aka it leaves the dropzone the function dragLeave gets called.
// This is dyanmic as imagine if there was 1000 boxes, we can just loop and not add eventlisteners indivisually on each one
function modifyDropZones () {
    //retrieve all the targets
    const allDropZones = document.querySelectorAll(".dropzone");
    // [div.dropzone, div.dropzone, div.dropzone]

    for (const zone of allDropZones){
        zone.addEventListener("dragover", draggingOver);
        zone.addEventListener("drop", dropOnTarget);
        zone.addEventListener("dragleave", dragLeave);
    }
}

modifyDropZones() //calling the function

//using dragover event, the event.target is the dropZone that we go over
// when we dragover an item over the dropzone the dropzone's backgroundcolor will turn pink
function draggingOver(event){
    event.preventDefault();
    // console.log(event.target);
    event.target.style.background = "pink";
}

// when we dragover an item over the dropzone the dropzone's backgroundcolor will turn lightblue
// and we are getting the data we set before which is the id of the box which was dragged and we assign it to a variable 
// and then we use getElementById to get the element that has this ID and we assign it to a variable 
// and then we append this element with this ID to the target
function dropOnTarget(event){
    event.preventDefault();
    //in the drop eventm the event.target is the drop
    event.target.style.background = "lightblue";

    const dataId = event.dataTransfer.getData("text/plain"); //id of the box
 
    const getBox = document.getElementById(dataId);
    event.target.appendChild(getBox)
}

// when we drag the item away from the dropzone, aka when we leave it, the backgroundcolor will turn to red
function dragLeave(event) {
    event.target.style.background = "red";
}


// make the green boxes draggable

// event dragStart on the green boxes
    //in the function we set the data to the id of the box I draf
    // event.target.id

// add the event drag over on the dropzones
    //in the function we use event.preventDefault()

// add the event drop on the dropzones
    //in the function we use event.preventDefault()
    //we get the data that we set in the dragStart function
    //we retrieve the id and retrieve the element
    //we append the element on the dropzone