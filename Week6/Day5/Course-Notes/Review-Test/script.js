// Review Test 
// Basics
// 1. How to access the second element of the array const nums = [3, 7, 10]
// nums[1];

// 2. For the code below, what does arrNums.splice(2, 0) return?
// []

// 3. What is the result of the following code:
// [4, 5, 6, 1, 2, 3, 7, 8, 9]

// 4. What does the following code print to the console?
// "Real Madrid"

// 5. What does the following code print to the console?
// {france : "Paris Saint-Germain",
// spain : "Atlético Madrid",
// bestTeam: "France national football team"}

// 6. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.
// Yes you can, it's called function expression and you can invoke it by doing x(a, b) with whatever arguments passed in place of a and b;

// 7. Variables created without any keyword, are always global, even if they are created inside a function ? Yes or No and explain
// Yes they are because it's like declaring it in the global space no matter where it is

// Functions
// 8. In JavaScript can we pass functions as arguments to other functions? What does this code return?
// Yes you can, this returns "Hello, Javascript!"

// 9. Transform this function into an arrow function
// const sum = (num1, num2) => num1 + num2;

// 10. What does the following code print to the console? Explain the process and concept behind it
// "Poppin' bottles", this is a nested function, with nested functions we can access the parent functions variables 

// DOM

// 11. Which of the following events will you add in the addEventListener()method? ☐ click ☐ onclick
// click

// 12. Does the addEventListener() method allow you to add many events to the same element?
// Yes

// 13. DOM exercise
// Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions.
const addPara = () => {
    const sectionElement = document.querySelector("#paras");
    const paraElement = document.createElement("p");
    const paraText = document.createTextNode("New Paragraph");
    paraElement.append(paraText);
    sectionElement.append(paraElement);
    paraElement.addEventListener("mouseover", changeTextColor);
}
const btnClickEvent = () => {
    const btn = document.querySelector("#paraBtn");
    btn.addEventListener("click", addPara);
}
btnClickEvent();
// Part II : Add to each new paragraph, an event listener of mouse over. When you hover on a paragraph, the paragraph should become red (ie. color of the text).
function changeTextColor(event) {
    event.target.style.color = "red";
}

// Array Methods : forEach, map, filter, reduce, find, every, some

// 14. Do this exercise twice: first with a for loop, then with a for of loop. Console.log the sum of this array
function sumOfArray1() {
    const marks1 = [67, 60, 89, 90, 67, 42];
    let total = 0;
    for (let i = 0; i < marks1.length; i++) {
        total += marks1[i];
    }
    console.log(total);
}

sumOfArray1();

function sumOfArray2() {
    const marks2 = [67, 60, 89, 90, 67, 42];
    let total = 0;
    for (const element of marks2) {
        total += element;
    }
    console.log(total);
}

sumOfArray2();

// 15. What is the value of passed in the following code?
// false

// 16. What does the following code log?
// [50, 88]

// 17. Use a javascript array method to square the value of every element in the array.
const squareNumber = () => {
    const input = [ 1, 2, 3, 4, 5 ];
    const squaresArr = input.map(element => element * element);
    console.log(squaresArr);
}

squareNumber();

// 18. Use 2 javascript array methods and chain them to return the sum of all the positives ones.
function positivesTotal() {
    const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
    let total = 0;
    secondInput.filter(element => element >= 0)
            .map(element => total += element);
    console.log(total);
}

positivesTotal();

// 19. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.
function abbreviate() {
    const input = 'George Raymond Richard Martin';
    const initals = input.split(" ").map(element => element[0]).join("");
    console.log(initals);
}

abbreviate();

// Object and Classes
// 20. How objects are passed to a function in JavaScript? By Value or By Reference? Explain in detail, using the below example:
// In the first console log the color will be blue and in the next two the color will be red.
// Objects are pass by reference, so we aren't making a copy we are referencing the same object in the heap
// So when we change the object since the addresses in the stack lead to the same object both are changed.

// 21. How would you change the code above, so that when you modify the key color from the parameter myshirt, it won't change the global variable tshirt ?
// I would do change the parameter to ({...myshirt}) 

// 22. Use object destructuring to retrieve the value of the keys france and spain
const football = {
    type: "sport",
    clubs: {
      france : "Paris Saint-Germain",
      spain : "Atlético Madrid",
    }
  }  
const {type, clubs:{france: franceTeam, spain: spainTeam}} = football;

// 23. Use object destructuring in the function to retrieve the value of the keys france and spain
function retrieveSports ({type, clubs:{france: franceTeam}, clubs:{spain: spainTeam}}) {
    const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
    console.log(sentence);
 }

retrieveSports(football);

// 24. What will be printed in the console?
// "Chocolate cake is for $10"

// Promises
// 25. What will be the output and why ? What will be the state of the promise ?
// "SUCCESS!" .then returns the resolved value, so data is equal to Success! 
// then you are returning data.toUpperCase which is SUCCESS! the second .then takes what's returned
// and console.logs it. The promise is resolved.

// 26. What will be displayed by the following code, after 2 seconds?
// "OK"

// 27. Consider the following async function and its output. What will be displayed to the console when calling the test() function? Explain the process
// "done!" first result is = "first!", then aa promise is created with the resolve value of "done!",
// then result is assigned await promise so this makes it synchronous and nothing after this will happen
// until this is done. So once this is done result equals "done!" and
// so "done!" is logged

// 28. Use async await, and fetch a fact on cats and display it. Use this third party API : https://catfact.ninja/fact
function addClickToCatBtn() {
   const catBtn = document.getElementById("catBtn");
   catBtn.addEventListener("click", getCatFact);
}

addClickToCatBtn();

async function getCatFact() {
    try {
        const catFactsApi = await fetch("https://catfact.ninja/fact");
        const catFactsObj = await catFactsApi.json();
        displayCatFact(catFactsObj.fact);
    } catch(err) {
        alert(err);
    }
}

function displayCatFact(catFact) {
    const sectionElement = document.querySelector("#catFact")
    const paraElement = document.createElement("p");
    const paraText = document.createTextNode(catFact);
    paraElement.append(paraText);
    sectionElement.append(paraElement);
}

