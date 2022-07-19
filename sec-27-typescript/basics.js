// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var age;
age = 12;
var heigh = 1.8;
var userName;
userName = "Jin";
var isInstructor;
isInstructor = true;
// More complex types
var hobbies;
hobbies = ["Sports", "Cooking"];
var person;
person = {
    name: "Jin",
    age: 32
};
var people;
// Type inference
var course = "React - The Complete Course";
// Union Types
var market = 1;
// Functions & types
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
updatedArray[0].split("");
