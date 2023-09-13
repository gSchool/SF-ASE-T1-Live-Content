// define a function that takes a string as a parameter
// this function should return an array that contains three (or less) letter segments
// Ex:
// "1234567890" -> ["123", "456", "789", "0"]
// "this is a string!" -> ["thi", "s i", "s a", " st", "rin", "g!"]


function stringToArray(string, length){
  //create an array variable
  let newArray = [];
  
//loop over the string
  //once its at 3 we need to slice it and push it to the array variable
  for (let i = 0; i < string.length; i+= length) {
    // substinrg push i + 3
    // console.log('"' + string.substring(i, i+3) + '"');
    newArray.push((string.substring(i, i+length)));
  }
  return newArray;
//return array variable   
   
}

// Stretch Goal: take a second parameter that is used to determine the length of the segments
// splitThisString("1234567890", 4) -> ["1234", "5678", "90"]

const split = stringToArray("what string do we want to give it?", 6);
console.log(split);



// // Examples from MDN
// const str = 'Mozilla';
// //substring(indexStart)
// //substring(indexStart, indexEnd)

// console.log(str.substring(1, 3));
// // Expected output: "oz"

// console.log(str.substring(2));
// // Expected output: "zilla"


// // slice(indexStart)
// // slice(indexStart, indexEnd)
// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));
// // Expected output: "the lazy dog."

// console.log(str.slice(4, 19));
// // Expected output: "quick brown fox"

// console.log(str.slice(-4));
// // Expected output: "dog."

// console.log(str.slice(-9, -5));
// // Expected output: "lazy"
