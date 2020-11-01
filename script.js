// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password values
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Integers
integer = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Symbols
symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Variables to be used
var respond;
var integer;
var lowerAlpha;
var upperAlpha;
var symbol;


generateBtn.addEventListener("click", function () {
  pass = generatePassword ();
  document.getElementById("password").placeholder = pass;
});

//Prompt code
// Start function to generate password
function generatePassword() {
  responde = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));

  if (!respond) {
    alert("Please enter a value");
  }

  else if (respond < 8 || respond > 128) {
    respond = parseInt(prompt("You must choose between 8 - 128"));
  }

  else {

  }
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
