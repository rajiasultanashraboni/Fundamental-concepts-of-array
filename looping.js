const numbers = [12, 1315, 14, 16, 18, 17, 25, 36, 25, 56, 86, 69, 58, 47];

// loop using for of

for (const number of numbers) {
  //   console.log(number);
}

// loop using for loop

for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
}

// loop using while loop

let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
