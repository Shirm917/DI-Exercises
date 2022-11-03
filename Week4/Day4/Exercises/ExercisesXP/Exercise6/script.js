//  Exercise 6

// Evaluate these (ie True or False)

[2] === [2] // false
// {} === {} // false


// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; // 5 because the value of number is 5
const object2 = object1; // 5 because object2 is now the same as object1
const object3 = object2; //5 because object3 is now the same as object3 which is the same as object1
const object4 = { number: 5}; //5 because the value of number is 5

object1.number = 4;
console.log(object2.number) // 4 because of pass by reference object2 gets changed as well
console.log(object3.number) // 4 because of pass by reference object3 gets changed as well
console.log(object4.number) // 5 object4 doesn't change because we never equaled it to object1 2 or 3.

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.animalType = type;
        this.color = color;
    }
}

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound(animalSound) {
       return `My name is ${this.name}, I am a ${this.color} ${this.animalType} and I ${animalSound}.`;
    }
}

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooooooo"));

