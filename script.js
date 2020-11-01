// Password values
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Symbols
symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Variables to be used
var respond;
var lowerAlpha;
var upperAlpha;
var number;
var symbol;
// converts letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompt code
// Start function to generate password
function writePassword() {
  respond = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));

  if (!respond) {
    alert("Please enter a value");
  }

  else if (respond < 8 || respond > 128) {
    respond = parseInt(prompt("You must choose between 8 - 128"));
  }

  else {
    lowerAlpha = confirm("Include lowercase letters?");
    upperAlpha = confirm("Include uppercase letters?");
    number = confirm("Include numbers?");
    symbol = confirm("Include symbols?");

  }
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }
