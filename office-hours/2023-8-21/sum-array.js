/*
Write a function called sumArray that takes an array of numbers as an argument and returns the sum of all the numbers in the array?
*/

function sumArray(numbers) {
  let sum = 0;
  for(let n = 0; n < numbers.length; n++) {
    sum += numbers[n];
  }

  // This is doing the SAME thing as the loop above
  sum = 0;
  for(let num of numbers) {
    sum += num;
  }

  return sum;
}

const nums = [1, 2, 3, 4, 5, 6];
console.log(sumArray(nums));