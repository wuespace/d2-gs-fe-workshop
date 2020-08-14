// Everything is an object
var num = 12; // number
var txt = "Hello"; // string
var bool = false;
var car = {}; // leeres object
console.log(car);

//#region Eigenschaften nachträglich zuweisen
car.make = "Fiat";
car.model = "Multipla";
console.log(car);
//#endregion

//#region Auf Eigenschaften zugreifen
console.log(car.make); // dot method
console.log(car['model']); // bracket method
//#endregion

//#region Objekt mit Eigenschaften definieren
var car2 = {
    make: "Opel",
    model: "Corsa-E",
    year: 2020,
    horsepower: 136,
    color: orange
}
//#endregion

//#region Constructor function
function Car(make, model, year, horsepower, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.horsepower = horsepower;
    this.color = color;
    this.description = function() {
        return `${this.make} ${this.model} ${this.year} (${this.horsepower}) in ${this.color}`;
    };
}
var nissan = new Car("Nissan", "Skyline GT-R 34", 1999, 280, "Blue");
console.log(nissan.description());
//#endregion

//#region Class
class CarClass {
    constructor(make, model, year, horsepower, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.horsepower = horsepower;
        this.color = color;
        this.description = function () {
            return `${this.make} ${this.model} ${this.year} (${this.horsepower}) in ${this.color}`;
        };
    }
}
var bmw = new CarClass("BMW", "E46 M3 GTR", 2006, 387, "silver/blue");
console.log(bmw.description());
//#endregion

//#region Dereferencing
const driver = {
    name: 'Paul',
    age: 40,
    says: 'Hello World'
};

// "Unpack" and clone name and age from driver
const { name: tmpName, age: tmpAge } = driver;

console.log(tmpName + " (" + tmpAge + ")\n");

// No problem with mutability of objects, because values are cloned and not referenced
driver.age = 41;
console.log(driver.age); // 41
console.log(tmpAge); // 40

// Clone whole object without referencing
const tmpDriver = { ...driver };
console.log(tmpDriver);
console.log(tmpDriver === driver); // false, not the same object
console.log(tmpDriver.name === driver.name); // true, values are the same

// Rest operator
const { name: onlyName, ...remainder } = driver;
console.log(onlyName);
console.log(remainder);

const additionalInfos = {
    gender: 'male',
    size: '187cm',
    says: 'Hey there!'
};

// Objects can be merged with the spread operator
const advancedDriver = { ...driver, ...additionalInfos };
// makes new object with cloned values from both
// says is in both of them!
console.log(advancedDriver.says); // Hey there!
// if a key is in both objects the last object wins
/* !!! if they don't have the same data type 
    it gets assigned with the never type
    and the program crashes, if the value is called !!! */

//#endregion