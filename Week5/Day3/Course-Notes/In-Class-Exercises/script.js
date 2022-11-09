// EXERCISE 1
// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the parameter is a string, the promise resolves with that same string uppercased.
// If the parameter is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error finally call a function that console.log ("congratulation")

// function promiseTest(param) {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof(param) === "string") {
//                 resolve(param.toUpperCase());
//             } else {
//                 reject(param);
//             }
//         }, 5000);
//     })
//     return promise;
// }

// promiseTest("eggs")
// .then(string => console.log(string.repeat(2)))
// .catch(err => console.log(err, "wrong paremeter"));

// promiseTest(7)
// .then(string => console.log(string.repeat(2)))
// .catch(err => console.log(err, "wrong paremeter"));

// function congratulations() {
//     console.log("congratulations");
// }

// congratulations();

// Fetch
// Exercise
// PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// function fetchGifs() {
//     fetch("https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
//     .then(result => {
//         if (result.status !== 200) {
//             throw new Error ("Failed Status!");
//         } else {
//             return result.json();
//         }
//     })
//     .then(gifObject => (displayGif(gifObject.data)))
//     .catch(err => alert(err));
// }

// fetchGifs();

// function displayGif(gif) {
//     const divElement = document.querySelector("div");
//     const imgElement = document.createElement("img");
//     imgElement.setAttribute("src", gif.images.original.url);
//     divElement.append(imgElement);
// }

// Using async-await
async function fetchGifs() {
    const result = await fetch("https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    if (result.status !== 200) {
        throw new Error ("Failed Status!");
    } else {
        const resObj = await result.json();
        const gifUrl = resObj.data.images.original.url;
        return gifUrl;
    }
}

function displayGif(url) {
    const divElement = document.querySelector("div");
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", url);
    divElement.append(imgElement);
}

async function mix() {
    try {
        const gif = await fetchGifs();
        displayGif(gif);
    } catch (err) {
        displayGif("https://media.giphy.com/media/JT7Td5xRqkvHQvTdEu/giphy.gif")
    }
}
mix();
// Part II
// Instead of having a fixed category of gif. First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1 You will then fetch 1 random gif, depending on the word. The word will be the gif category Display the word and the gif on the page
// For example: you will fetch the random-word-api. This api will return a random word - for example : "happy" Using this word as a category, you will fetch one random gif with the category of "happy" and display it on the page
function fetchWord() {
    fetch("http://random-word-api.herokuapp.com/word?number=1")
    .then(result => {
        if (result.status !== 200) {
            throw new Error ("Failed Status!");
        } else {
            return result.json();
        }
    })
    .then(wordArray => wordArray)
    .then(wordArray => displayWord(wordArray))
    .catch(err => alert(err));
}

function fetchGifs2() {
    let randomWord = fetchWord();
    fetch(`https://api.giphy.com/v1/gifs/random?tag=${randomWord}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then(result => {
        if (result.status === 404) {
            randomWord = "404 ERROR";
        } else if (result.status === 200) {
            return result.json();
        } else if (result.status !== 200) {
            throw new Error ("Failed Status!");
        }
    })
    .then(gifObject2 => {
        console.log(gifObject2);
        displayRandomGif(gifObject2.data)
    }) 
    .catch(err => alert(err));
}

// fetchGifs2();

function displayRandomGif(gif) {
    const divElement = document.querySelector("div");
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", gif.images.original.url);
    divElement.prepend(imgElement);
}

function displayWord(word) {
    const divElement = document.querySelector("div");
    const paraElement = document.createElement("p");
    const paraText = document.createTextNode(word);
    paraElement.append(paraText);
    divElement.prepend(paraElement);
}


// Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"