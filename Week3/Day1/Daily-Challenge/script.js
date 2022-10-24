// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
function createDiv() {
    const planets = ["Mars", "Venus", "Earth", "Mercury", "Jupiter", "Saturn", "Uranus", "Neptune"];
    for (let i = 0; i < planets.length; i++) {
        const divElement = document.createElement("div");
        divElement.classList.add("planet", `color${i}`);
        const sectionElement = document.body.firstElementChild;
        sectionElement.append(divElement);
    }
}

createDiv();