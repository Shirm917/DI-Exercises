// Exercise 5
// Instructions
// You will use nested functions, to open a new juice bar.
// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
 function makeJuice(drinkSize) {
    function addIngredients(ingreOne, ingreTwo, ingreThree) {
        const divElement = document.createElement("div");
        const sentence = document.createTextNode(`The client wants a ${drinkSize} juice, containing ${ingreOne}, ${ingreTwo}, and ${ingreThree}.`)
        divElement.append(sentence);
        document.body.prepend(divElement);
    }
    addIngredients("apple", "strawberry", "banana");
 }

 makeJuice("medium");

//  Part II:
//  In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice2(drinkSize) {
    const ingredients = [];
    function addIngredients(ingreOne, ingreTwo, ingreThree) {
        ingredients.push(ingreOne, ingreTwo, ingreThree);
    }
    function displayJuice() {
        const divElement = document.createElement("div");
        let sentencePart = "";
        ingredients.forEach((element, i, arr) => {
            sentencePart += " " + element;
        })
        let sentence = document.createTextNode(`The client wants a ${drinkSize} juice, containing ${sentencePart}.`); 
        divElement.append(sentence);
        document.body.prepend(divElement);
    }
    addIngredients("apple", "strawberry", "banana");
    addIngredients("peach", "plum", "blueberry");
    displayJuice();
 }

 makeJuice2("medium");
