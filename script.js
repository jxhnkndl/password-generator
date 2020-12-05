// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Create password in generatePassword() and save it
  var password = generatePassword();

  // Capture the UI field to display the password
  var passwordText = document.querySelector("#password");

  // Paint the UI field with the newly generated password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Password
function generatePassword() {

  // Alphanumiric characters
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Special non-alphanumeric characters
  var specialChars = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  // Concatenate alphanumeric + special character arrays
  var passwordArr = chars.split('').concat(specialChars);


  var passwordLength = 0;

  // Inform the user that they will be choosing password criteria
  alert('The following questions will help you create a new, secure password.');

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt('Please choose a number between 8 and 128 for the length of your password.'));
  }

  console.log(passwordLength);
  console.log(passwordArr);

}