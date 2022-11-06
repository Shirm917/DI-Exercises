const form = document.querySelector("form");
form.addEventListener("submit", appendJSON);

function appendJSON(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const jsObject = Object.fromEntries(formData);
    const jsonString = JSON.stringify(jsObject);
    const paraElement = document.createElement("p");
    paraElement.append(jsonString);
    document.body.append(paraElement);
}

