class Car {
    constructor() {
        this.name = "MyCar"
    }
    getName() {
        return this.name
    }
    setName(newname) {
        this.name = newname
    }
}

class RedCar extends Car {
    constructor(name) {
        super();
        this.name = name
    }
    getName() {
        return "red name"
    }
}
const red = new RedCar("Red Car");
red.getName();
// const redcar = new Car();
// redcar.setName("redcar")
// console.log(redcar.getName());
// const bluecar = new Car();
// bluecar.setName("bluecar")
// console.log(bluecar.getName());