// Exercise 1 
// Instructions
// Create an element without JSX and render it. The element should be an <h1> with the content “I do not use JSX”
import React from "react";

function Nojsx() {
    const element = React.createElement("h1", {}, "I do not use JSX");
    return element;
}

export default Nojsx

