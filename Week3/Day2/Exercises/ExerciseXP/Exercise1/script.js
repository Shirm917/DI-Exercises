// Using a DOM property, retrieve the h1 and console.log it.
const articleElement = document.body.firstElementChild;

function retrieveH1() {
    const h1Element = articleElement.firstElementChild;
    console.log(h1Element);
}

retrieveH1();

// Using DOM methods, remove the last paragraph in the <article> tag.
function removeLastP() {
    const lastP = articleElement.lastElementChild;
    articleElement.removeChild(lastP);
}

removeLastP();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2Element = articleElement.children[1];
h2Element.addEventListener("click", changeToRed);
function changeToRed(event) {
    h2Element.style.background = "red";
}

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3Element = articleElement.children[2];
h3Element.addEventListener("click", hideMe);
function hideMe(event) {
    h3Element.style.display = "none";
}
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const buttonElement = articleElement.nextElementSibling;
buttonElement.addEventListener("click", paraBold);
function paraBold(event) {
    const paragraphs = document.querySelectorAll("p");
    for (const item of paragraphs) {
        item.style.fontWeight = "bold";
    }
}

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
const h1Element = articleElement.firstElementChild;
h1Element.addEventListener("mouseover", randomSize);
function randomSize(event) {
    const randomNum = Math.random() * 100;
    h1Element.style.fontSize = `${randomNum}px`;
}
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)