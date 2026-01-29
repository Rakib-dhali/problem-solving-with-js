// Print only the numbers that are both even and perfect squares
let N = 50;

for (let i = 1; i <= N; i++) {
  if (Number.isInteger(Math.sqrt(i)) && i % 2 === 0) {
    console.log(i);
  }
}
