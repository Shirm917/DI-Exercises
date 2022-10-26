function sphereVolume(event) {
    event.preventDefault();
    const radiusInput = document.getElementById("radius");
    const volumeInput = document.getElementById("volume");
    let radiusValue = radiusInput.value;
    let volumeValue = radiusCubed(radiusValue) * 4 / 3 * 3.14;
    volumeInput.setAttribute("value", volumeValue);
}


const form = document.getElementById("MyForm");
form.addEventListener("submit", sphereVolume);

function radiusCubed(radius) {
    return radius * radius * radius;
}