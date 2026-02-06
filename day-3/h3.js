// Print Hollow Diamond Pattern

// Input: Rows = 5

// Output:

//       *
//      * *
//     *   *
//    *     *  fspace = 1 mspace =1
//   *       *  f = 0 m=3
//    *     *
//     *   *
//      * *
//       *

let rows = 5;

for (let i = 1; i <= 2 * rows - 1; i++) {
  let stars, fSpace, mSpaces;
  if (i === 1 || i === 2 * rows - 1) {}
    stars = 1;
    if (i <= rows) {
      for (let j = rows; j >= 1; j--){ 
        fSpace = j;
        mSpaces = 
        console.log(" ".repeat(fSpace) + "*".repeat(stars));}
    }else{
        for (let j = rows+1; j >= 2*rows-1 ; j++){ 
        fSpace = j;
        console.log(" ".repeat(fSpace) + "*".repeat(stars));}
    }
  }

