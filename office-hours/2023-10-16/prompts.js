// parameter: a one-character string
// returns: the next character in the alphabet
// * will preserve capitalization
// * will loop "z" around to "a"
// * if the parameter is more than one character in length
//   or if the character is not a letter
//   the string provided will be returned, no conversion is made
function shiftCharacter(character) {
  if(!/[A-Za-z]/.test(character) || character.length > 1) {
    return character;
  }
  
  let code = character.charCodeAt(0);
  code++;
  
  if(character === "z") {
    code = 97;
  }

  if(character === "Z") {
    code = 65;
  }

  return String.fromCharCode(code);
}

// Create a function that will scramble (encrypt) a string
// It should accept a string and will return a new scrambled string
// Use the helper function below to shift each character in the source string

function scrambleEncrypt(string) {
  let newString = "";
  for (let c = 0; c < string.length; c++) {
    // newString = newString + shiftCharacter(string[c])
    newString += shiftCharacter(string[c]);
  }
  return newString;
}

const scrambleThis = "You need to scramble This string.";

console.log(scrambleEncrypt(scrambleThis));


// Stretch goal: write your own shiftCharacter function (delete the current one)