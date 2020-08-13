// npm install --global typescript # Global installation
// npm install --save-dev typescript # Local installation

for (let i: number = 0; i < 10; i++) {
  console.log('Count: ' + i);
}
console.log("\n");

/* Arrays */
let arr: string[] = ['Rock', 'Paper', 'Scissors'];

for (let val of arr) {
  console.log(val);
}
console.log("\n");

arr.sort();

for(let val of arr) {
  console.log(val);
}

console.log(arr.pop());

arr.push('Plastic');

arr = arr.concat(['Metal', 'Wood']);

console.log(arr + "\n");

let value: boolean = false;
if (!value) { console.log(`Value is ${value} \n`); }

/* Numbers */
let dec: number = 12;
let bin: number = 0b1100;
let oct: number = 0o14;
let hex: number = 0xC;

/* Tuples */
let mixed: any[] = [1, 34, 'string', false]; // mixed datatypes
console.log(mixed.pop());

let typed: [string, number, boolean];
// typed = [1, 34, false]; // First parameter must be a string

let typed2: [string | number, number, boolean]; // Union type
// typed2 = [1, 34, false, true, 'rest', 30]; // too many elements

/* Rest parameters */
let people: string[] = ["Pablo", "Ludwig", "Jan", "und alle anderen"];

function Greeter(greeting: string, people: string[]) {
  let words = greeting + " ";
  for (let p of people) {
    words = words.concat(p, ", ");
  }
  words = words.concat("!");
  return words;
}

function Greeter2(greeting: string, ...people: string[]) {
  return greeting + " " + people.join(", ") + "!";
}

console.log(Greeter("Hello", people));

console.log(Greeter2("Hello", "Pablo", "Ludwig", "Jan", "und alle anderen"));
// console.log(Greeter2("Hello", ...people));

/*interface Person {
  name: string;
  age: number;
}*/

type Person = {
  prename: string;
  age: number;
}

type Student = {
  id: string;
  subject: string;
}

type Employee = {
  companyId: string;
  field: string[];
}

// Intersection Type, also works with interfaces
let person: Person & Student & Employee = {
  prename: 'Jan',
  age: 22,
  id: '22346534',
  subject: 'LuRI',
  companyId: '45344636',
  field: ['IT', 'Healthcare']
};

console.log(person['age']);

const { prename, subject } = person;

console.log(prename)

console.log(person);