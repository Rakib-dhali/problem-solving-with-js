// Print Butterfly Pattern

// Input: Rows = 5

// Output:

// *       *
// **     **
// ***   ***
// **** ****
// *********
// **** ****    s=8    i=6
// ***   ***    s=6    i=7
// **     **    s=4    i=8
// *       *    s=2    i=9

let rows = 5;

for (let i = 1; i <= 2 * rows - 1; i++) {
  let stars = 0;
  let spaces = 0;
  if (i < rows) {
    stars = 2 * i;
    spaces = 2 * rows - 1 - stars;
    console.log(
      "*".repeat(stars / 2) + " ".repeat(spaces) + "*".repeat(stars / 2),
    );
  } else if (i > rows) {
    stars = (2 * rows - i) * 2;
    spaces = 2 * rows - 1 - stars;
    console.log(
      "*".repeat(stars / 2) + " ".repeat(spaces) + "*".repeat(stars / 2),
    );
  } else {
    stars = 2 * rows - 1;
    spaces = 2 * rows - 1 - stars;
    console.log("*".repeat(stars));
  }
}


