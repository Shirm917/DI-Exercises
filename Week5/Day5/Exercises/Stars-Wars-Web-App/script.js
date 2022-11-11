// Mini-Project: Strs Wars Web App Using AJAX API
// Instructions
// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters
// Create your HTML file, and add the relevant elements.
// In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.
// Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message.

function findSomeone() {
    const button = document.querySelector("button");
    button.addEventListener("click", retriveValues);
}

findSomeone();

let noRepeatNum;
function getRandomNum() {
    const randomNum = Math.floor(Math.random() * 84);
    if (noRepeatNum === randomNum) {
        getRandomNum();
    } else {
        noRepeatNum = randomNum;
        return randomNum;
    }
}


async function retriveValues() {
    clearCharacter();
    loading();
    const num = getRandomNum();
    const character = await fetch(`https://www.swapi.tech/api/people/${num}`);
    if (character.status === 200) {
        const characterObj = await character.json();
        const characterProps = characterObj.result.properties;
        const homeWorldApi = await fetch(characterProps.homeworld);
        const homeWorldObj = await homeWorldApi.json();
        loading();
        characterGenerator(characterProps.name, characterProps.height, characterProps.gender, characterProps.birth_year, homeWorldObj.result.properties.name);
    } else {
        clearCharacter();
        loading();
        displayErr();
    }
}

const div = document.getElementById("character");
const divChildren = div.children;
function characterGenerator(name, height, gender, birthYear, homeWorld) {
    divChildren[0].textContent = `${name}`;
    divChildren[1].textContent = `Height: ${height}`;
    divChildren[2].textContent = `Gender: ${gender}`;
    divChildren[3].textContent = `Birth Year: ${birthYear}`;
    divChildren[4].textContent = `Home World: ${homeWorld}`; 
}

function clearCharacter() {
    for (const divChild of divChildren) {
        divChild.textContent = "";
    }
}

function loading() {
    const iconDivElement = document.getElementById("icon");
    iconDivElement.classList.toggle("none");
}

function displayErr() {
    const h2Element = document.getElementById("name");
    h2Element.textContent = "Oh No! That person isn't available.";
}




// What I did at first
// function makeArray(obj) {
//     const characterPropertiesArr = Object.entries(obj);
//     const filterProperties = characterPropertiesArr.filter(element => {
//         const characterAttributes = document.getElementById(element[0]);
//         if (characterAttributes === null || element[0] === "homeworld") {
//             return false;
//         } else {
//             return true;
//         }
//     })
//     for (const character of filterProperties) {
//         const element = document.getElementById(character[0]);
//         element.textContent = "";
//         element.textContent = character[1];
//     }
// }