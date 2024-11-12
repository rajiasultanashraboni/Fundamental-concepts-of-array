// different types of reverse

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// number one
// const reversed = numbers.reverse();
// console.log(reversed);

//number two
const rev = [];
for (const num of numbers) {
  //   console.log(num);
  //   rev.unshift(num);
}

// console.log(rev);

//number three
const reverse = [];
for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
  //   reverse.unshift(numbers[i]);

  // or
  const num = numbers[i];
  reverse.unshift(num);
}
// console.log(reverse);

//number four

for (i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}
