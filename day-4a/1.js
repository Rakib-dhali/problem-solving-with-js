// Split Number into Digits

// Input: N = 12345
// Output: [1, 2, 3, 4, 5]
// ✨ Extract each digit mathematically using, and return them in an array. Do not use string operations.

function splitNumberIntoDigit(N) {
  let output = [];
  while (N > 0) {
    let last = N % 10;
    output.unshift(last);
    N = Math.floor(N / 10);
  }
  return output;
}
