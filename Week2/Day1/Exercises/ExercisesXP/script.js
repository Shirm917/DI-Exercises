// Exercise 1
const favoriteFood = "Buffalo Wings";
const favoriteMeal = "Dinner";
const foodSentence = `I eat ${favoriteFood} at every ${favoriteMeal}`;
console.log(foodSentence);

// Exercise 2

// Part 1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);
const myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`;
console.log(myWatchedSeriesSentence);
const seriesCombineSentence = `I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`;
console.log(seriesCombineSentence);

// Part 2
myWatchedSeries[2] = "friends";
console.log(myWatchedSeries);
myWatchedSeries.push("The Mentalist");
console.log(myWatchedSeries);
myWatchedSeries.unshift("Psych");
console.log(myWatchedSeries);
myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries);
const thirdLetter = myWatchedSeries[1][2];
console.log(thirdLetter);
console.log(myWatchedSeries);

// Exercise 3
const celsiusTemp = 22;
const fahrenheitTemp = celsiusTemp / 5 * 9 + 32;
const convertSentence = `${celsiusTemp} °C is ${fahrenheitTemp} °F`;
console.log(convertSentence);

// Exercise 4
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: It will output 55 as 34 + 21 are numbers and added togther they equal to 55
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: It will output 23 as we have redefined a and we can do this as we used let and not const and 2 + 21 is equal to 23.
// Actual: 23

// 3. C is undefined 

console.log(3 + 4 + '5');
// 4. Prediction: It will output "75" as it will do 3 + 4 since both are numbers and then since 5 is a string it can't be added so instead they will concatenate togther to form the string "75"
// Actual: "75"


// Exercise 5 
typeof(15);
// Prediction: Number
// Actual: Number

typeof(5.5);
// Prediction: Number
// Actual: Number

typeof(NaN);
// Prediction: Number because while this stands for not a number it represents an undefined number and so it is in the number type
// Actual: Number

typeof("hello");
// Prediction: String
// Actual: String

typeof(true);
// Prediction: Boolean
// Actual: Boolean

typeof(1 != 2);
// Prediction: Boolean because it will be true and true is a boolean
// Actual: Boolean

"hamburger" + "s";
// Prediction: "hamburgers"
// Actual: "hamburgers"

"hamburgers" - "s";
// Prediction: NaN, there are no defined numbers 
// Actual: NaN

"1" + "3";
// Prediction: "13"
// Actual: "13"

"1" - "3";
// Prediction: -2
// Actual: -2

"johnny" + 5;
// Prediction: "johnny5"
// Actual: "johnny5"

"johnny" - 5;
// Prediction: NaN
// Actual: NaN

99 * "hello";
// Prediction: NaN
// Actual: NaN

1 != 1;
// Prediction: false
// Actual: false

1 == "1";
// Prediction: true because with two equal signs it just has to be the same value
// Actual: true

1 === "1"; 
// Prediction: false because with three equal signs it has to be the same type and the same value and they are not the same type as one is a number and the other is a string
// Actual: false

// Exercise 6 
5 + "34";
// Prediction: "534" it will concatenate the two together into one string even though 5 is a number
// Actual: "534"

5 - "4";
// Prediction: 1 because you can't subtract strings and so javascript will just use the string of 4 as a number
// Actual: 1

10 % 5;
// Prediction: 0 because the remained of 10/5 is 0
// Actual: 0

5 % 10;
// Prediction: 5 because only half of 10 can go into 5 and there's still a remainder of 5
// Actual: 5

"Java" + "Script";
// Prediction: "JavaScript" concatenation
// Actual: "JavaScript"

" " + " ";
// Prediction:"  " concatenation of two spaces
// Actual: "  "

" " + 0;
// Prediction: " 0" concatenation a space and the number 0 
// Actual: " 0"

true + true;
// Prediction: 2 since true is equal to 1 and 1+1=2
// Actual: 2

true + false;
// Prediction: 1 since true is equal to 1 and false is equal to 0 1+0=1
// Actual: 1

false + true;
// Prediction: 1 since true is equal to 1 and false is equal to 0 1+0=1
// Actual: 1

false - true;
// Prediction: -1 since true is equal to 1 and false is equal to 0 0-1=-1
// Actual: -1

!true;
// Prediction: false since ! means not so this is basically saying not true which is false
// Actual: false

3 - 4;
// Prediction: -1
// Actual: -1

"Bob" - "bill";
// Prediction: NaN these aren't numbers
// Actual: NaN
