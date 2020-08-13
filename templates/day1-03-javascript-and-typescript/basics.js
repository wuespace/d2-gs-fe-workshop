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

// Was ist Objekt was Funktion, was speichert JavaScript

// Mutability
// ==, Gleichheit von Objekten

// map, concat, filter, ... Arraymethoden

const user = {
	name: 'max'
	age: 35,
	says: 'Hello World'
}
​
// ich möchte name und age haben
const { name, age } = user;
​
// geht auch so
const name = user.name;
const age = user.age;
​
// name ist leider schon besetzt
// also umbenennen
const userName = user.name;
​
// oder
const { name: userName } = user;
​
// das gesamte Objekt klonen
const newUser = { ...user };
​
// das Objekt Stück für Stück auseinander nehmen
const { name, ...rest } = user;
console.log(name); // max
console.log(rest); // { age: 35, says: 'Hello World' }
​
// die Eigenschaften sind identisch!
if (user.name === newUser.name) {
	console.log('equal');
} else {
	console.log('not equal');
}
// equal
​
// Objekte kann man mergen
const additionalInfos = {
	gender: 'male',
	size: 'large',
	says: 'Hey there!'
}
​
const advancedUser = { ...user, ...additionalInfos };
console.log(advancedUser.says); // Hey there!