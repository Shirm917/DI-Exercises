// In Class Exercises
function getProducts() {
    fetch("/api/products")
    .then(result => result.json())
    .then(products => {
        console.log(products);
    })
    .catch(err => console.log(err));
}

function createProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    // fetch(url,option(this is an object))
    fetch("/api/products", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({name,price})
    })
    .then(result => result.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}