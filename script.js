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

}