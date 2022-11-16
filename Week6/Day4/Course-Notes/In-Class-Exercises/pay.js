function displayCart() {
    const cartProducts = JSON.parse(localStorage.getItem("products"));
    const sectionElement = document.createElement("section");
    const divElement = document.createElement("div");
    document.body.prepend(sectionElement);
    sectionElement.append(divElement);
    let totalPrice = 0;
    cartProducts.forEach(element => {
        const productPara = document.createElement("p");
        const product = document.createTextNode(element["name"]);
        totalPrice += parseInt(element["price"]);
        productPara.append(product);
        divElement.append(productPara);
    });
    const totalPricePara = document.createElement("p");
    const totalPriceText = document.createTextNode(`Your total is: $${totalPrice}`);
    totalPricePara.append(totalPriceText);
    divElement.append(totalPricePara);
}

displayCart();

function addEventListener() {
    const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", clearStorage);
}

addEventListener();

function clearStorage() {
    const successContainer = document.createElement("h1");
    const successText = document.createTextNode("You submitted your payment. Thank you for purchasing!");
    successContainer.append(successText);
    document.body.prepend(successContainer);
    localStorage.clear();
}