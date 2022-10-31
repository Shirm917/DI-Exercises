// Exercise 4
// Instructions
// John has just signed in to your website and you want to welcome him.
// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function displayUser(userName) {
    const divElement = document.createElement("div");
    const navBar = document.querySelector("nav");
    const text = document.createTextNode(userName);
    const profile = document.createElement("img");
    divElement.append(text, profile);
    profile.setAttribute("src", "#");
    navBar.append(divElement);
})("John")