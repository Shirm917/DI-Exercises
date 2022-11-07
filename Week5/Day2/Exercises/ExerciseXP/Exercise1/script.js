// Exercise 1
// Instructions
// With your knewly accumulated knowledge of AJAX lets write some cool code!
// You will work with this part of the documention
// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

const xhr = new XMLHttpRequest();

function getData() {
    xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
    xhr.responseType = "json";
    xhr.send();
}

getData();

xhr.addEventListener("load", xhrLoaded);

function xhrLoaded() {
    if (xhr.status === 200) {
        console.log(xhr.response);
    } else {
        console.log("ERROR");
    }
}