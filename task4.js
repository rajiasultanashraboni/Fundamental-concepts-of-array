// Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

var fruits = ["Banana", "mango", "apple", "orange", "grape"];
var numbers = [1, 2, 3, 4, 5, 6];
const name = "John"; // string
const age = 25; // number
const isStudent = true; // boolean

// console.log(Array.isArray(fruits));
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(name));
// console.log(Array.isArray(age));
// console.log(Array.isArray(isStudent));

if (Array.isArray(fruits)) {
  console.log("it is an array");
} else {
  console.log("it is not an array");
}
if (Array.isArray(numbers)) {
  console.log("it is an array");
} else {
  console.log("it is not an array");
}
if (Array.isArray(age)) {
  console.log("it is an array");
} else {
  console.log("it is not an array");
}
if (Array.isArray(name)) {
  console.log("it is an array");
} else {
  console.log("it is not an array");
}
if (Array.isArray(isStudent)) {
  console.log("it is an array");
} else {
  console.log("it is not an array");
}
