// Daily Challenge 2

// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.
// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city
// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
function formSubmit() {
    const form = document.getElementById("latlng");
    form.addEventListener("submit", getValues);
}
formSubmit();

function getValues(event) {
    event.preventDefault();
    const latOne = document.getElementById("latCityOne").value;
    const lngOne = document.getElementById("lngCityOne").value;
    const latTwo = document.getElementById("latCityTwo").value;
    const lngTwo = document.getElementById("lngCityTwo").value;
    const url1 = `https://api.sunrise-sunset.org/json?lat=${latOne}&lng=${lngOne}`;
    const url2 = `https://api.sunrise-sunset.org/json?lat=${latTwo}&lng=${lngTwo}`;
    fetchTimes(url1, url2);
}

async function fetchTimes(urlOne, urlTwo) {
    const resObjCity1 = await fetch(urlOne);
    const resObjCity2 = await fetch(urlTwo);
    const jsObjCity1 = await resObjCity1.json()
    const jsObjCity2 = await resObjCity2.json()
    Promise.all([jsObjCity1, jsObjCity2])
    .then(jsObjArr => [jsObjArr[0].results.sunrise, jsObjArr[1].results.sunrise])
    .then(sunrisesArr => display(sunrisesArr))
    .catch(err => alert(err));
}

function display(arr) {
    const sectionElement = document.querySelector("section");
    arr.forEach(element => {
        const paraElement = document.createElement("p");
        const sunriseTime = document.createTextNode(element);
        paraElement.append(sunriseTime);
        sectionElement.append(paraElement);
    })
}