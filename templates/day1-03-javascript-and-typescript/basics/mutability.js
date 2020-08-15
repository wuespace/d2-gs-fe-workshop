/* 
    Mutable types have individual identities 
    and are compared by reference, that is, 
    variables hold references to objects, 
    or rather they point to the memory location of an object. 
    
    Immutable types don’t have individual identities 
    hence are compared by value, i.e. the value in the variable 
    and not the location they are referencing.
*/

//#region Mutable objects
var flower = {
    type: 'Rose',
    color: 'red'
};

var anotherFlower = flower; // assign value of flower to another flower

flower.color = 'white'; // change value in root object

console.log(anotherFlower.color); // shows white because it is referencing to the memory location
console.log(flower === anotherFlower); // true

// if you want to clone the object so that changes to the root don't apply 
// to the cloned one, use the spread operator

flower.color = "red"; // revert change

var yetAnotherFlower = { ...flower }; // spreads all values in flower into seperate values
// creates whole new object with the values of flower

flower.color = "white";

console.log(yetAnotherFlower.color); // shows red
console.log(flower === yetAnotherFlower); // false

//#endregion

//#region Immutable types e.g. string
var aString = "This is a string";
var bString = aString;
aString = "The string has changed";

console.log(aString); // The string has changed
console.log(bString); // This is a string
console.log(aString === bString); // false

/*
    When you modify a string, a whole new string is created, 
    and the name of the variable assigned to its memory reference. 
    There’s no way of changing the internal state of an immutable type, 
    so the variable simply gets reassigned to a new reference. 
    Same goes for numbers.
*/

//#endregion

//#region Why do you need to know?
/*
    Consider you have multiple threads working on the same object. 
    You cannot predict the outcome of your code 
    since the action of one thread will modify the object, 
    the next thread using this object as a parameter 
    will get totally different data and there’s no guarantee 
    that the operation will be safe.

    You cannot keep a copy of an object by assigning it to a variable first, 
    then modifying the properties of the original object. 
    The property values in the copy will also change.

    With immutable types, we know that a value’s state won’t be changed 
    once we create it hence not resulting in unexpected logic in our code. 
    For instance, we want to compare two email strings to authenticate a user. 
    If a string was mutable and a part of our code had altered the email string 
    inside some other method, then the user wouldn’t be able to log in.
*/
//#endregion

// Source (read for more examples):
// https://howtocreateapps.com/mutable-and-immutable-types-in-javascript-with-examples/