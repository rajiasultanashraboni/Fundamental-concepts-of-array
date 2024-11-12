// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input:

const colors = ["red", "blue", "green", "yellow", "orange"];

// with reverse method
// colors.reverse();
// console.log(colors);

// without reverse method
const reversed = [];
for (const color of colors) {
  //   console.log(color);
  reversed.unshift(color);
}
// console.log(reversed);

// second method of reverse
const reverse = [];
for (let i = 0; i < colors.length; i++) {
  //   console.log(colors[i]);
  reverse.unshift(colors[i]);
}
// console.log(reverse);

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']
