// Exercise 1 
// Instructions
// Convert the below promise into async await:

fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(result => result.result)
    .then(result2 => console.log(result2));

async function starships() {
    const results = await fetch("https://www.swapi.tech/api/starships/9/");
    if (results.status !== 200) {
        throw new Error("Wrong"); 
    } else {
        const resObj = await results.json();
        const starship = await resObj.result;
        return console.log(starship);
    }
}

starships();

// Both console.logs look exactly the same
