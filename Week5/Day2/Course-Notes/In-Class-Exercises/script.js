// Exercise XML HTTP REQUEST
// AJAX
// Make an HTTP request using the GET METHOD on this API: https://jsonplaceholder.typicode.com/users
// Use the method onload, onprogress, onerror
// If there is no error, display on the page the name, email, city of the 3 first users

const xhr = new XMLHttpRequest();

function getData() {
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.responseType = "json";
    xhr.send();
}

getData();

xhr.addEventListener("load", xhrLoaded);
xhr.addEventListener("progess", xhrProgress);
xhr.addEventListener("error", xhrError);

function xhrLoaded() {
    if (xhr.status === 200) {
        displayUsersInfo(xhr.response)
    } else {
        displayError();
    }
}

function xhrProgress() {
    document.body.style.background = "blue";
}

function xhrError() {
    console.log("error");
}

function displayUsersInfo(usersInfo) {
    usersInfo.filter(element => element["id"] <= 3)
            .forEach(element => {
        const paraElement = document.createElement("p");
        const paraText = document.createTextNode(`${element["name"]} - Email: ${element["email"]}, City: ${element["address"]["city"]}`);
        paraElement.append(paraText);
        document.body.append(paraElement);
    });
}

function displayError() {
    const paraElement = document.createElement("p");
    const paraText = document.createTextNode("ERROR");
    paraElement.append(paraText);
    document.body.append(paraElement);
}
