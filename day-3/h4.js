// Print Hourglass Pattern

// Input: Rows = 5

// Output:

// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********

let rows = 5;
let maxRow = 2 * rows - 1;

for (let i = 1; i <= maxRow; i++) {
  let stars, fSpace;
  if (i <= rows) {
    stars = 2 * (rows - i) + 1;
    fSpace = i - 1;
  } else {
    stars = 2 * (i - rows) + 1;
    fSpace = maxRow - i;
  }
  console.log(" ".repeat(fSpace) + "*".repeat(stars));
}
