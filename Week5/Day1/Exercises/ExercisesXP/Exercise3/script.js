// Exercise 3
// Instructions
// Using this code:

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
// Convert this JS object into a JSON object. What happens to the nested objects ?
// The nested objects are also stringified
const jsonObject = JSON.stringify(marioGame);
console.log(jsonObject);
// Convert and pretty print this JS object into a JSON object.
const jsonObject2 = JSON.stringify(marioGame, null, 2);
console.log(jsonObject2);
// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
// In the debugger you can see that there's backslashs thorughout in order to escape because quotes are used throughout
// in the prettified JSONobject /n also appear which means new line, both these backslashs and these /n don't appear when you console.log them,
// they only appear in the values in the debugger