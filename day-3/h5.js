// Print Hollow Diamond Pattern

// Input: Rows = 3

// Output:

  //   *
  //  * *
  // *   *
  //  * *
  //   *

let rows = 3;
let maxRow = 2 * rows - 1;

for (let i = 1; i <= maxRow; i++) {
  let stars, fSpace, mSpaces;
  if (i === 1 || i === 2 * rows - 1) {
    i === 1 ? (fSpace = rows - i) : (fSpace = i - rows);
    console.log(" ".repeat(fSpace) + "*");
  } else {
    if (i < rows) {
      fSpace = rows - i;
      mSpaces = maxRow - stars - 2 * fSpace;
      console.log(" ".repeat(fSpace) + "*" + " ".repeat(mSpaces) + "*");
    } else if (i > rows) {
      fSpace = i - rows;
      mSpaces = maxRow - stars - 2 * fSpace;
      console.log(" ".repeat(fSpace) + "*" + " ".repeat(mSpaces) + "*");
    } else {
      mSpaces = maxRow - stars;
      console.log("*" + " ".repeat(mSpaces) + "*");
    }
  }
}
