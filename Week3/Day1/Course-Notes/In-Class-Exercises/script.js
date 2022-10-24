// Add a <div id="container"></div> to the HTML file
// Create a function that adds the name of each students to a paragraph
// each paragraph needs to be background yellow, font-size 25px
// Add the 3 paragraph to the div already on the page
const users = ["John", "Lola", "Tom"];

function paraAdd() {
    const divElement = document.getElementById("container");
    for(let i = 0; i < users.length; i++) {
        const para = document.createElement("p");
        para.classList.add("yellow", "text")
        const name = document.createTextNode(`Hello ${users[i]}`);
        para.appendChild(name);
        divElement.appendChild(para);
    }
}

paraAdd();

