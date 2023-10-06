// write a function that builds an array of objects, based on an input array of numbers
// it will map each number in the array to an object in the new array
// this function will have one parameter: an array of numbers
// it will return an array or objects, with each object having the following properties (keys):
// divide - the number divided by two
// multiply - the number multipled by two
// add - the number plus 2
// subtract - the number minus 2
// Example:
// for the input [2, 10]
// the output should be 
// [
//   { divide: 1, multiply: 4, add: 4, subtract: 0 } 
//   { divide: 5, multiply: 20, add: 12, subtract: 8 }
// ]; 


// stretch goal: update the funciton to take a "modifier" parameter to use in the calculations in place of a static 2.
// Example:
// for the input [2, 10] and 4 (as the modifier)
// the output should be 
// [
//   { divide: 0.5, multiply: 8, add: 6, subtract: -2 } 
//   { divide: 2.5, multiply: 40, add: 14, subtract: 6 }
// ]; 