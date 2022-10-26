// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

function helloWorld() {
    alert("Hello World");
}
setTimeout(helloWorld, 2000);

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

function addNewPara() {
    const divElement = document.getElementById("container");
    const paraElement = document.createElement("p");
    const paraText = document.createTextNode("Hello World");
    paraElement.append(paraText);
    divElement.append(paraElement);
}
setTimeout(addNewPara, 2000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
let counter = 0;
function addNewPara2() {
    counter++;
    const divElement = document.getElementById("container");
    if (counter <= 5) {
        const paraElement = document.createElement("p");
        const paraText = document.createTextNode("Hello World");
        paraElement.append(paraText);
        divElement.append(paraElement);
    }else {
        clearInterval(intervalOne);
    }
} // six paragraphs show because of the paragraph from part 2
const intervalOne = setInterval(addNewPara2, 2000); 

function btnClear() {
    clearInterval(intervalOne);
}

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", btnClear);