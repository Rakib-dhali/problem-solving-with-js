// Calculate Electricity Bill
// 0–100 units → ৳5 per unit
// 101–200 units → ৳7 per unit
// 201–300 units → ৳10 per unit
// Above 300 units → ৳12 per unit

let unit = 300;
let electricityBill = 0;

if (unit <= 100) {
  electricityBill = unit * 5;
} else if (unit <= 200) {
  electricityBill = 100 * 5 + (unit - 100) * 7;
} else if (unit <= 300) {
  electricityBill = 100 * 5 + 100 * 7 + (unit - 200) * 10;
} else {
  electricityBill = 100 * 5 + 100 * 7 + 100 * 10 + (unit - 300) * 12;
}
console.log(electricityBill);
