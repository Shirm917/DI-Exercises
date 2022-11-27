function register() {
    const fName = document.getElementById("fname").value;
    const lName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    const userData = {
        fName,
        lName,
        email,
        user,
        pass
    }
    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => document.querySelector("p").textContent = `${data}`)
    .catch(err => console.log(err))
}

function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    const userData = {
        user, 
        pass
    }

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => document.querySelector("p").textContent = `${data}`)
    .catch(err => console.log(err))
}


