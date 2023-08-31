// creating left grid, looping through to create 21 divs, adding the background colors and adding event listeners to every one
const colors = [
  "red",
  "orange",
  "darkgoldenrod",
  "yellow",
  "lightgreen",
  "darkseagreen",
  "green",
  "darkturquoise",
  "deepskyblue",
  "lightblue",
  "dodgerblue",
  "blue",
  "darkblue",
  "indigo",
  "purple",
  "hotpink",
  "pink",
  "lightgray",
  "gray",
  "black",
  "white",
];
function createColors() {
  const sectionElement1 = document.body.firstElementChild;
  for (let i = 0; i < 21; i++) {
    const divElement = document.createElement("div");
    sectionElement1.append(divElement);
    divElement.style.background = colors[i];
    divElement.addEventListener("click", retrieveColor);
  }
}

createColors();

// function to retrieve the backgroundcolor of each div and return it
let color;
function retrieveColor(event) {
  color = event.target.attributes[0].value;
}

let squareAmount = 1200;
// function to create the right grid, looping through to create 1200 divs
function createGrid() {
  const sectionElement2 = document.body.children[1];
  while (sectionElement2.firstChild) {
    sectionElement2.removeChild(sectionElement2.firstChild);
  };
  for (let i = 0; i < squareAmount; i++) {
    const divElement2 = document.createElement("div");
    sectionElement2.append(divElement2);
    divElement2.addEventListener("mousedown", colorPen);
    divElement2.addEventListener("mouseup", colorPen);
    divElement2.addEventListener("mouseover", colorPen);
  }
}

createGrid();

// function to color every div with the color chosen
function colorPen(event) {
  if (event.buttons == 0) {
    event.stopPropagation();
  } else {
    event.target.setAttribute("style", color);
  }
}

function addBtnEventListeners() {
  const squareAmountBtn = document.getElementById("squareAmountBtn");
  squareAmountBtn.addEventListener("click", getSquareAmount);
  const clearBtnElement = document.querySelector(".clearBtn");
  clearBtnElement.addEventListener("click", clear);
  const eraserBtnElement = document.querySelector(".eraserBtn");
  eraserBtnElement.addEventListener("click", eraser);
}

addBtnEventListeners();

function getSquareAmount() {
  console.log("test");
  squareAmount = prompt("Enter Square Amount");
  while (isNaN(squareAmount) || squareAmount <= 0 || squareAmount > 1200) {
    squareAmount = prompt(
      "Enter Square Amount (needs to be a number and over zero and under 1200)"
    );
  }
  createGrid();
}

// function to clear everything, change every right side div back to white
function clear() {
  const divsRight = document.querySelectorAll(".grid-right > div");
  for (const div of divsRight) {
    div.removeAttribute("style", color);
  }
}

function eraser() {
  color = "white";
}
