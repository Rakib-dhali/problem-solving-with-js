// Print Hollow Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    * *
//   *   *
//  *     *
// *********

let rows = 5;

for (let i = 1; i <= rows; i++) {
  let stars = 0;
  let frontSpaces = rows - i;
  let backSpaces = 0;
  if (i === 1) {
    stars = 1;
    console.log(" ".repeat(frontSpaces) + "*");
  } else if (i === rows) {
    stars = 2 * i - 1;
    console.log("*".repeat(stars));
  } else {
    stars = 2;
    backSpaces = 2 * i - 3;
    console.log(" ".repeat(frontSpaces) + "*" + " ".repeat(backSpaces) + "*");
  }
}
