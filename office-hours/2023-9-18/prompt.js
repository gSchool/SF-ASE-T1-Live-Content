// Define a function that will be used to turn an array of numbers
// into an array of booleans, based on each number being greater than 3
  //inspect each value in inputArray
// It should have one parameter for the number array it will be provided
function convertNumToBoolean(numArray, target){
// Inside this function:
// you will need an array to store the boolean values
let boolArray = [];
// you will need to loop over the array parameter
for (var i = 0; i < numArray.length; i++) {
    // for each number, if it is greater than 3, push "true" into the boolean array
  if (numArray[i] > target){
    boolArray.push(true);
  }else{
    boolArray.push(false);// if the number is less than or equal to 3, push "false" into the boolean array
  }
}
return boolArray;// return the boolean array

}
let test = [1, 5, 8, 2]; 
let test2 = [7, 2, 9, 3, 10];
console.log(convertNumToBoolean(test, 3)); //expect [false, true, true, false]
let convertedArray = convertNumToBoolean(test2, 8);
console.log(convertedArray); // expect [false, false, true, false, true]

// return the boolean array
// do NOT modify the array parameter (the array of numbers)

// -----------------------------------------------------------------

// Once the function is defined, create two number arrays, the names are up to you
// use these as arguments to two invocations of the function
// be sure to capture and log the returns, the two boolean arrays

// -----------------------------------------------------------------

// Stretch goal: take a second parameter that represents the number
// to compare to, IE instead of a static three each number is compared
// to the parameter to determine if it is greater than that number

// -----------------------------------------------------------------

// Dial it to 11: Instead of returning an array of boolean values,
// return an object in the form { true: [], false: [] } where each
// number is pushed into the correct array in the object