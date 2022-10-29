const orangeText = document.querySelectorAll(".orange-text");

function orangeTextChange() {
    for (const text of orangeText) {
        text.addEventListener("mouseover", magnifying);
        text.addEventListener("mouseout", goBack);
    }
}

orangeTextChange();

function magnifying(event) {
    event.target.style.fontSize = "80px";
}

function goBack(event) {
    event.target.style.fontSize = "40px";
}

const navBarBg = document.querySelector(".bg");
navBarBg.addEventListener("click", changeColor);

function changeColor() {
    navBarBg.style.backgroundImage = "linear-gradient(red, yellow)";
}

const buttons = document.querySelectorAll(".btn");

function buttonsAdd() {
    for (const btn of buttons) {
        btn.addEventListener("click", alertUser);
    }
}

buttonsAdd();

function alertUser() {
    alert("This doesn't work right now, will add to it later");
}