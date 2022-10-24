// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
function idChange() {
    const divElement = document.body.firstElementChild;
    divElement.setAttribute("id", "socialNetworkNavigation");
}

idChange();
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
function liNew() {
    const li = document.createElement("li");
    const text = document.createTextNode("Logout");
    li.append(text);
    const ul = document.getElementsByTagName("ul")[0];
    ul.appendChild(li);
}

liNew();
// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
function liContent() {
    const ul2 = document.getElementsByTagName("ul")[0];
    const liOne = ul2.firstElementChild;
    const liTwo = ul2.lastElementChild;
    const liOneinside = liOne.textContent;
    const liTwoinside = liTwo.textContent;
    console.log(liOneinside, liTwoinside);
}

liContent();