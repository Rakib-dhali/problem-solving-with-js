// Print Alternating Binary Triangle

// Input: Rows = 5

// Output:

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let line = ""; 
    for (let j = 1; j <= i; j++) {
        line += ((i + j -1) % 2) + " ";
    }

    console.log(line); 
}
