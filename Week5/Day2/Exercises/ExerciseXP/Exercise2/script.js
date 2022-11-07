// Exercise 2
// Instructions
// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object

const xhr = new XMLHttpRequest();

function getData() {
    xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
    xhr.responseType = "json";
    xhr.send();
}

getData();

xhr.addEventListener("load", xhrLoaded);

function xhrLoaded() {
    if (xhr.status === 200) {
        console.log(xhr.response);
    } else {
        console.log("ERROR");;
    }
}

