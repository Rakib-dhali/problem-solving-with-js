// Separate Whole and Fractional Parts of a Number

// Input: N = 5.75
// Output: Whole = 5, Fraction = 0.75
// ✨ Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use Math.trunc() method.

function separateWholeFraction(N) {
  let sign = N > 0 ? 1 : -1;
  let absN = N * sign;
  let whole = 0;
  while (absN >= 1) {
    absN--;
    whole++;
  }
  let fraction = absN;
  whole = whole * sign;
  return { whole, fraction };
}
