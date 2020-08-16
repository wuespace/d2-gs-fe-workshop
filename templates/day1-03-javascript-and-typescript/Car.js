"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(make, model, year, horsepower, color, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.horsepower = horsepower;
        this.color = color;
        this.price = price;
    }
    Car.prototype.description = function () {
        return this.make + " " + this.model + " " + this.year + " (" + this.horsepower + ") in " + this.color;
    };
    return Car;
}());
exports["default"] = Car;
