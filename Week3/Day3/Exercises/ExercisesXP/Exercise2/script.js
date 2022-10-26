// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.


function myMove() {
    const divAnimate = document.getElementById("animate");
    const divContainer = document.getElementById("container");
    let num = 1;
    const intervalOne = setInterval(function() {
        if (num === 350) {
            clearInterval(intervalOne);
        } else {
            divAnimate.style.left = num + "px";
            num++;
        }
    }, 1)
}




