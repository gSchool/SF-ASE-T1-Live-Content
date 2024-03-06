
/*

TELEPHONE WORDS pt. 1

Write a function that takes a string of 10 letters and returns the telephone number that you 
would dial to enter those characters on a phone dialing pad.  

Here is a reference image to what a phone dialing pad looks like:  https://www.researchgate.net/profile/Shumin-Zhai/publication/221518150/figure/fig1/AS:305488823635968@1449845619238/The-standard-12-key-telephone-keypad-character-layout-follows-the-ITU-E161-standard-8_Q320.jpg

If the input string is not exactly 10 letters long, the function should return false.  
If the input string contains any characters that are not represented on the dialing pad, 
  the function should return false.
The input string should handle both capital and lowercase letters.

Examples:  

  input “CALLMEACAB” output “2255632222”
	Input “NOSFERATWO” output “6673372896”
*/

// convert C to 2
// convert A to 2
// convert L to 5
// convert L to 5
// convert M to 6

function telephoneWords(lettersToChange) {

  let numberlist = ""
  const dialingPad = [
    [],
    ["_", ",", "@"]
    ["A", "B", "C"]
  ]

  const keyMapping = {
    "A": 2,
    "B": 2
  }

  key = xxx
  value = xxx
  obj[key] = value

  numberlist = numberlist + keyMapping[i]

  var numberTwo = ["a", "b", "c"]
  // Given: string
  // map letters to numbers 
  // if the letter is valid 
  let outputNumber = [];

  //If the input string is not exactly 10 letters long, the function should return false.  
  if(lettersToChange.length > 10 || lettersToChange.length < 10) {
    return false;
  }
  
  //If the input string contains any characters that are not represented on the dialing pad, the function should return false.
  if(typeof lettersToChange === "number")  --> false


// return value: string of numbers
  return outputNumber;
}
