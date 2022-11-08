// Daily Challenge 
// Instructions
// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

function submitForm(event) {
    event.preventDefault();
    const input = document.getElementById("gif");
    const inputValue = input.value;
    const url = "https://api.giphy.com/v1/gifs/search?" + "q=" + encodeURIComponent(inputValue)+ "&rating=g&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
    sendForm(url);
}
const formElement = document.querySelector("form");
formElement.addEventListener("submit", submitForm);

const xhr = new XMLHttpRequest();

function sendForm(url) {
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.send()
    xhr.addEventListener("load", xhrLoad);
    xhr.addEventListener("progess", xhrProgress);
    xhr.addEventListener("error", xhrError);
}


function xhrLoad() {
    if (xhr.status === 200) {
        displayGif(xhr.response.data);
    } else {
        alert(`ERROR ${xhr.status}: ${xhr.statusText}`);
    }
}

function xhrProgress() {
    document.body.style.background = "blue";
}

function xhrError() {
    alert("Request failed");
}

function displayGif(gif) {
    gif.forEach(element => {
        const divElement = document.querySelector("div");
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", element.images.original.url);
        const deleteBtn = document.createElement("button");
        const deleteBtnText = document.createTextNode("Delete");
        deleteBtn.append(deleteBtnText);
        divElement.append(imgElement, deleteBtn);
        deleteBtn.addEventListener("click", deleteGif);
    })
}

function deleteGif(event) {
    event.target.previousSibling.remove();
    event.target.remove();
}

function deleteAllButton() {
    const deleteAllBtn = document.createElement("button");
    const deleteAllBtnText = document.createTextNode("Delete All");
    deleteAllBtn.append(deleteAllBtnText);
    document.body.prepend(deleteAllBtn);
    deleteAllBtn.addEventListener("click", deleteAllGifs)
}

deleteAllButton();

function deleteAllGifs() {
    const divElement = document.querySelector("div");
    while (divElement.firstChild) {
        divElement.removeChild(divElement.firstChild);
    }
}