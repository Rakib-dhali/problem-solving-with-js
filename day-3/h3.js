// Print Diamond Pattern

// Input: Rows = 3

// Output:

//     *
//    ***
//   *****
//    ***
//     *

let rows = 5;
let maxRow = 2 * rows - 1;
for (let i = 1; i <= maxRow; i++) {
  let stars, fSpace;
  if (i <= rows) {
    stars = 2 * i - 1;
    fSpace = rows - i;
    console.log(" ".repeat(fSpace) + "*".repeat(stars));
  } else {
    stars = 2 * (maxRow - i) + 1;
    fSpace = i - rows;
    console.log(" ".repeat(fSpace) + "*".repeat(stars));
  }
}
