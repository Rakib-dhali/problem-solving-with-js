// Print Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    ***
//   *****
//  *******
// *********

let rows = 5;
for (let i = 1; i <= rows; i++) {
  let totalStars = 2 * i - 1;
  let stars = "*".repeat(totalStars);
  let whiteSpaceCount = (2 * rows - 1 + stars.length) / 2;
  console.log(stars.padStart(whiteSpaceCount, " "));
}
