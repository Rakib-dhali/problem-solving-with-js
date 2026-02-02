// Check if a Character is Uppercase, Lowercase, Digit, or Special Character

let character = "5";

let asciiCode = character.charCodeAt(0);
if (character.length === 0 || asciiCode === 32) {
  console.log("provide some character");
} else {
  if (
    (asciiCode >= 33 && asciiCode <= 47) ||
    (asciiCode >= 58 && asciiCode <= 64) ||
    (asciiCode >= 91 && asciiCode <= 96) ||
    (asciiCode >= 123 && asciiCode <= 126)
  ) {
    console.log("Special character");
  } else if (asciiCode >= 48 && asciiCode <= 57) {
    console.log("Digit");
  } else if (asciiCode >= 65 && asciiCode <= 90) {
    console.log("Uppercase");
  } else if (asciiCode >= 97 && asciiCode <= 122) {
    console.log("Lowercase");
  }
}
