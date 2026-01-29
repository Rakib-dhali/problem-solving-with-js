// homework
// Print all numbers divisible by 3 and 5 up to N

let N = 100;

for (let i = 3; i <= N; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
