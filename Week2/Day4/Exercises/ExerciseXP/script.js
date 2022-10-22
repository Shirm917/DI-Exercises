// Exercise 3 of Day 3
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
let number = 0;
while (number < 10) {
     number = prompt("Give me a number");
};

// Exercise 1 
// Instructions

// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
function infoAboutMe () {
    const name = "Shir";
    const age = 23;
    const hobby = "reading";
    const sentence = `My name is ${name}, I am ${age} years old, and I enjoy ${hobby}.`;
    console.log(sentence);
}

// Call the function.
// infoAboutMe();

// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
function infoAboutPerson (personName, personAge, personFavoriteColor) {
    const name = personName;
    let age = personAge;
    let color = personFavoriteColor;
    console.log(`Your name is ${name}, you are ${age} years old, your favorite color is ${color}.`);
}

// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// Exercise 2
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
// Create a function named calculateTip() that takes no parameter.
// Inside the function, use prompt to ask John for the amount of the bill.
// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.
// Console.log the tip amount and the final bill (bill + tip).
function calculateTip () {
    let bill = parseInt(prompt("What was the price of the bill?"));
    let tip;
    if (bill < 50) {
        tip = bill * .20;
        bill += tip;
    } else if (bill > 50 && bill < 200) {
        tip = bill * .15;
        bill += tip;
    } else if (bill > 200) {
        tip = bill * .10;
        bill += tip;
    }
    console.log(`The tip is ${tip} and the final bill is ${bill}`);
}

// Call the calculateTip() function.

// calculateTip();

// Exercise 3

// Instructions
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.
function isDivisible() {
    let sum = 0;
    for (let num = 0; num <= 500; num++){
        if (num % 23 === 0) {
        console.log(num);
        sum += num;
        }
    }
    console.log(sum);
}
// isDivisible();
// Bonus: Add a parameter divisor to the function.
function isDivisible2(divisor) {
    let sum = 0;
    for (let num = 0; num <= 500; num++){
        if (num % divisor === 0) {
        console.log(num);
        sum += num;
        }
    }
    console.log(sum);
}

// isDivisible2(3);
// isDivisible2(45);

// Exercise 4 
// Instructions
// Add the stock and prices objects to your js file.
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
const shoppingList = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
function myBill() {
    let total = 0;
    for (let i = 0; i < shoppingList.length; i++) {
        let item = shoppingList[i];
        let inStock = stock[item];
        if (inStock <= 0) {
            continue;
        } else if (item in stock) {
            total += prices[item];
            stock[item] -= 1;
        } 
    }
    console.log(total);
}
// Call the myBill() function.
// myBill();
// Bonus: If the item is in stock, decrease the item’s stock by 1
// console.log(stock);

// Exercise 5 
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.

let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennies = 0;

function changeEnough(price, [quarters, dimes, nickels, pennies]) {
    quarters *= .25;
    dimes *= .10;
    nickels *= .05;
    pennies *= .01;
    if (quarters + dimes + nickels + pennies >= price) {
        return true;
    } else {
        return false;
    }
}
changeEnough(4.25, [25, 20, 5, 0]);


// Exercise 6
// Instructions
// Let’s create functions that calculate your vacation’s costs:
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
function hotelCost() {
    const nights = prompt("How many nights would you like to stay in the hotel?");
    if (!nights || isNaN(nights)) {
        hotelCost();
    } 
    return nights * 140;
}


// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
function planeRideCost() {
    const destination = prompt("What is your destination?");
    if (!destination || /[a-zA-Z]+$/.test(destination) === false) {
        planeRideCost();
    } else if (destination === "London") {
        return 183;
    } else if (destination === "Paris") {
        return 220;
    } else {
        return 300;
    }
}


// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
function rentalCarCost() {
    const days = prompt("How many days would you like to rent the car?") 
    if (!days || isNaN(days)) {
        rentalCarCost();
    } else if (days > 10) {
        return days * 40 * .95;
    } else {
        return days * 40;
    }
}

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
function totalVacationCost() {
    const totalPrice = hotelCost() + planeRideCost() + rentalCarCost();
    return totalPrice;
}
// Call the function totalVacationCost()
// totalVacationCost();
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.