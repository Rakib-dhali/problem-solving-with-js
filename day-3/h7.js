// Print Multiplication Table (Single and Upto N)

// Input 1: Number = 5

// Output:

// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50
// Input 2: Upto = 3

// Output:

// Table of 1
// 1 x 1 = 1
// ...
// Table of 3
// 3 x 10 = 30

let number = 3;
console.log("Table of ", number);
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
