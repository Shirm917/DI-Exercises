const form = document.forms[0];
const inputs = form.querySelectorAll("input");
function setRequired() {
    for (const item of inputs) {
        if (item.value.length === 0) {
            item.setAttribute("required", "");
        }
    }
}
setRequired();
function getValues(event) {
    event.preventDefault();
    // const paragraphElement = document.body.children[2];
    const spanElement = document.getElementById("story");
    const story = document.createTextNode(`Once upon a time in a ${inputs[0].value} an adventurer met a ${inputs[1].value} person named ${inputs[2].value} and this person told the adventurer to ${inputs[3].value} all the way to a ${inputs[4].value} so they could start their quest.`);
    spanElement.append(story);
}

form.addEventListener("submit", getValues);