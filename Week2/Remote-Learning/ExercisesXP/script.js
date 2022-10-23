// Exercise 1
// Analyse the code below without running it, what will be the output ?
// Output will be 10 since you can redeclare variables with var
var num = 8;
var num = 10;
console.log(num);

// Exercise 2
function numbers() {
  for (let i = 0; i < 5; i += 1) {
    console.log(i);
  }
    // console.log(i);
}
numbers();
// Change the code so the var i will be undefined outside of the for loop

// Exercise 3
// You have to decide which type of variables you have to use
// Create a global variable that save the amount of money you have in your account
// Create a variable that saves the amount of VAT
// Create a variable that saves the amout of all the expenses and revenu you did /received for the past last month
let money = 500;
const vat = .04;
const expensesAndRevenues = 40;

// Create a JS code that multiplies of the expenses by the VAT
function multiply() {
    return expensesAndRevenues * vat;
}
// Create a JS code that changes the amount of the money you have in your account depending on your expenses/revenu.
function changes() {
    money -= multiply();
}
// Display it

changes();
console.log(money);





