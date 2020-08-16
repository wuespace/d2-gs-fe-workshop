var empty = [];
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var mixed = [false, 3.45, 'Hello', undefined]; // in Javascript you can have mixed values in an array
var colors = ['Red', 'Green', 'Blue'];

//#region Array definition to work with

// Car class from objects.js
class Car {
    constructor(make, model, year, horsepower, color, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.horsepower = horsepower;
        this.color = color;
        this.price = price
        this.description = function () {
            return `${this.make} ${this.model} ${this.year} (${this.horsepower}) in ${this.color}`;
        };
    }
}

let cars = [];
// LIFO stack
// use push to insert elements to the end of an array
cars.push(new Car('BMW', 'M3 GTR', 2006, 387, 'Silver/Blue', 78200),
                new Car('Opel', 'Corsa-E', 2020, 136, 'Orange', 19980),
                new Car('Nissan', 'Skyline GT-R 34', 1999, 280, 'Blue', 67320),
                new Car('Mercedes', 'C63 AMG', 2018, 510, 'Yellow', 96499));
// console.log(cars);
// console.log(cars[0]); // get item at index 0

// use pop to remove the last element
let tmp1 = cars.pop();
// console.log(cars); // Mercedes - last item - is missing
cars.push(tmp1); // cleanup

// FIFO queue
// use unshift to insert elements to the beginning of an array
cars.unshift(new Car('Volkswagen', 'Golf GTI', 2012, 245, 'Red', 42499));
// console.log(cars);
// use shift to remove the first element
let tmp2 = cars.shift();
// console.log(tmp2);
cars.unshift(tmp2); // cleanup
// console.log(cars);

//#endregion

//#region Iterating over array element

let value = 0;
// Simple for loop to Array.length
for (var i = 0; i < cars.length; i++) {
    value += cars[i].price;
}
// console.log("Value of all cars: " + value + "$");
value = 0; // Cleanup

// for-in-loop, returns the indexes 
for (let index in cars) {
    value += cars[index].price;
}
// console.log("Value of all cars: " + value + "$");
value = 0; // Cleanup

// for-of-loop, returns each element
for (let car of cars) {
    value += car.price;
}
// console.log("Value of all cars: " + value + "$");
value = 0;

// skip elements
for (let car of cars) {
    if (car.make === 'Volkswagen') continue;
    value += car.price;
}
// console.log("Value of all cars except Volkswagen: " + value + "$");
value = 0;

//#endregion

//#region Array methods

    //#region Concat
    let newCars = new Array(new Car('Suzuki', 'Swift', 2009, 68, 'Black', 9000),
                            new Car('Renault', 'Clio', 2019, 140, 'Brown', 26700),
                            new Car('BMW', 'Z4 M40i', 2018, 340, 'Violet', 51200));
    cars = cars.concat(newCars);
    // console.log(cars);
    //#endregion
            
    //#region  Filter
    let bmws = cars.filter(car => car.make === 'BMW');
    // console.log(bmws); // returns new array with cars of make BMW
    //#endregion

    //#region Map
    // console.log(cars);
    // SALE !!!
    cars.map(car => car.price = car.price - 500);
    // console.log(cars);
    //#endregion

    // explore more array methods like splice, sort, toString, etc.

    // get all descriptions of my cars in a new array
    let catalog = cars.map(car => car.description());

//#endregion