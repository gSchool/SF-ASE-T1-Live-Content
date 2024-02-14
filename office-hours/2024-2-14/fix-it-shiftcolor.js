// There are not errors in this array
const colors = [
  "Red", "Orange", 
  "Yellow", "Green", 
  "Blue", "Indigo", 
  "Violet"
];

// This function is broken. Read through the function and the tests below
// to gain understanding of what the code is currently doing. From that
// understanding you can begin to formulate what needs to be fixed.
function shiftColor(startingColor, shiftAmount) {
  let index = colors.indexOf(startingColor) + shiftAmount;
  console.log(index);

  // if(7 > 7)
  if(index >= colors.length) {
    index = 0;
  } 

  return colors[index];
}


// These tests do not require changes. Use them
// as examples of the expected outcome.
console.log(shiftColor("Red", 3)); // "Green"
console.log(shiftColor("Blue", 4)); // "Red"
console.log(shiftColor("Yellow", 4)); // "Violet"
console.log(shiftColor("Blue", 3)); // "Red"