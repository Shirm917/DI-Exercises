// Exercise 2
// Instructions
function displayStudentInfo(objUser){
    return `Your full name is ${objUser["first"]} ${objUser["last"]}`;
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'