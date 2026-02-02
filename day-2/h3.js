// Calculate Income Tax Based on Slabs
// Up to ৳2,50,000 → No tax
// ৳2,50,001 – ৳5,00,000 → 5%
// ৳5,00,001 – ৳10,00,000 → 20%
// Above ৳10,00,000 → 30%

let income = 555555;
let incomeTax = 0;

if (income <= 250000) {
  console.log("no tax");
} else if (income <= 500000) {
  incomeTax = ((income - 250000) * 5) / 100;
} else if (income <= 1000000) {
  incomeTax = (250000 * 5) / 100 + ((income - 500000) * 20) / 100;
} else {
  incomeTax =
    (250000 * 5) / 100 + (500000 * 20) / 100 + ((income - 1000000) * 30) / 100;
}
console.log("৳", incomeTax);
