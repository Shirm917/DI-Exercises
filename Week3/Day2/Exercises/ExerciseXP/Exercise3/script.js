// Declare a global variable named allBoldItems.
let allBoldItems;
const paragraphElement = document.body.firstElementChild;
// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBold_items() {
    allBoldItems = paragraphElement.getElementsByTagName("strong");
}

getBold_items();

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    for (const item of allBoldItems) {
        item.style.color = "blue";
    }
}

highlight();

// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal() {
    for (const item of allBoldItems) {
        item.removeAttribute("style");
    }
}

return_normal();
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
paragraphElement.addEventListener("mouseover", highlight);
paragraphElement.addEventListener("mouseout", return_normal);
