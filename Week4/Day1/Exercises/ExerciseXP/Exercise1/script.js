// Exercise 1 
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne() // "inside the funcOne function 3" will be alerted as your redefining the a variable
// #1.2 What will happen if the variable is declared 
// with const instead of let ? // it will error and say assignment to a const 

//#2
let a2 = 0;
function funcTwo() {
    a2 = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a2}`);
}

// #2.1 - run in the console:
funcThree() // "inside the funcThree function 0" will be alerted because a2 is equal to 0, funcTwp hasn't been called 
funcTwo() // a2 will now equal to 5, nothing else will happen
funcThree() // "inside the funcThree function 5" will be alerted because now funcTwo has been called and changed a2 to 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ? funcTwo won't work, you will get an error that says assignment to a const .
// funcThree will alert "inside the funcThree function 0" because a2 can't be redefined, the second funcThree call doesn't do anything because the error stops everything


//#3
function funcFour() {
    window.a3 = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a3}`);
}

// #3.1 - run in the console:
funcFour() // window.a3 will be assigned the string "hello"
funcFive() // It will alert "inside the funcFive function hello" as a3 is hello

//#4
const a4 = 1;
function funcSix() {
    const a4 = "test";
    alert(`inside the funcSix function ${a4}`);
}


// #4.1 - run in the console:
funcSix() // "inside the funcSix function test" will be alerted because a4 is declared in the function scope so that will be the one it uses
// #4.2 What will happen if the variable is declared 
// with const instead of let ? // "inside the funcSix function test" will be alerted because a4 is declared as another variable which happens to have the same name in the function scope which is allowed

//#5
const a5 = 2;
if (true) {
    const a5 = 5;
    alert(`in the if block ${a5}`);
}
alert(`outside of the if block ${a5}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ? // it will be the same output as before because it's being declared as another variable in the block scope which is allowed