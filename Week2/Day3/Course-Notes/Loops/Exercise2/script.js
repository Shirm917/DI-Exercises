let names= ["john", "sarah", 23, "Rudolf",34]
// 1. Write a JavaScript for loop that will go through the variable names.
// if the item is not a string, pass.
// if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.
for (let i = 0; i < names.length; i++){
    if (typeof names[i] !== "string") {
        continue;
    } else if (typeof names[i] === "string" && names[i].charAt(0) !== names[i].charAt(0).toUpperCase()) {
        let word = names[i].charAt(0).toUpperCase() + names[i].slice(1);
        console.log(word);
    } else {
        console.log(names[i]);
    }
}
// 2. Write a JavaScript for loop that will go through the variable names
// if the item is not a string, go out of the loop.
// if the item is a string, display it.

for (i = 0; i < names.length; i++) {
    if (typeof names[i] !== "string") {
        break;
    } else {
        console.log(names[i]);
    }
}

