// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.
const paragraphElement = document.body.firstElementChild;

function changeFontColor() {
    paragraphElement.style.color = "purple";
}

function changeFontSizeRandomly() {
    const randomNum = Math.random() * 150;
    paragraphElement.style.fontSize = `${randomNum}px`;
}

function changeBg() {
    paragraphElement.style.background = "red";
}

function removeEverything() {
    paragraphElement.removeAttribute("style");
}

paragraphElement.addEventListener("mouseover", changeFontColor);
paragraphElement.addEventListener("click", changeFontSizeRandomly);
paragraphElement.addEventListener("mouseout", changeBg);
paragraphElement.addEventListener("dblclick", removeEverything);



