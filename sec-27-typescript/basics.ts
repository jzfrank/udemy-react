// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;
let heigh: number = 1.8;

let userName: string;
userName = "Jin";

let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// type allias
type Person = { name: string; age: number };

let person: Person;

person = {
  name: "Jin",
  age: 32,
};

let people: Person[];

// Type inference
let course = "React - The Complete Course";

// Union Types
let market: string | number = 1;

// Functions & types
function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics: flexibility and safety
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, 1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split(""); // the error will not be
// detected without generics, if we define any instead of T
