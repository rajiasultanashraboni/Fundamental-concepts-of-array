// array looping using for loop and while loop

const friends = ["Elon", "Bill", "Mark", "Warren"];

// loop using for of
for (const friend of friends) {
  //   console.log(friend);
}

// loop using for loop

for (let i = 0; i < friends.length; i++) {
  //   console.log(friends[i]);
}

// loop using while loop

let i = 0;
while (i < friends.length) {
  console.log(friends[i]);
  i++;
}
