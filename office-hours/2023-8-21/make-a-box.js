/*
  Write a function that takes a number as input and pints a square of that size using asterisks (*).
  For example, if the input is 5, the function should output:
  *****
  *****
  *****
  *****
  *****
*/

function printSquare(size) {
  // Outer loop represents rows
  for(let y = 0; y < size; y++) {
    let row = "";
    // Inner loop represents columns
    for(let x = 0; x < size; x++) {
      row += "*";
    }
    console.log(row);
  }

  console.log();
  console.log('------------------------------------');
  console.log();

  let row = "";
  for(let a = 0; a < size * size; a++) {
    row += "*";
    // it10: row = "*" x10
    if(row.length === size) {
      console.log(row);
      row = "";
    }
    // it1: row = "*"
    // it2: row = "**"
    // ...
    // it10: row = "" because it was printed and reset
  }
}

printSquare(10);