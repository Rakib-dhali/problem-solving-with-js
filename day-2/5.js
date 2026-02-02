//Check if a Year is a Leap Year

let year = 20204;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(year, " is a leap year");
    } else {
      console.log(year, " not a leap year");
    }
  } else {
    console.log(year, " is a leap year");
  }
} else {
  console.log(year, " is not a leap year");
}
