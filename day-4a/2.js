// Remove the Decimal Point Mathematically

// Input: N = 12.34
// Output: 1234
// ✨ Do not use string operations.

function removeDecimalPoint(N) {
  let count = 0;
  let value = N;
  while (Math.abs(value - Math.round(value)) > 1e-10) {
    value *= 10;
    count++;
  }
  return Math.floor(value);
}
