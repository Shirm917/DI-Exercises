// Add a “light blue” background color and some padding to the <div>.
function lightBlue() {
    const divElement = document.body.firstElementChild;
    divElement.classList.add("light-blue", "padding");
}

lightBlue();
// Do not display the <li> that contains the text node “John”.
function removeFirstLiElement() {
    const ulElement = document.body.children[1];
    const liElement = ulElement.firstElementChild;
    liElement.style.display = "none";
}

removeFirstLiElement();
// Add a border to the <li> that contains the text node “Pete”.
function addBorder() {
    const ulElement2 = document.body.children[1];
    const liElement2 = ulElement2.lastElementChild;
    liElement2.classList.add("border");
}

addBorder();
// Change the font size of the whole body.
function fontSizeBody() {
    const wholeBody = document.body;
    wholeBody.style.fontSize = "30px";
}

fontSizeBody();
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
function ifLightBlue() {
    const divElement2 = document.body.firstElementChild;
    const users = divElement2.textContent;
    if (divElement2.classList.contains("light-blue")) {
        alert("Hello x and y");
    }
}

ifLightBlue();