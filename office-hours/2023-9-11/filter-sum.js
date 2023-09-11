const data = ["string", true, 45, {}, false, [], "more strings", 91, function(){}];
const strings = [];
const numbers = [];

// sum all of the numbers in the data
// we need somewhere to store the sum
// create a loop, and for each NUMBER in the array, add it to the sum
// we don't need an index for our logic to work - maybe a for...of?
// need to determine if the element is a number or not

let sum = 0;
for(let element of data) {
  // Sort all the elements by type
  switch(typeof element) {
    case "string":
      strings.push(element);
      break;
    case "number":
      numbers.push(element);
      break;
  }

  // Create a filtered array of just numbers
  // if(typeof element === 'number') {
  //   numbers.push(element);
  // }

  // Type check for numbers
  // if(typeof element === 'number') {
  //   sum += element;
  // }
}

for(let n of numbers) {
  sum += n;
}

console.log(sum);

// -----------------------------------

// How would you sort or collect the data by type, for all the types involved.
// how can we do this is a flexible, generic way
const dataByType = {};

for(let element of data) {
  const type = typeof element;

  if(!dataByType[type]) {
    dataByType[type] = [];
  }

  dataByType[type].push(element);
}

console.log(dataByType);

sum = 0;
for(let n of dataByType.number) {
  sum += n;
}

console.log(sum);
