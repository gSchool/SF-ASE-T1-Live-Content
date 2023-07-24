// find the common multiples of all the numbers between the given numbers

function smallestCommons(min, max) {
// function smallestCommons(arr) {
//   let [min, max] = arr.sort((a, b) => a - b);
  let multiple = max;

  for (let i = max; i >= min; i--) {
    // Ex: 10 % 4 = 2
    // if(multiple % i != 0) {
    if(multiple % i) {
      multiple += max;
      i = max;
    }
  }

  return multiple;
}

// const commonMultiple = smallestCommons([1, 5]);
const commonMultiple = smallestCommons(1, 5);
console.log("Common Multiple:", commonMultiple);