// In Class Exercises
// Create a shopping List
// Create an HTML file
// Create a JS file - Add the below array of objects inside your javascript file.
// Using a self invoking function, and using the DOM - add the products to the page and make them clickable.
// The user clicks on the item to add them to his cart. The cart is an array of items, saved in the localstorage. Each item is an object containing the name of the product and the price.
// When the user is done with his shopping, he will click on the "Pay button" (which is actually an anchor) and it will redirect him to another HTML page. This HTML page is linked to another Javascript file. Using the DOM display all the items that the user bought and the total price he needs to pay as well as a "Submit payment" Button
// When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.
const products = [
    {
        id: 0,
        name: "Deluxe Bicycle",
        url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
        price: 499.98
    },
    {
        id: 1,
        name: "Super Deluxe bagpack",
        url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
        price: 134.99
    },
    {
        id: 2,
        name: "Super Duper Scooter",
        url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
        price: 1090.95
    },
    {
        id: 3,
        name: "Smartphone",
        url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
        price: 399.99
    }
];

(function addProducts() {
    const sectionElement = document.createElement('section');
    document.body.prepend(sectionElement);
    products.forEach(element => {
        const divElement = document.createElement('div');
        const nameElement = document.createElement('h3');
        const imgElement = document.createElement('img');
        const priceElement = document.createElement('p');
        const btnElement = document.createElement('button');
        divElement.setAttribute("id", `product${element["id"]}`)
        const nameText = document.createTextNode(element["name"]);
        nameElement.append(nameText);
        imgElement.setAttribute("src", element["url"]);
        imgElement.style.width = 50 + "%";
        const priceText = document.createTextNode(element["price"]);
        priceElement.append(priceText);
        const btnText = document.createTextNode("Add To Cart");
        btnElement.append(btnText);
        divElement.append(nameElement, imgElement, priceElement, btnElement);
        sectionElement.append(divElement);
        btnElement.addEventListener("click", addToCart);
    })
})();

const productsArray = JSON.parse(localStorage.getItem("products")) || [];
function addToCart(event) {
    productsArray.push({name: event.target.parentElement.children[0].textContent, price: event.target.parentElement.children[2].textContent});
    console.log(productsArray);
    localStorage.setItem("products", JSON.stringify(productsArray));
}

// if the local storage is full you should take whatver is in the local storage