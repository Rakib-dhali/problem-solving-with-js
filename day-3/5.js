// Print Hollow Square Pattern

// Input: Rows = 5

// Output:

// *****
// *   *
// *   *
// *   *
// *****

let rows = 5;

for (let i = 1; i <= rows; i++) {
  let stars = 0;
  if (i === 1 || i === rows) {
    stars = rows;
    console.log("*".repeat(stars));
  } else {
    stars = 2;
    console.log("*" + " ".repeat(rows - stars) + "*");
  }
}
