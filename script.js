// PASSWORD GENERATOR
// J.K. Royston

// UI Vars
var generateBtn = document.querySelector("#generate");

// Capture and validate user's desired password length
function passwordLength() {
  var length = 0;
  // Basic alphabetic regex pattern to validate that length input only contains digits
  var alphabet = /[a-zA-Z]/g

  // Validate password length meets min/max criteria
  while (length < 8 || length > 128) {
    length = prompt('Please choose a number between 8 and 128 characters for your password.');

    // Validate password length does not contain any non-numeric characters
    if (alphabet.test(length)) {
      alert('The password length may only contain numbers. Please try again.');
      length = 0;
    }
  }

  return length;
}

// Get user character choices
function charChoices() {

  // Capture which type of characters the user wants to include (needs to run at least once)
  do {
    alert('Please select at least one character type to include in your password.');

    var charUpper = confirm('Would you like to include uppercase letters?');
    var charLower = confirm('Would you like to include lowercase letters?');
    var charNum = confirm('Would you like to include numbers?');
    var charSpecial = confirm('Would you like to include special characters?');
  
    // Loop back if the user has not confirmed at least one character type
  } while ((!charUpper && !charLower && !charNum && !charSpecial))

  // Build character objects with use preferences and character arrays
  var uppercase = {
    array: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    include: charUpper
  }

  var lowercase = {
    array: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    include: charLower
  }

  var numbers = {
    array: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    include: charNum
  }

  var special = {
    array: ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\/", "]", "^", "_", "`", "{", "|", "}", "~"],
    include: charSpecial
  }

  // Create character array to iterate through
  var characters = [uppercase, lowercase, numbers, special];

  // Init array that will contain only character types confirmed by user
  var passArr;

  // Loop through each character type and either include or exclude it from final array
  characters.forEach(type => {
    if (!passArr && type.include) {
      passArr = type.array;
      console.log(passArr);

    } else if (passArr && type.include) {
      passArr = passArr.concat(type.array);
      console.log(passArr);
    }
  });

  return passArr;
}


// Generate random number within range of 0 and length
function randomNumber(length) {
  return Math.floor(Math.random() * length);
}

// Generate password (primary application logic)
function generatePassword() {

  // Init final password variable
  var password = "";

  // Initiate the password generation sequence
  alert('The following questions will ask you about your preferences before creating you a new, secure password.')

  // Capture user's desired length and character criteria
  var length = passwordLength();
  var passwordArr = charChoices();

  // Loop through the chosen length and apply a random character to each index
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

  // Paint UI with final unique password
  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);