// Write a function that takes a string as an argument and returns 
function longestContiguousString(stringInput){
    
    if(stringInput === "") {
      return "string is empty."
    }
    // a number representing the longest contiguous string of identical 
let letters =  stringInput.split("");
// iterate over letters to check contiguous letters
for(let i = 0; i < letters.length; i++){
    var number = 1;
// create temporary variable to store letters of current index
var currentLetters = letters[i];
//compare if the current letter is 
if(currentLetters === letters[i+1]){
    //add the instace to number variable
    number += 1;
    
}
} 
    return number;
}
console.log(longestContiguousString("looong"));
// should return 3
console.log(longestContiguousString("eventhough"));
// should return 1
console.log(longestContiguousString(""));
// should return "string is empty"
console.log(longestContiguousString("wwwhinnne"));
// should return 3

// characters.  For example, if the input string was "looong" then
// the function would return 3, since there are 3 contiguous "o" 
// characters in the input string.  A few more examples:

// input "eventhough" returns 1, because the two e's are not contiguous.
// input "jello" returns 2, since the 2 l's are next to each other.
// input "wwwhinnne" returns 3.

