var generateBtn = document.querySelector("#generate");
var password = [];
var answerIndex = [];
var lowerAlpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
function uppercase(lowercase) {
  return lowercase.toUpperCase();
}
var upperAlpha = lowerAlpha.map(uppercase);
var integers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ["!", "#", "$", "%", "&", "?", "@"];

function writePassword() {
  var passwordCriteria = {
    charLength: prompt(
      "What would you like your password's character length to be? (Min: 8, Max: 128)"
    ),
    charLowercase: confirm(
      "Would you like your password to include Lowercase letters?"
    ),
    charUppercase: confirm(
      "Would you like your password to include Uppercase letters?"
    ),
    charNumeric: confirm("Would you like your password to include numbers?"),
    charSlash: confirm('Would you like your password to include "/"?'),
    charSpecial: confirm(
      "Would you like your password to include special characters? ($%^&!@)?"
    )
  };
  var passwordText = document.querySelector("#password");
  if (passwordCriteria.charLength >= 8 && passwordCriteria.charLength <= 128) {
    password.length = passwordCriteria.charLength;
    if (passwordCriteria.charLowercase) {
      Array.prototype.push.apply(answerIndex, lowerAlpha);
    }
    if (passwordCriteria.charUppercase) {
      Array.prototype.push.apply(answerIndex, upperAlpha);
    }
    if (passwordCriteria.charNumeric) {
      Array.prototype.push.apply(answerIndex, integers);
    }
    if (passwordCriteria.charSlash) {
      answerIndex.push("/");
    }
    if (passwordCriteria.charSpecial) {
      Array.prototype.push.apply(answerIndex, specialChars);
    }
  } else {
    alert("Please input a correct number");
  }

  var i;
  for (i = 0; i < passwordCriteria.charLength; i++) {
    password.push(answerIndex[Math.floor(Math.random() * answerIndex.length)]);
    var passwordFinal = password.toString().replace(/,/g, "");
  }
  passwordText.value = passwordFinal;
}

generateBtn.addEventListener("click", writePassword);
