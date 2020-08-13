for (var i = 0; i < 10; i++) {
    console.log(i);
}

var value = false;
if (!value) {
    console.log("Value is false.")
}

/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

var tuple = [1, 34, "string", false]; // mixed datatypes

var arr = Array('Rock', 'Pop', 34);

class Car {
    brand;
    model;
    year;
    horsepower;
};

var bmw = new Car();
bmw.brand = "BMW";
bmw.model = "E46 M3 '06";
bmw.year = 2006;
bmw.horsepower = 470;
// ...

console.log(bmw);

console.log("Car year: " + bmw.year);

bmw.year = "Year 2006";

console.log("Car year: " + bmw.year);