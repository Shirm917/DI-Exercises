// Using Javascript:
// Retrieve the div and console.log it
function retrieveDiv() {
    const divElement = document.getElementById("container");
    console.log(divElement);
}

retrieveDiv();

// Change the name “Pete” to “Richard”.
function changeName() {
    const firstUlElement = document.body.children[1];
    let secondLiElement = firstUlElement.lastElementChild;
    secondLiElement.textContent = "Richard";
}

changeName();
// Change each first name of the two <ul>'s to your name.
function changeFirstNames() {
    const ulElements = document.querySelectorAll("ul");
    for (let i = 0; i < ulElements.length; i++) {
        let firstLiElements = ulElements[i].firstElementChild;
        firstLiElements.textContent = "Shir"
    }
}

changeFirstNames();
// Delete the <li> that contains the text node “Sarah”.
function deleteLi() {
    const secondUlElement = document.body.children[2];
    const secondLiElement = secondUlElement.children[1];
    secondUlElement.removeChild(secondLiElement);
}

deleteLi();

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.