// write some code that determines whether a number is a perfect square or not.

// square:  when divided by x, returns x
// there is some other number that I can multiply by itself to return this number

// e.g. 1 * 1 = 1
//      2 * 2 = 4
//      3 * 3 = 9
//      4 * 4 = 16
//      5 * 5 = 25
//      6 * 6 = 36

// function that has:
  // parameter: a number
  // return value: true or false 

function isPerfectSquare(potentialSquare) {
  // multiply numbers by themselves in order,
  // if any of them produce the potentialSquare, return true
  // if they produce a number bigger than potentialSquare, return false

  // loop 1 to the value of potentialSquare
  for(let i = 1; i <= potentialSquare; i++) {
    // multiply the number of the iteration by itself
    const product = i * i;
    // if that product equals the potentialSquare, return true.
    if(product === potentialSquare) return true;
    // if that product is greater than potentialSquare, return false.
    if(product > potentialSquare) return false;
  }
}

console.log(isPerfectSquare(1));
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(16));

console.log(isPerfectSquare(3));
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(29));


/**
 * 
 * 1. ANALYZE the problem until you understand WHAT is being asked for.
 * 2. DETERMINE the system INPUTS and OUTPUTS
 * 3. do it "manually" a few times , and use that to write out a GENERAL STRATEGY
 * 4. break down / question assumptions in the strategy to create PSEUDOCODE
 * 5. write out the code that implements each line of pseudocode.
 * 6. TEST our code to ensure that our work produces the correct output.
 * 
 */
