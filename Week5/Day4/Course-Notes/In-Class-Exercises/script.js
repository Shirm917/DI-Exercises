// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject else - resolve with the name of the 2 ppl in an array
async function peopleArray(name1, name2) {
    if (typeof(name1) !== "string" && typeof(name2) !== "string") {
        throw new Error("Only strings allowed")
    } else {
        return [name1, name2];
    }
}
// The 2nd function, receives a noun if the noun is less than 3 letters - reject else - resolve with the noun
async function receiveNoun(noun) {
    if (noun < 3) {
        throw new Error("Less than three letters")
    } else {
        return noun;
    }
}
// The 3rd function, receives a city if the city doesn't start with an uppercase letter -> reject else - resolve with the city name
async function receiveCity(city) {
    if (city.charAt(0) !== city.charAt(0).toUpperCase()) {
        throw new Error("City needs to start with an uppercase letter")
    } else {
        return city;
    }
}
// The 4st function, receives a verb (finishing with "ing") if it doesn't end with "ing" -> reject (use the endWith string method) else resolve with the verb
async function receiveVerb(verb) {
    if (verb.endsWith("ing")) {
        return verb;
    } else {
        throw new Error("Verb doesn't end with ing");
    }
}
// The last function, is an async function - it receives all the above promises, and return a sentence with it Ex: "Beyonce is playing football with Barack Obama in Paris"
async function allTogether() {
    const peopleArr = await peopleArray("Beyonce", "Barack Obama");
    const noun = await receiveNoun("football");
    const city = await receiveCity("Paris");
    const verb = await receiveVerb("playing");
    const sentence = `${peopleArr[0]} is ${verb} ${noun} with ${peopleArr[1]} in ${city}.`
    console.log(sentence);
}

allTogether();

// Part II. Instead of waiting for the promises to come back resolved, look at Promise.all method --> running the promises in Parallel --> check the difference of performance with performance.now()
Promise.all([peopleArray("Beyonce", "Barack Obama"), receiveVerb("playing"), receiveNoun("football"), receiveCity("Paris")]).then(values => values)
.then(valuesArr => (`${valuesArr[0][0]} is ${valuesArr[1]} ${valuesArr[2]} with ${valuesArr[0][1]} in ${valuesArr[3]}.`))
.then(sentence => console.log(sentence));

