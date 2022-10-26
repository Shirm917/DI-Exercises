function createBanner() {
    const divElement = document.createElement("div");
    const paraElement = document.createElement("p");
    const paraText = document.createTextNode("The sales end in 10min!");
    document.body.append(divElement);
    paraElement.append(paraText);
    divElement.append(paraElement);
    divElement.style.background = "lightblue";
}

setTimeout(createBanner, 5000);