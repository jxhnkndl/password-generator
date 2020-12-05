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

// Character Arrays
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialArr = ['\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027','\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A','\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E']

// Generate Password
function generatePassword() {

  // Init character array
  var characterArr = [];

  // Init password length variable
  var passwordLength = 0;

  // Inform the user that they will be choosing password criteria
  alert('The following questions will help you generate a new, secure password.');

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt('Please choose a number between 8 and 128 for the length of your password.'));
  }

  // User inputs whether to include uppercase letters in the password
  var uppercase = confirm('Would you like to include uppercase letters?');

  // If so, uppercase letters get pushed into the cumulative character array
  if (uppercase) {
    upperArr.forEach(char => {
      characterArr.push(char);
    });
  }

  // User inputs whether to include lowercase letters in the password
  var lowercase = confirm('Would you like to include lowercase letters?');

  // If so, lowercase letters get pushed into the cumulative character array
  if (lowercase) {
    lowerArr.forEach(char => {
      characterArr.push(char);
    });
  }

  // User inputs whether to include numers in the password
  var numbers = confirm('Would you like to include numbers?');

  // If so, numbers get pushed into the cumulative character array
  if (numbers) {
    numArr.forEach(char => {
      characterArr.push(char);
    });
  }

  // User inputs whether to include lowercase letters in the password
  var specialChars = confirm('Would you like to include special characters?');

  // If so, special characters get pushed into the cumulative character array
  if (specialChars) {
    specialArr.forEach(char => {
      characterArr.push(char);
    });
  }

  console.log(characterArr);

}