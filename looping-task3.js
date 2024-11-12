// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input:

var numbers = ["Tom", "Tim", "Tin", "Tik"];
let result = "";

for (const number of numbers) {
  result = result.concat(number);
}

console.log(result);

// Output:

// 'TomTimTinTik'
