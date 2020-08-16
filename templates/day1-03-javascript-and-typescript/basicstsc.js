// npm install --global typescript # Global installation
// npm install --save-dev typescript # Local installation
//#region for-loop
for (var i = 0; i < 10; i++) {
    console.log('Count: ' + i);
}
console.log("\n");
//#endregion
//#region Arrays
var arr = ['Rock', 'Paper', 'Scissors'];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val);
}
console.log("\n");
arr.sort();
for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
    var val = arr_2[_a];
    console.log(val);
}
console.log(arr.pop());
arr.push('Plastic');
arr = arr.concat(['Metal', 'Wood']);
console.log(arr + "\n");
//#endregion
//#region boolean
var value = false;
if (!value) {
    console.log("Value is " + value + " \n");
}
//#endregion
//#region Numbers
var dec = 12;
var bin = 12;
var oct = 12;
var hex = 0xC;
//#endregion
//#region Tuples
var mixed = [1, 34, 'string', false]; // mixed datatypes
console.log(mixed.pop());
var typed;
// typed = [1, 34, false]; // First parameter must be a string
var typed2; // Union type
// typed2 = [1, 34, false, true, 'rest', 30]; // too many elements
//#endregion
//#region Rest parameters / Spread operator
var people = ["Pablo", "Ludwig", "Jan", "and everybody else"];
//#region How would greet everybody
function Greeter(greeting, people) {
    var words = greeting + " ";
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var p = people_1[_i];
        words = words.concat(p, ", ");
    }
    words = words.concat("!");
    return words;
}
//#endregion
//#region spread operator
function Greeter2(greeting) {
    var people = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        people[_i - 1] = arguments[_i];
    }
    return greeting + " " + people.join(", ") + "!"; // join adds all the elements to a string, separated by a separator string
}
//#endregion
// console.log(Greeter("Hello", people));
console.log(Greeter2("Hello", "Pablo", "Ludwig", "Jan", "and everybody else"));
// Intersection Type, also works with interfaces
var person = {
    prename: 'Jan',
    age: 22,
    id: '22346534',
    subject: 'LuRI',
    companyId: '45344636',
    field: ['IT', 'Healthcare']
};
console.log(person['age']);
var onlyName = person.prename, onlySubject = person.subject;
console.log(onlyName);
console.log(person);
//#endregion
