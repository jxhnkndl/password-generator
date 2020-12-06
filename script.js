// PASSWORD GENERATOR
// J.K. Royston

// UI Vars
var generateBtn = document.querySelector("#generate");

// Character Arrays
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialArr = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\/", "]", "^", "_", "`", "{", "|", "}", "~"];

var characters = [upperArr, lowerArr, numArr, specialArr];


// Capture and validate user's desired password length
function passwordLength() {
  var length = 0;
  // Basic alphabetic regex pattern to validate that length input only contains digits
  var alphabet = /[a-zA-Z]/g

  // Validate password length meets min/max criteria
  while (length < 8 || length > 128) {
    length = prompt('Please choose a number between 8 and 128 characters for your password.');

    if (alphabet.test(length)) {
      alert('The password length may only contain numbers. Please try again.');
      length = 0;
    }
  }

  return length;
}

// CURRENTLY WORKING
function charChoices() {

  // Capture which type of characters the user wants to include (needs to run at least once)
  do {
    alert('Please select at least one character type to include in your password.');

    var uppercase = confirm('Would you like to include uppercase letters?');
    var lowercase = confirm('Would you like to include lowercase letters?');
    var numbers = confirm('Would you like to include numbers?');
    var special = confirm('Would you like to include special characters?');
  
    // Loop back if the user has not confirmed at least one character type
  } while ((!uppercase && !lowercase && !numbers && !special))

  // Init password array that will contain only character types chosen by user
  var passArr;

  // Check Password Array and Uppercase
  if (uppercase) {
    passArr = upperArr;
  }

  // Check Password Array and Lowercase
  if (!passArr && lowercase) {
    passArr = lowerArr;
  } else if (passArr && lowercase) {
    passArr = passArr.concat(lowerArr);
  } 

  // Check Password Array and Numbers
  if (!passArr && numbers) {
    passArr = numArr;
  } else if (passArr && numbers) {
    passArr = passArr.concat(numArr);
  } 

  // Check Password Array and Specials
  if (!passArr && special) {
    passArr = specialArr;
  } else if (passArr && special) {
    passArr = passArr.concat(specialArr);
  } 

  return passArr;
}

// Generate random number within range of 0 and length
function randomNumber(length) {
  return Math.floor(Math.random() * length);
}

// Generate password
function generatePassword() {

  // Init final password variable
  var password = "";

  // Initiate the password generation sequence
  alert('The following questions will ask you about your preferences before creating you a new, secure password.')

  // Capture and store user's preferences
  var length = passwordLength();
  var passwordArr = charChoices();

  // Loop through the chosen password length and apply a random character to each index
  for (var i = 0; i < length; i++) {
    var randomIndex = randomNumber(passwordArr.length);
    password += passwordArr[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);