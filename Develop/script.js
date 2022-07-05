// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var passwordLength = prompt('How long would you like the password to be?');

  if (passwordLength < 8 || passwordLength > 128){
    alert ('Password must be minimum 8 characters and maximum 128 characters');
  return "";
  }
  var hasLowerCase = confirm('Would you like to have lower case letters?');
  var hasUpperCase = confirm("Would you like to have upper case letters?");
  var hasNumeric= confirm("Would you like to have numeric value?");
  var specialCharacter= confirm("Would you like to have a special character?");
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericValues = "0123456789";
  var specialCharacters = "!@#$%&*^";
  
  let charset = "";
  if (hasLowerCase){
    charset = charset + lowerCaseLetters;
  }
  if (hasUpperCase){
    charset = charset + upperCaseLetters;
  }
  if (hasNumeric){
  charset = charset + numericValues;
  }
  if (specialCharacter){
    charset = charset + specialCharacters;
  }
  if (!hasLowerCase && !hasUpperCase && !hasNumeric && !specialCharacter){
    alert ('Password must contain minimum one character type');
    return "";
  }
  let password = "";
  for (var i = 0, n = charset.length; i < passwordLength; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
