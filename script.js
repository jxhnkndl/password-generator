// UI Vars
var generateBtn = document.querySelector("#generate");

// Character Arrays
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

var special = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\/", "]", "^", "_", "`", "{", "|", "}", "~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate password based on user inputs
function generatePassword() {
 
  // Init password length variable
  var passwordLength = 0;

  // Initiate the password generation sequence
  alert('The following questions will ask you about your preferences before creating you a new, secure password.')

  // Capture user's desired password length from prompt
  passwordLength = prompt('Please choose a number between 8 and 128 characters for your password.');

  // Determine which type of characters the user intends to include
  var uppercase = confirm('Would you like to include uppercase letters?');
  var lowercase = confirm('Would you like to include lowercase letters?');
  var numbers = confrim('Would you like to include numbers?');
  var special = confirm('Would you like to include special characters?');


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);