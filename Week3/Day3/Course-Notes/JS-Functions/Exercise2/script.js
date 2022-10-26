let counter = 10;
const intervalOne = setInterval(createBanner, 1000);
function createBanner() {
    const divElement = document.createElement("div");
    document.body.append(divElement);
    const paraElement = document.createElement("p");
    let paraText = "";
    divElement.style.background = "lightblue";
    if (counter >= 0) {
        paraText = document.createTextNode(`The sales end in ${counter}sec!`);
    } else {
        clearInterval(intervalOne);
    }
    paraElement.append(paraText);
    divElement.append(paraElement);
    counter--;
}

