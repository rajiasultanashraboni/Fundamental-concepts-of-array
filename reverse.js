const friends = ["Elon", "Mark", "Warren", "Bill"];

// number one method
const rev = [];
for (const friend of friends) {
  //   console.log(friend);
  //   rev.unshift(friend);
}

// console.log(rev);

// number two method

const reverse = [];

for (let i = 0; i < friends.length; i++) {
  //   console.log(friends[i]);
  const num = friends[i];
  //   reverse.unshift(num);
}

// console.log(reverse);

// number three

for (let i = friends.length - 1; i >= 0; i--) {
  console.log(friends[i]);
}
