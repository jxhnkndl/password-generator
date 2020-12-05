// UI Vars
var generateBtn = document.querySelector("#generate");


// Character Arrays
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialArr = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\/", "]", "^", "_", "`", "{", "|", "}", "~"];


// Capture and validate user's desired password length
function passwordLength() {

  // Init length variable for validation
  var length = 0;

  // Basic regex to validate that password length is only digits
  var alphabet = /[a-zA-Z]/g

  // Validate password length meets criteria
  while (length < 8 || length > 128) {

    // Capture user password length as string
    length = prompt('Please choose a number between 8 and 128 characters for your password.');

    // Validate no alphabetic characters in password length
    if (alphabet.test(length)) {
      alert('The password length may only contain numbers.');

      // Reset length to restart the loop
      length = 0;
    }
  }

  // Convert string number into actual number
  return parseInt(length);
}


// Generate Password
function generatePassword() {

  // Initiate the password generation sequence
  alert('The following questions will ask you about your preferences before creating you a new, secure password.')

  // Capture user's desired password length
  var length = passwordLength();

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);