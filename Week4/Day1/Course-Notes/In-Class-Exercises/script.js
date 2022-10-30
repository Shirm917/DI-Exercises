// Exercise 1 : guess what will be console logged, and explain why
let text = "Hello";

function checkText (){
  console.log("In the function",text); 
  text += " World";
  console.log("Still in the function",text);
}

console.log("before the function", text); // "before the function Hello", since the function hasn't been called yet
// and text = "Hello" 

checkText() // First it will say "In the function Hello" since it's console logging text and text is a 
// global variable so it will work. Then it will console log "Still in the function Hello World"
// because the line text+=" World" changing the global text variable.

console.log("after the function", text); // "after the function Hello World" because the function changed the global variable

// Exercise 2 : guess what will be console logged, and explain why
let friend = "Harry";

function checkfriend (){
  let friend = "Alice";
  console.log("In the function",friend); 
  friend += " Smith";
  console.log("Still in the function",friend);
}

console.log("before the function", friend); // "before the function Harry", since Harry is assigned to the variable friend

checkfriend() // "In the function Alice" since you are assigning a variable called friend in the function scope.
// Then "Still in the function Alice Smith" since we are changing the function scope friend variable

console.log("after the function", friend); // "after the function Harry" since the function changed the function scope friend not the global variable friend.

// Arrow Functions

// Exercise 1:

// Greet the user with his name, the user's name is a parameter. Do this exercise,
// first by using function declarations
function greetUser(name) {
    alert(`Hi ${name}`);
}

greetUser("John");

// then function expression,
const greetUser2 = function(name) {
    alert(`Hi ${name}`);
};

greetUser2("Mary");

// then arrow function
const greetUser3 = name => alert(`Hi ${name}`);

greetUser3("Sue");

// Exercise 2: Function & Arrow function & Ternary Operator

// Check if the user's age is higher than 18. Use ternary operator.
// if the user's age is higher than 18, return "You can drive"
// else, return "You cannot drive"
// Do this exercise,

// first by using function declarations
function userAge(age) {
   return ((age > 18) ? "You can drive" : "You cannot drive");
}

// then function expression,
const userAge2 = function(age) {
    return ((age > 18) ? "You can drive" : "You cannot drive");
};

// then arrow function
const userAge3 = age => (age > 18) ? "You can drive" : "You cannot drive";