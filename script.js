// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  var length=prompt("How many characters for your password? Select between 8-128");
  var lowercase=confirm("Would you like to include lowercase characters?");
  var uppercase=confirm("Would you like to include uppercase characters?");
  var numbers=confirm("Would you like to include numbers?");
  var special=confirm("Would you like to include special characters");

  if (length < 8 || length > 128) {
    break;
  }

  if (uppercase === true) {
    for (i = 0; i < upperArr.length; i++) {
    var randomUpper = upperArr[Math.floor(upperArr.length * Math.random())];
    document.write(randomUpper);
    }
  }

  if (lowercase === true){
    for (i = 0; i < lowerArr.length; i++) {
    var randomLower = lowerArr[Math.floor(lowerArr.length * Math.random())];
    document.write(lowerArr);
    }
  }

  if (numbers === true) {
    for (i = 0; i < numArr.length; i++) {
    var randomNum = numArr[Math.floor(numArr.length * Math.random())];
    document.write(numArr);
    }
  }
  
  if (special === true) {
    for (i = 0; i < specialArr.length; i++) {
    var randomSpecial = specialArr[Math.floor(specialArr.length * Math.random())];
    document.write(specialArr);
    }
  }
return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




