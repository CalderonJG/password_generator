// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate random values with Javascript
function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol(){
  var symbol = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  return symbol[Math.floor(Math.random()*symbol.length)];
}

const randomFunc = {
  lower : getRandomLowerCase,
  uppers : getRandomUpperCase,
  number : getRandomNumber,
  symbol : getRandomSymbol
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword(lower, upper, number, symbol, length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Homework criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
