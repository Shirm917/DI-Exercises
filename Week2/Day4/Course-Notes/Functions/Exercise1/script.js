// Write a Javascript function that takes a parameter: myAge
// In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.
function age (myAge) {
    const momAge = myAge * 2;
    const dadAge = momAge * 1.2;
    console.log(momAge);
    console.log(dadAge);
}

// Call the function.
age(22);
age(10);
age(1);