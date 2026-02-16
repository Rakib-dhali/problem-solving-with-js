// Print Rhombus Pattern

// Input: Rows = 5

// Output:

//     *****
//    *****
//   *****
//  *****
// *****

let rows = 5;

for (let i = rows; i > 0; i--) {
  let fSpace = i - 1;
  console.log(" ".repeat(fSpace) + "*".repeat(rows));
}
