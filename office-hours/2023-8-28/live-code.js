// create a loop that loops 5 times, and for each iteration the current iteration is logged (from 1 to 5, not 0 to 4)
for ( let i = 1; i <= 5; i++){
    // console.log(i)
}

const data = [
  'string',
  'two',
  'eight',
  'banana',
  'towncar',
  'new one',
  'another one'
];

// create loop to loop over the FIRST THREE elements in the data array and log the strings

data[2] // `eight`
data.length // 5

for (let i = 0; i <= 2; i++) {
  // console.log(data[i]);
}

// create a loop to loop over all the but LAST element in the array and log the strings, 
//BUT it has to be tied to the length of the array

for (let i = 0; i < data.length - 1; i++) {
  // console.log(data[i]);
}

const l = data.length - 2;
// for(let i = 0; i < l; i++) {
//   console.log(i);
//   data.shift();
// }

// for(let singular of plural)
// for(let element of array)
for(let string of data) {
  console.log(string);
}





