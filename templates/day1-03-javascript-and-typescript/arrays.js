"use strict";
exports.__esModule = true;
var Car_1 = require("./Car");
var cars = [];
cars.push(new Car_1["default"]('BMW', 'M3 GTR', 2006, 387, 'Silver/Blue', 78200), new Car_1["default"]('Opel', 'Corsa-E', 2020, 136, 'Orange', 19980), new Car_1["default"]('Nissan', 'Skyline GT-R 34', 1999, 280, 'Blue', 67320), new Car_1["default"]('Mercedes', 'C63 AMG', 2018, 510, 'Yellow', 96499));
cars.unshift(new Car_1["default"]('Volkswagen', 'Golf GTI', 2012, 245, 'Red', 42499));
console.log(cars);
