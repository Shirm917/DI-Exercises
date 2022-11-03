// Exercise1
// Part I
// What does the following code return/print?

const facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
const {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// Part II
// What does the following code return/print?

let planetFacts = {
  numPlanets2: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets2, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // yearNeptuneDiscovered: 1846,
// yearMarsDiscovered: 1659

// Exercise3
// Modify the code below, and destructure the object in the parameter (ie. you should have 3 parameters : name, house and goodstudents)
getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

function getDetails({name, house, goodstudent}) {
	console.log(name, house, goodstudent);
}


// Exercise4
// Modify the code below, and destructure the object in the parameter (ie. you should have 4 parameters : name, house, friendName and age)
getMoreDetails({
    name: 'Hermione Granger', 
    house: 'Gryfindor', 
    friend :  {
        friendName : 'Harry Potter', age : 20
        }
    })

function getMoreDetails({name, house, friend: {friendName}, friend: {age}}) {
	console.log(name, house, friendName, age);
}


// Exercise5
// Modify the code below, and destructure the object in the parameter (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)

const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}

function getElonMuskDetails({first: firstname, last: lastname, housesLocation: [locationOne, locationTwo], houses: {value: valueHouses}}){
	console.log(firstname, lastname);
	console.log(locationOne, locationTwo, valueHouses);
}

getElonMuskDetails(elonPerson);

// Exercise 6 : NOT MANDATORY
// Display in the body of the document, the name, email and phone of every employee. Use a loop and object destructuring
const employees = [
	{username: "Anne", email: "Anna@example.com", phone:"0000-000-0000"},
	{username: "Tom", email: "Tom@gmail.com", phone:"0111-111-1111"},
]

function details([{username, email, phone}]) {
    for (const employee of employees) {
        const paragraphElement = document.createElement("p");
        const text = document.createTextNode(`The name of the employee is ${employee["username"]}, their email is ${employee["email"]} and their phone number is ${employee["phone"]}`);
        paragraphElement.append(text);
        document.body.append(paragraphElement);
    }
}

details(employees);


// Exercise 1

// Part I
// Create a TV function constructor with 3 parameters : brand, channel and volume Channel should be 1 by default. Volume should be 50 by default.
// Create properties brandTV, channelTV and volumeTV equal to the 3 parameters value.
// Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
// Create an object for the LG TV
// Call the inscrease method, and check if the volume changed

class Tv {
    constructor(brand, channel = 1, volume = 50) {
        this.brandTV = brand;
        this.channelTV = channel;
        this.volumeTV = volume;
    }
    volumeDown() {
        return this.volumeTV--;
    }
    volumeUp() {
        return this.volumeTV++;
    }
}
const lgTv = new Tv("LG", 4, 40);
lgTv.volumeUp();

// Part II
// Create a subclass for Smart TV
// It overrides the method increase, so it increase the volume by 10 and not by 1
// Add a attribute of Netflix that should be equal to true by default
class SmartTv extends Tv {
    constructor(brandSmartTv, channelSmartTv = 1, volumeSmartTv = 50) {
        super(brandSmartTv, channelSmartTv = 1, volumeSmartTv = 50);
        this.netflix = true;
    }
    volumeUp() {
        return this.volumeTV += 10;
    }
}

const smartTv1 = new SmartTv("Smart Tv", 14, 42);
smartTv1.volumeUp();

// Part III: Modify the TV class
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

// class TV2 {
//     constructor(brand, channel = 1, volume = 50) {
//         this.brandTV = brand;
//         this.channelTV = channel;
//         this.volumeTV = volume;
//     }
//     volumeDown() {
//         if (this.volumeTV <= 0) {
//             return;
//         } else {
//             return this.volumeTV++;
//         }
//     }
//     volumeUp() {
//         if (this.volumeTV > 100) {
//             return volume;
//         } else {
//             return this.volumeTV++;
//         }
//     }
//     setChannel(channel) {
//         if (this.channel > 50) {
//             return channel;
//         } else {
//             return this.channelTV;
//         }
//     }
//     resetTv() {
//         this.channelTV = 1;
//         this.volumeTV = 50;
//     }
// }

// const lgTv2 = new TV2("LG", 20, 99);
// lgTv2.volumeUp();
// lgTv2.setChannel(60);
// lgTv2.resetTv();
