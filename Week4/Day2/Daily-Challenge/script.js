// Daily Challenge
// Instructions
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = () => {
    Object.keys(groceries).forEach((element, i) => {
        console.log(groceries["fruits"][i]);
    })
};

displayGroceries();

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
const cloneGroceries = () => {
    const user = client;
    client = "Betty";
    console.log(user);
}; 
cloneGroceries();
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// No we won't see this change in the user variable as this is pass by value and what this does is create a copy and
// so when we modify the client it doesn't effect user as user is just a copy of the original client.

// In the function, create a variable named shopping that is equal to the groceries variable.
const cloneGroceries2 = () => {
    const shopping = groceries;
    groceries["totalPrice"] = "35$"
    groceries["other"]["payed"] = false;
    console.log(groceries);
    console.log(shopping);
}; 
cloneGroceries2();
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Yes we will see this modification as this is pass by reference and in that it modifies both the orginal and the thing new variable it was assigned to,
// this would be different if we copied the object instead of equaling them.

// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
// Yes we will see the change as shopping and groceries are the same object and so when we change groceries, shopping also changes
// Also it would be the same thing if we copied because it's a deep object. We would need to use JSON in order to make it not the same
