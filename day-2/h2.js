// Check Triangle Type Using Sides and Angles

const sides = [3, 6, 2];

const sortedSides = sides.toSorted((a, b) => a - b);

let a = sortedSides[0];
let b = sortedSides[1];
let c = sortedSides[2];

if (a + b > c) {
  if (a ** 2 + b ** 2 === c ** 2) {
    console.log("right angled");
  } else if (a === b && a === c) {
    console.log("equilateral");
  } else if (a === b || a === c || b === c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
} else {
  console.log("can't be a triangle");
}
