const addressNumber = 4;
const addressStreet = "Summer rd";
const country = "United States";

const globalAddress = "I live on " + addressNumber + " " + addressStreet + " in the " + country;

const globalAddress2 = `I live on ${addressNumber} ${addressStreet} in the ${country}`;

console.log(globalAddress);
console.log(globalAddress2);